import React from "react";
import Link from "@docusaurus/Link";
import { usePluginData } from "@docusaurus/useGlobalData";
import styles from "./navbar.module.css";

// Top-bar status chip (navbar item type "custom-latestBuild"): the newest V3 release
// from the releases-data-plugin, linking to its notes — the panel's version readout.
export default function LatestBuild({ mobile }) {
  const { releases } = usePluginData("releases-data-plugin");
  const latest = releases[0];
  if (mobile || !latest) return null;

  return (
    <Link to={`/3/releases/${latest.slug}`} className={styles.build} title={`Release notes for ${latest.title}`}>
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.buildLabel}>Latest</span>
      <span className={styles.buildVersion}>{latest.title}</span>
    </Link>
  );
}
