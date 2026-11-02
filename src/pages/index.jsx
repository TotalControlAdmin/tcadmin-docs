import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import styles from './index.module.css';

const VERSIONS = [
  {
    label: 'TCAdmin V2',
    meta: 'Version 2 // Production',
    status: 'Stable',
    statusClass: styles.stable,
    description:
      'The proven, production-ready release of TCAdmin. Covers installation, configuration, game management, scripting, and advanced customization.',
    href: '/intro',
  },
  {
    label: 'TCAdmin V3',
    meta: 'Version 3 // Next generation',
    status: 'Beta',
    statusClass: styles.beta,
    description:
      'The next-generation rebuild of TCAdmin with a modern architecture and new features. Documentation is actively being developed alongside the platform.',
    href: '/3/intro',
  },
];

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.arrow}
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function VersionCard({ label, meta, status, statusClass, description, href }) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.meta}>{meta}</span>
        <span className={clsx(styles.status, statusClass)}>
          <span className={styles.dot} aria-hidden="true" />
          {status}
        </span>
      </div>

      <h2 className={styles.cardTitle}>{label}</h2>

      <p className={styles.cardText}>{description}</p>

      <div className={styles.cta}>
        Browse documentation
        <ArrowIcon />
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="TCAdmin Documentation — Your complete guide to the TCAdmin game server control panel"
    >
      <main className={styles.hero}>
        {/* Hero */}
        <div className={styles.head}>
          <ThemedImage
            alt="TCAdmin"
            sources={{
              light: '/img/tcadmin-logo.png',
              dark: '/img/TCAdmin_White.png',
            }}
            className={styles.logo}
          />

          <h1 className={styles.title}>TCAdmin Documentation</h1>

          <p className={styles.lead}>
            Everything you need to install, configure, and manage your TCAdmin
            game server control panel.
          </p>
        </div>

        {/* Version cards */}
        <div className={styles.cards}>
          {VERSIONS.map((v) => (
            <VersionCard key={v.label} {...v} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
