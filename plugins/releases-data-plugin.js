const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const RELEASES_DIR_REL = path.join("versioned_docs", "version-3", "releases");

// Parse a release filename like "3.10.tbd.mdx" or "3.9.11.15408.mdx" into a
// numeric key for sorting. Non-numeric segments ("tbd") become Infinity so an
// in-progress TBD page sorts ABOVE any numeric build of the same version. A
// plain string sort is wrong here: "3.10" < "3.8" < "3.9" lexicographically.
function releaseSortKey(name) {
  return name
    .replace(/\.(mdx|md)$/, "")
    .split(/[.\s]+/)
    .filter(Boolean)
    .map((seg) => (/^\d+$/.test(seg) ? parseInt(seg, 10) : Infinity));
}

// Descending comparator (newest release first).
function compareReleasesDesc(a, b) {
  const ka = releaseSortKey(a);
  const kb = releaseSortKey(b);
  const len = Math.max(ka.length, kb.length);
  for (let i = 0; i < len; i++) {
    const va = ka[i] ?? -1;
    const vb = kb[i] ?? -1;
    if (va !== vb) return vb - va;
  }
  return 0;
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function generateDescription(content) {
  const featuresMatch = content.match(/###\s+New Features([\s\S]*?)(?:###|$)/);
  if (!featuresMatch) return "";
  const names = [];
  const re = /\*\*([^*]+)\*\*/g;
  let m;
  while ((m = re.exec(featuresMatch[1])) !== null) {
    names.push(m[1]);
    if (names.length === 5) break;
  }
  return names.length ? names.join(", ") + (names.length === 5 ? ", and more." : ".") : "";
}

function getReleases(siteDir) {
  const releasesDir = path.join(siteDir, RELEASES_DIR_REL);
  return fs
    .readdirSync(releasesDir)
    .filter((f) => (f.endsWith(".mdx") || f.endsWith(".md")) && f !== "index.mdx")
    .sort(compareReleasesDesc)
    .map((file) => {
      const raw = fs.readFileSync(path.join(releasesDir, file), "utf8");
      const { data, content } = matter(raw);
      const slug = path.basename(file).replace(/\.(mdx|md)$/, "");
      return {
        title: data.sidebar_label ?? data.title ?? slug,
        date: data.date ? new Date(data.date).toISOString() : null,
        description: data.description || generateDescription(content),
        slug,
        id: file,
      };
    });
}

function generateRSS(releases, siteUrl) {
  const items = releases
    .filter((r) => r.date)
    .map(
      (r) =>
        `\n    <item>\n      <title>${escapeXml(r.title)}</title>\n      <link>${siteUrl}/3/releases/${escapeXml(r.slug)}</link>\n      <guid isPermaLink="true">${siteUrl}/3/releases/${escapeXml(r.slug)}</guid>\n      <description>${escapeXml(r.description)}</description>\n      <pubDate>${new Date(r.date).toUTCString()}</pubDate>\n    </item>`
    )
    .join("");
  const lastBuild = releases[0]?.date ? new Date(releases[0].date).toUTCString() : new Date().toUTCString();
  const year = new Date().getFullYear();
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>TCAdmin v3 Releases</title>\n    <link>${siteUrl}/3/releases</link>\n    <description>Latest TCAdmin v3 release notes</description>\n    <language>en</language>\n    <lastBuildDate>${lastBuild}</lastBuildDate>\n    <atom:link href="${siteUrl}/releases/rss.xml" rel="self" type="application/rss+xml"/>\n    <copyright>Copyright \u00a9 ${year} TCADMIN.COM</copyright>${items}\n  </channel>\n</rss>`;
}

function generateAtom(releases, siteUrl) {
  const entries = releases
    .filter((r) => r.date)
    .map(
      (r) =>
        `\n  <entry>\n    <title>${escapeXml(r.title)}</title>\n    <link href="${siteUrl}/3/releases/${escapeXml(r.slug)}"/>\n    <id>${siteUrl}/3/releases/${escapeXml(r.slug)}</id>\n    <updated>${r.date}</updated>\n    <summary>${escapeXml(r.description)}</summary>\n  </entry>`
    )
    .join("");
  const updated = releases.find((r) => r.date)?.date ?? new Date().toISOString();
  const year = new Date().getFullYear();
  return `<?xml version="1.0" encoding="UTF-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom">\n  <title>TCAdmin v3 Releases</title>\n  <link href="${siteUrl}/3/releases"/>\n  <link rel="self" href="${siteUrl}/releases/atom.xml"/>\n  <id>${siteUrl}/releases/atom.xml</id>\n  <updated>${updated}</updated>\n  <rights>Copyright \u00a9 ${year} TCADMIN.COM</rights>${entries}\n</feed>`;
}

module.exports = function releasesDataPlugin(context) {
  return {
    name: "releases-data-plugin",
    async contentLoaded({ actions }) {
      const { setGlobalData } = actions;
      setGlobalData({ releases: getReleases(context.siteDir) });
    },
    async postBuild({ outDir }) {
      const releases = getReleases(context.siteDir);
      const siteUrl = context.siteConfig.url;
      const feedsDir = path.join(outDir, "releases");
      fs.mkdirSync(feedsDir, { recursive: true });
      fs.writeFileSync(path.join(feedsDir, "rss.xml"), generateRSS(releases, siteUrl));
      fs.writeFileSync(path.join(feedsDir, "atom.xml"), generateAtom(releases, siteUrl));
    },
  };
};
