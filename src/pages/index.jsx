import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';

const VERSIONS = [
  {
    label: 'TCAdmin V2',
    badge: 'Stable',
    badgeClass: 'bg-emerald-500/20 text-emerald-500',
    cardClass:
      'bg-emerald-50 border-emerald-200 dark:bg-emerald-950/50 dark:border-emerald-800/60 hover:border-emerald-400 hover:shadow-[0_8px_40px_rgba(52,211,153,0.25)]',
    linkColor: '#10b981',
    description:
      'The proven, production-ready release of TCAdmin. Covers installation, configuration, game management, scripting, and advanced customization.',
    href: '/intro',
  },
  {
    label: 'TCAdmin V3',
    badge: 'Beta',
    badgeClass: 'bg-sky-500/20 text-sky-400',
    cardClass:
      'bg-sky-50 border-sky-200 dark:bg-sky-950/50 dark:border-sky-800/60 hover:border-sky-400 hover:shadow-[0_8px_40px_rgba(56,189,248,0.25)]',
    linkColor: '#38bdf8',
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
      className="transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function VersionCard({ label, badge, badgeClass, cardClass, linkColor, description, href }) {
  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-2xl border p-8 no-underline transition-all duration-300 hover:no-underline ${cardClass}`}
      style={{ color: 'inherit' }}
    >
      <span
        className={`mb-5 inline-block self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${badgeClass}`}
      >
        {badge}
      </span>

      <h2
        className="mb-3 mt-0 text-2xl font-bold"
        style={{ textTransform: 'none' }}
      >
        {label}
      </h2>

      <p
        className="mb-8 flex-1 text-sm leading-relaxed"
        style={{ color: 'var(--ifm-color-emphasis-700)' }}
      >
        {description}
      </p>

      <div
        className="flex items-center gap-2 text-sm font-semibold"
        style={{ color: linkColor }}
      >
        Browse Documentation
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
      <main className="flex min-h-[calc(100vh-var(--ifm-navbar-height))] flex-col items-center justify-center px-4 py-20">
        {/* Hero */}
        <div className="mb-16 text-center">
          <ThemedImage
            alt="TCAdmin"
            sources={{
              light: '/img/tcadmin-logo.png',
              dark: '/img/TCAdmin_White.png',
            }}
            className="mx-auto mb-8 h-14 w-auto"
          />

          <h1
            className="mb-5 text-4xl font-extrabold tracking-tight md:text-5xl"
            style={{ textTransform: 'none' }}
          >
            TCAdmin Documentation
          </h1>

          <p
            className="mx-auto max-w-lg text-lg leading-relaxed"
            style={{ color: 'var(--ifm-color-emphasis-600)' }}
          >
            Everything you need to install, configure, and manage your TCAdmin
            game server control panel.
          </p>
        </div>

        {/* Version cards */}
        <div className="grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          {VERSIONS.map((v) => (
            <VersionCard key={v.label} {...v} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
