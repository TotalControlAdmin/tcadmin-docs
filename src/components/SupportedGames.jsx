import React, { useMemo, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { LuArrowRight, LuGamepad2, LuSearch } from "react-icons/lu";
import { FaLinux, FaWindows } from "react-icons/fa6";
import data from "@site/src/data/v3-games.json";
import styles from "./SupportedGames.module.css";

// V3 game configs, synced from the official + community plugin repos by
// scripts/sync-v3-games.mjs (npm run sync-games) into src/data/v3-games.json.

export const GAMES = data.games;
export const GAMES_PAGE = "/3/using-tcadmin/games/supported-games";

const FEATURED = ["Minecraft", "Rust", "ARK: Survival Evolved", "Counter-Strike 2", "Valheim", "Palworld"];

const PLATFORM_ICONS = { Windows: FaWindows, Linux: FaLinux };

function GameCard({ game }) {
  return (
    <div className={styles.card}>
      <span className={styles.art}>
        {game.image ? (
          <img src={game.image} alt="" loading="lazy" decoding="async" />
        ) : (
          <LuGamepad2 className={styles.artFallback} aria-hidden="true" />
        )}
        {game.source === "community" && <span className={styles.community}>Community</span>}
      </span>
      <span className={styles.body}>
        <span className={styles.name}>{game.name}</span>
        <span className={styles.platforms}>
          {game.platforms.map((os) => {
            const Icon = PLATFORM_ICONS[os];
            return (
              <span key={os} className={styles.platform}>
                <Icon aria-hidden="true" />
                {os}
              </span>
            );
          })}
        </span>
      </span>
    </div>
  );
}

export function FeaturedGames() {
  const featured = FEATURED.map((name) => GAMES.find((g) => g.name === name)).filter(Boolean);
  const games = featured.length >= 3 ? featured : GAMES.slice(0, 6);

  return (
    <>
      <div className={clsx(styles.grid, styles.featured)}>
        {games.map((game) => (
          <GameCard key={game.name} game={game} />
        ))}
      </div>
      <p className={styles.more}>
        <Link to={GAMES_PAGE}>
          View all {GAMES.length} games <LuArrowRight aria-hidden="true" />
        </Link>
      </p>
    </>
  );
}

const FILTERS = ["All", "Windows", "Linux"];

export function GameGrid() {
  const [query, setQuery] = useState("");
  const [platform, setPlatform] = useState("All");

  const games = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GAMES.filter(
      (g) => (platform === "All" || g.platforms.includes(platform)) && (!q || g.name.toLowerCase().includes(q)),
    );
  }, [query, platform]);

  return (
    <div className={styles.browser}>
      <div className={styles.toolbar}>
        <label className={styles.search}>
          <LuSearch aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter games"
            aria-label="Filter games"
          />
        </label>
        <div className={styles.segments} role="group" aria-label="Platform">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={clsx(styles.segment, platform === f && styles.segmentActive)}
              aria-pressed={platform === f}
              onClick={() => setPlatform(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <span className={styles.count} aria-live="polite">
          {games.length} / {GAMES.length}
        </span>
      </div>

      {games.length ? (
        <div className={styles.grid}>
          {games.map((game) => (
            <GameCard key={game.name} game={game} />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>No games match that filter.</p>
      )}
    </div>
  );
}
