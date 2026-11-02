// Refreshes src/data/v3-games.json from the TCAdmin v3 plugin repositories.
//
//   npm run sync-games
//
// Reads the newest version of every game manifest (manifests/games/<name>/<version>/manifest.yaml)
// in the official and community repos and keeps the fields the docs show. Set GITHUB_TOKEN to lift
// the anonymous API rate limit (the deploy workflow does). On any failure the committed JSON is
// left untouched, so a build never depends on GitHub being reachable.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { load as loadYaml } from "js-yaml";

const REPOS = [
  { repo: "TotalControlAdmin/TCA3PluginRepo", source: "official" },
  { repo: "TotalControlAdmin/TCA3CommunityRepo", source: "community" },
];
const BRANCH = "master";
// Manifests tagged "Game" that are samples rather than games.
const EXCLUDE = new Set(["Script Examples"]);
const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "data", "v3-games.json");

const headers = { Accept: "application/vnd.github+json", "User-Agent": "tcadmin-docs-sync" };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function getJson(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${url} -> ${res.status} ${res.statusText}`);
  return res.json();
}

async function getText(url) {
  const res = await fetch(url, { headers: { "User-Agent": headers["User-Agent"] } });
  if (!res.ok) throw new Error(`${url} -> ${res.status} ${res.statusText}`);
  return (await res.text()).replace(/^﻿/, "");
}

// Numeric compare of dotted versions ("1.0.10" > "1.0.9").
function compareVersions(a, b) {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d) return d;
  }
  return 0;
}

const encodePath = (p) => p.split("/").map(encodeURIComponent).join("/");

async function gamesFrom({ repo, source }) {
  const tree = await getJson(`https://api.github.com/repos/${repo}/git/trees/${BRANCH}?recursive=1`);
  if (tree.truncated) throw new Error(`${repo}: git tree response was truncated`);

  // name -> newest version folder
  const latest = new Map();
  for (const { path: p } of tree.tree) {
    const m = p.match(/^manifests\/games\/([^/]+)\/([^/]+)\/manifest\.yaml$/);
    if (!m) continue;
    const [, name, version] = m;
    if (!/^\d+(\.\d+)*$/.test(version)) continue;
    if (!latest.has(name) || compareVersions(version, latest.get(name).version) > 0) {
      latest.set(name, { version, manifestPath: p });
    }
  }

  const games = [];
  for (const [folder, { version, manifestPath }] of latest) {
    const raw = await getText(`https://raw.githubusercontent.com/${repo}/${BRANCH}/${encodePath(manifestPath)}`);
    const m = loadYaml(raw) ?? {};
    const tags = (m.tags ?? []).map(String);
    if (!tags.some((t) => t.toLowerCase() === "game")) continue;
    if (EXCLUDE.has(folder) || EXCLUDE.has(String(m.name ?? ""))) continue;

    games.push({
      name: String(m.name ?? folder).trim(),
      identifier: m.identifier ?? null,
      version: String(m.version ?? version),
      author: m.author ?? null,
      description: m.shortDescription ? String(m.shortDescription).trim() : "",
      image: Array.isArray(m.images) && m.images.length ? m.images[0] : null,
      platforms: ["Windows", "Linux"].filter((os) => tags.some((t) => t.toLowerCase() === os.toLowerCase())),
      source,
    });
  }
  return games;
}

// One entry per game name: the same game can live in two folders (WolfET / Wolfenstein Enemy
// Territory) or in both repos. Platforms are merged; the official repo's entry wins.
function dedupe(games) {
  const byName = new Map();
  for (const g of games) {
    const key = g.name.toLowerCase();
    const seen = byName.get(key);
    if (!seen) {
      byName.set(key, g);
      continue;
    }
    const keep = seen.source === "official" || g.source !== "official" ? seen : g;
    keep.platforms = ["Windows", "Linux"].filter((os) => seen.platforms.includes(os) || g.platforms.includes(os));
    keep.image ??= seen.image ?? g.image;
    byName.set(key, keep);
  }
  return [...byName.values()];
}

try {
  const games = dedupe((await Promise.all(REPOS.map(gamesFrom))).flat())
    .sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
  if (!games.length) throw new Error("no game manifests found");

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ sources: REPOS.map((r) => r.repo), games }, null, 2) + "\n");
  console.log(`Wrote ${games.length} games to ${path.relative(process.cwd(), OUT)}`);
} catch (err) {
  console.warn(`sync-v3-games: ${err.message}; keeping the existing ${path.basename(OUT)}`);
}
