import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { usePluginData } from "@docusaurus/useGlobalData";
import {
  LuArrowRight,
  LuBug,
  LuCircleHelp,
  LuDatabase,
  LuGamepad2,
  LuGithub,
  LuLayers,
  LuLightbulb,
  LuMessagesSquare,
  LuPlug,
  LuReceipt,
  LuRefreshCw,
  LuRocket,
  LuServer,
  LuWandSparkles,
  LuWrench,
} from "react-icons/lu";
import { FaDiscord } from "react-icons/fa6";
import { GAMES, GAMES_PAGE } from "./SupportedGames";
import styles from "./DocsIntro.module.css";

// Building blocks for the version intro pages (versioned_docs/version-{2,3}/intro.mdx),
// styled after the panel's service header, stat strip and settings tiles.

const DISCORD_URL = "https://discord.com/invite/ptN2pGf";
const V3_ISSUES_URL = "https://github.com/TotalControlAdmin/TCAdminV3-Issues/issues";

const SECTIONS = {
  "2": [
    { title: "Getting Started", description: "Requirements, installation, and initial configuration.", href: "/category/getting-started", Icon: LuRocket },
    { title: "Using TCAdmin", description: "Creating services, game and voice configuration, and daily administration.", href: "/category/using-tcadmin", Icon: LuServer },
    { title: "Customizations", description: "Scripts, themes, modules, languages, and web server setup.", href: "/category/customizations", Icon: LuWandSparkles },
    { title: "Billing API", description: "Automate provisioning from WHMCS and other billing panels.", href: "/category/billing-api", Icon: LuPlug },
    { title: "Database", description: "MySQL tuning, replication, and moving off SQLite.", href: "/category/database", Icon: LuDatabase },
    { title: "Misc", description: "Resource limits, quotas, compression, and debug mode.", href: "/category/misc", Icon: LuLayers },
    { title: "Updating", description: "Move your master and remote servers to the latest V2 build.", href: "/getting-started/updating", Icon: LuRefreshCw },
    { title: "FAQ", description: "Answers to common questions on Windows and Linux.", href: "/category/faq", Icon: LuCircleHelp },
  ],
  "3": [
    { title: "Getting Started", description: "System requirements, installation, and the first-run setup.", href: "/3/category/getting-started", Icon: LuRocket },
    { title: "Using TCAdmin", description: "Game services, blueprints, monitoring, and day-to-day administration.", href: "/3/category/using-tcadmin", Icon: LuServer },
    { title: "Customizations", description: "Scripts, themes, layout templates, and email templates.", href: "/3/category/customizations", Icon: LuWandSparkles },
    { title: "Billing Modules", description: "Provision and manage services straight from your billing panel.", href: "/3/billing-modules", Icon: LuReceipt },
    { title: "Update TCAdmin", description: "Keep your master and remote servers on the latest build.", href: "/3/update-tcadmin", Icon: LuRefreshCw },
    { title: "Troubleshooting", description: "Console mode, start commands, and diagnosing services that won't run.", href: "/3/category/troubleshooting", Icon: LuWrench },
  ],
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

function useReleases() {
  return usePluginData("releases-data-plugin").releases;
}

function Hero({ state, status, meta, lead, primary, secondary, stats }) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroMeta}>
        <span className={clsx(styles.status, styles[state])}>
          <span className={styles.dot} aria-hidden="true" />
          {status}
        </span>
        <span className={styles.mono}>{meta}</span>
      </div>

      <p className={styles.lead}>{lead}</p>

      <div className={styles.actions}>
        <Link to={primary.to} className={clsx(styles.btn, styles.btnPrimary)}>
          {primary.label}
          <LuArrowRight aria-hidden="true" />
        </Link>
        <Link to={secondary.to} className={clsx(styles.btn, styles.btnGhost)}>
          {secondary.label}
        </Link>
      </div>

      <dl className={styles.stats}>
        {stats.map(({ label, value, to }) => (
          <div key={label} className={styles.stat}>
            <dt className={styles.statLabel}>{label}</dt>
            <dd className={styles.statValue}>{to ? <Link to={to}>{value}</Link> : value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function IntroHero({ version = "3" }) {
  const releases = useReleases();

  if (version === "2") {
    return (
      <Hero
        state="stable"
        status="Stable"
        meta="TCAdmin v2 // Production"
        lead="The proven, production-ready release of TCAdmin. Install it, configure your games, and
          automate everything from provisioning to billing with scripts and the Billing API."
        primary={{ label: "Get started", to: "/getting-started/system-requirements" }}
        secondary={{ label: "Supported games", to: "https://www.tcadmin.com/features/" }}
        stats={[
          { label: "Status", value: "Stable" },
          { label: "Runs on", value: "Windows · Linux" },
          { label: "Database", value: "MySQL · SQLite" },
          { label: "Next generation", value: "TCAdmin V3", to: "/3/intro" },
        ]}
      />
    );
  }

  const latest = releases[0];
  return (
    <Hero
      state="beta"
      status="Beta"
      meta="TCAdmin v3 // Documentation in progress"
      lead="The next-generation rebuild of TCAdmin, on .NET 10 for Windows and Linux. These docs are
        written alongside the platform, so new pages land with every release."
      primary={{ label: "Get started", to: "/3/getting-started/system-requirements" }}
      secondary={{ label: "Release notes", to: "/3/releases/" }}
      stats={[
        ...(latest ? [{ label: "Latest release", value: latest.title, to: `/3/releases/${latest.slug}` }] : []),
        ...(latest?.date ? [{ label: "Released", value: formatDate(latest.date) }] : []),
        { label: "Releases", value: releases.length },
        { label: "Game configs", value: GAMES.length, to: GAMES_PAGE },
      ]}
    />
  );
}

export function SectionGrid({ version = "3" }) {
  return (
    <div className={styles.grid}>
      {SECTIONS[version].map(({ title, description, href, Icon }) => (
        <Link key={href} to={href} className={styles.tile}>
          <span className={styles.tileIcon} aria-hidden="true">
            <Icon />
          </span>
          <span className={styles.tileBody}>
            <span className={styles.tileTitle}>{title}</span>
            <span className={styles.tileText}>{description}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export function GameList({ games }) {
  return (
    <ul className={styles.games}>
      {games.map((game) => (
        <li key={game} className={styles.game}>
          <LuGamepad2 aria-hidden="true" />
          {game}
        </li>
      ))}
    </ul>
  );
}

export function LatestReleases({ count = 4 }) {
  const releases = useReleases().slice(0, count);

  return (
    <>
      <div className="releases-grid">
        {releases.map(({ id, title, date, description, slug }) => (
          <Link key={id} to={`/3/releases/${slug}`} className="release-card">
            <div className="release-card__version">{title}</div>
            {date && <div className="release-card__date">{formatDate(date)}</div>}
            <div className="release-card__summary">{description}</div>
          </Link>
        ))}
      </div>
      <p className={styles.more}>
        <Link to="/3/releases/">
          All release notes <LuArrowRight aria-hidden="true" />
        </Link>
      </p>
    </>
  );
}

function Panel({ Icon, title, children, actions }) {
  return (
    <div className={styles.panel}>
      <span className={styles.tileIcon} aria-hidden="true">
        <Icon />
      </span>
      <div className={styles.panelTitle}>{title}</div>
      <p className={styles.panelText}>{children}</p>
      <div className={styles.panelActions}>{actions}</div>
    </div>
  );
}

export function SupportCards({ version = "3" }) {
  const community = (
    <Panel
      Icon={FaDiscord}
      title="Community"
      actions={
        <>
          <Link to={DISCORD_URL} className={clsx(styles.btn, styles.btnGhost)}>
            Join the Discord
          </Link>
          {version === "2" && (
            <Link to="https://community.tcadmin.com" className={styles.textLink}>
              Community forum
            </Link>
          )}
        </>
      }
    >
      Questions, feedback, or just want to talk shop with other TCAdmin users? Join the
      conversation on Discord.
    </Panel>
  );

  if (version === "2") {
    return (
      <div className={styles.support}>
        {community}
        <Panel
          Icon={LuMessagesSquare}
          title="Game configs"
          actions={
            <Link
              to="https://community.tcadmin.com/files/"
              className={clsx(styles.btn, styles.btnGhost)}
            >
              Browse game configs
            </Link>
          }
        >
          Community-made game configurations and templates, ready to import into your
          panel.
        </Panel>
      </div>
    );
  }

  return (
    <div className={styles.support}>
      {community}
      <Panel
        Icon={LuGithub}
        title="Issue tracker"
        actions={
          <>
            <Link to={`${V3_ISSUES_URL}/new?template=bug_report.yml`} className={clsx(styles.btn, styles.btnGhost)}>
              <LuBug aria-hidden="true" />
              Report a bug
            </Link>
            <Link
              to="https://github.com/TotalControlAdmin/TCAdmin-V3-Issues-and-Feedback/discussions"
              className={clsx(styles.btn, styles.btnGhost)}
            >
              <LuLightbulb aria-hidden="true" />
              Request a feature
            </Link>
            <Link to={V3_ISSUES_URL} className={styles.textLink}>
              Browse issues
            </Link>
          </>
        }
      >
        Found a bug or have an idea? Report it on the public tracker so the team can follow
        it up.
      </Panel>
    </div>
  );
}
