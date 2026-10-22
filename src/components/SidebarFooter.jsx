import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { usePluginData } from "@docusaurus/useGlobalData";
import { useDocsVersion } from "@docusaurus/plugin-content-docs/client";
import { LuBug, LuMessagesSquare, LuPanelLeftClose } from "react-icons/lu";
import { FaDiscord } from "react-icons/fa6";
import styles from "./SidebarFooter.module.css";

// Pinned block under the docs sidebar (see src/theme/DocSidebar/Desktop), after the
// panel drawer's account band: help links, then a status readout + collapse control.

const DISCORD_URL = "https://discord.com/invite/ptN2pGf";

const HELP = {
  "3": {
    label: "Report an issue",
    href: "https://github.com/TotalControlAdmin/TCAdminV3-Issues/issues",
    Icon: LuBug,
  },
  "2": {
    label: "Community forum",
    href: "https://community.tcadmin.com",
    Icon: LuMessagesSquare,
  },
};

export default function SidebarFooter({ onCollapse }) {
  const { version, label } = useDocsVersion();
  const { releases } = usePluginData("releases-data-plugin");
  const isV3 = version === "3";
  const latest = isV3 ? releases[0] : null;
  const help = HELP[version] ?? HELP["2"];

  return (
    <div className={styles.footer}>
      <ul className={styles.links}>
        <li>
          <Link to={DISCORD_URL} className={styles.link}>
            <FaDiscord className={styles.icon} aria-hidden="true" />
            Discord community
          </Link>
        </li>
        <li>
          <Link to={help.href} className={styles.link}>
            <help.Icon className={styles.icon} aria-hidden="true" />
            {help.label}
          </Link>
        </li>
      </ul>

      <div className={styles.status}>
        <span className={clsx(styles.dot, isV3 ? styles.beta : styles.stable)} aria-hidden="true" />
        <span className={styles.readout}>
          {label} // {isV3 ? "Beta" : "Stable"}
          {latest && (
            <>
              {" "}
              <Link to={`/3/releases/${latest.slug}`} className={styles.build}>
                {latest.title}
              </Link>
            </>
          )}
        </span>
        {onCollapse && (
          <button
            type="button"
            className={styles.collapse}
            onClick={onCollapse}
            title="Collapse sidebar"
            aria-label="Collapse sidebar"
          >
            <LuPanelLeftClose aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
