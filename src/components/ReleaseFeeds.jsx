import React, { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { LuAtom, LuCheck, LuCopy, LuRss } from "react-icons/lu";
import styles from "./ReleaseFeeds.module.css";

// Subscribe panel for the release notes index. The feeds themselves are written at build
// time by plugins/releases-data-plugin.js (postBuild), so they only exist on the deployed
// site: links and copied URLs always use the production siteConfig.url.

const FEEDS = [
  { label: "RSS feed", path: "/releases/rss.xml", Icon: LuRss },
  { label: "Atom feed", path: "/releases/atom.xml", Icon: LuAtom },
];

function CopyButton({ url, label }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked (permissions / insecure context): the link itself still works.
    }
  };

  return (
    <button
      type="button"
      className={styles.copy}
      onClick={copy}
      title={copied ? "Copied" : `Copy ${label} URL`}
      aria-label={copied ? `${label} URL copied` : `Copy ${label} URL`}
    >
      {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
    </button>
  );
}

export default function ReleaseFeeds() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={styles.panel}>
      <span className={styles.icon} aria-hidden="true">
        <LuRss />
      </span>
      <div className={styles.text}>
        <span className={styles.title}>Subscribe to releases</span>
        <span className={styles.lead}>Get every new TCAdmin v3 build in your feed reader as soon as its notes are published.</span>
      </div>
      <div className={styles.feeds}>
        {FEEDS.map(({ label, path, Icon }) => {
          const url = `${siteConfig.url}${path}`;
          return (
            <span key={path} className={styles.feed}>
              <a href={url} className={styles.btn} target="_blank" rel="noopener noreferrer">
                <Icon aria-hidden="true" />
                {label}
              </a>
              <CopyButton url={url} label={label} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
