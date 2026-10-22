import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import { useDocsVersionCandidates } from "@docusaurus/plugin-content-docs/client";
import styles from "./navbar.module.css";

// Top-bar section links for the docs version being read (navbar item type
// "custom-sectionLinks", registered in src/theme/NavbarItem/ComponentTypes.js).
// The navbar sits outside the docs sidebar context, so "active" is a path-prefix match;
// generated category pages (/category/...) are listed under the section that owns them.
// The longest matching prefix wins, so Games beats its parent Using TCAdmin.

const SECTIONS = {
  "2": [
    { label: "Getting Started", to: "/category/getting-started", match: ["/getting-started", "/category/getting-started", "/category/installation"] },
    { label: "Using TCAdmin", to: "/category/using-tcadmin", match: ["/using-tcadmin", "/category/using-tcadmin"] },
    {
      label: "Customizations",
      to: "/category/customizations",
      match: [
        "/customizations", "/category/customizations", "/category/modules", "/category/custom-protocols",
        "/category/general-scripts", "/category/ironpython", "/category/script-objects", "/category/scripts",
        "/category/themes", "/category/web-server-configurations",
      ],
    },
    { label: "Billing API", to: "/category/billing-api", match: ["/billing-api", "/category/billing-api"] },
    { label: "FAQ", to: "/category/faq", match: ["/FAQ", "/faq", "/category/faq"] },
  ],
  "3": [
    { label: "Getting Started", to: "/3/category/getting-started", match: ["/3/getting-started", "/3/category/getting-started", "/3/category/installation", "/3/category/initial-configuration"] },
    { label: "Using TCAdmin", to: "/3/category/using-tcadmin", match: ["/3/using-tcadmin", "/3/category/using-tcadmin", "/3/category/common"] },
    { label: "Games", to: "/3/using-tcadmin/games/supported-games", match: ["/3/using-tcadmin/games", "/3/category/games", "/3/category/cross-os-game-servers"] },
    { label: "Customizations", to: "/3/category/customizations", match: ["/3/customizations", "/3/category/customizations", "/3/category/scripts"] },
    { label: "Releases", to: "/3/releases/", match: ["/3/releases"] },
  ],
};

function matchLength(pathname, prefixes) {
  return Math.max(
    0,
    ...prefixes.map((p) => (pathname === p || pathname.startsWith(p.endsWith("/") ? p : `${p}/`) ? p.length : 0)),
  );
}

export default function SectionLinks({ mobile }) {
  const { pathname } = useLocation();
  const [version] = useDocsVersionCandidates(undefined);
  const sections = SECTIONS[version?.name];
  // The mobile drawer already shows the docs sidebar.
  if (mobile || !sections) return null;

  const scores = sections.map((s) => matchLength(pathname, s.match));
  const best = Math.max(...scores);

  return (
    <nav className={styles.sections} aria-label="Documentation sections">
      {sections.map((s, i) => (
        <Link
          key={s.to}
          to={s.to}
          className={clsx(styles.section, best > 0 && scores[i] === best && styles.sectionActive)}
          aria-current={best > 0 && scores[i] === best ? "true" : undefined}
        >
          {s.label}
        </Link>
      ))}
    </nav>
  );
}
