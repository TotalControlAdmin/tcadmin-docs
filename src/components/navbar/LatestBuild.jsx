import React from "react";
import Link from "@docusaurus/Link";
import { usePluginData } from "@docusaurus/useGlobalData";
import styles from "./navbar.module.css";

// Top-bar status chip (navbar item type "custom-latestBuild"): the newest V3 release
// from the releases-data-plugin, linking to its notes — the panel's version readout.
// Shows major.minor only (3.22); the full build number stays in the tooltip.
export default function LatestBuild({ mobile }) {
  const { releases } = usePluginData("releases-data-plugin");
  const latest = releases[0];
  if (!latest) return null;
  const short = latest.title.split(".").slice(0, 2).join(".");

  if (mobile) {
    return (
      <li className="menu__list-item">
        <Link to={`/3/releases/${latest.slug}`} className={`menu__link ${styles.drawerBuild}`}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.buildLabel}>Latest</span>
          <span className={styles.buildVersion}>{short}</span>
        </Link>
      </li>
    );
  }

  return (
    <Link to={`/3/releases/${latest.slug}`} className={styles.build} title={`Release notes for ${latest.title}`}>
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.buildLabel}>Latest</span>
      <span className={styles.buildVersion}>{short}</span>
    </Link>
  );
}
