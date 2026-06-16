// @ts-check
/** @type {import('@docusaurus/types').Config} */
import { themes as prismThemes } from "prism-react-renderer";

const lightLogo = "img/tcadmin-logo.png";
const darkLogo = "img/TCAdmin_White.png";

// Parse a release label like "3.10 TBD" or "3.9.11.15408" into a numeric key
// for sorting. Splitting on dots AND whitespace handles both the spaced sidebar
// label and the dotted filename. Non-numeric segments ("TBD") become Infinity,
// so an in-progress TBD page sorts ABOVE any numeric build of the same version.
// (A plain string sort is wrong here: "3.10" < "3.8" < "3.9" lexicographically.)
/** @param {string} label */
function releaseSortKey(label) {
  return String(label)
    .split(/[.\s]+/)
    .filter(Boolean)
    .map((seg) => (/^\d+$/.test(seg) ? parseInt(seg, 10) : Infinity));
}

/** Descending comparator (newest release first). @param {string} a @param {string} b */
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

const config = {
  title: "TCAdmin Documentation",
  tagline: "TCAdmin Documentation",
  favicon: "img/cropped-tcadmin-favicon-32x32.png",
  url: "https://docs.tcadmin.com",
  baseUrl: "/",
  organizationName: "TotalControlAdmin",
  projectName: "tcadmin-docs",
  onBrokenLinks: "throw",
  onBrokenAnchors: "ignore",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          showLastUpdateTime: true,
          // @ts-ignore
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
            const items = await defaultSidebarItemsGenerator(args);
            /** @param {any[]} items */
            function sortItems(items) {
              return items.map((/** @type {any} */ item) => {
                if (item.type === "category") {
                  let sorted = /** @type {any[]} */ (sortItems(item.items));
                  if (item.label === "Releases") {
                    sorted.sort((/** @type {any} */ a, /** @type {any} */ b) =>
                      compareReleasesDesc(a.label ?? "", b.label ?? "")
                    );
                    // Keep the sidebar short: show only the newest few releases, then a
                    // "More…" link to the full Release Notes index — the same page the
                    // "Releases" category header opens. (Newest-first from the sort above.)
                    // Use a "link" item, NOT a "doc": a doc item's label is overridden by the
                    // target page's own sidebar_label ("Release Notes"), whereas a link keeps the
                    // label we set here. The index is at this version's "/releases/" route; V3 is
                    // served under "/3/" today (lastVersion is "2"). onBrokenLinks:"throw" guards it.
                    const MAX_VISIBLE_RELEASES = 4;
                    if (sorted.length > MAX_VISIBLE_RELEASES) {
                      const versionName = args.version && args.version.versionName;
                      const versionBase =
                        versionName && versionName !== "2" ? `/${versionName}` : "";
                      sorted = sorted.slice(0, MAX_VISIBLE_RELEASES);
                      sorted.push({ type: "link", label: "More…", href: `${versionBase}/releases/` });
                    }
                  }
                  return { ...item, items: sorted };
                }
                return item;
              });
            }
            return sortItems(items);
          },
          editUrl:
            "https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/",
          lastVersion: "2",
          onlyIncludeVersions: ["2", "3"], // v3 hidden until public release
          includeCurrentVersion: false,
          versions: {
            "2": {
              label: "V2",
            },
            "3": {
              label: "V3",
              banner: "none",
            },
          },
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  plugins: [
    "./plugins/releases-data-plugin",
  ],

  themes: ["docusaurus-theme-search-typesense"],

  themeConfig: {
    image: "img/tcadmin-logo.png",
    typesense: {
      typesenseCollectionName: "tcadmin-docs",
      typesenseServerConfig: {
        nodes: [
          {
            host: "typesense.tcadmin.k8s.ovh.alexr03.dev",
            port: 443,
            protocol: "https",
          },
        ],
        apiKey: "fzpKd6Esfg47mr8Nh9f4Km1Kbbi1OiFM",
      },
      contextualSearch: true,
    },
    navbar: {
      title: "",
      logo: {
        alt: "TCAdmin Docs",
        src: lightLogo,
        srcDark: darkLogo,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          type: "docsVersionDropdown",
          position: "left",
        },
        {
          href: "https://github.com/TotalControlAdmin/tcadmin-docs",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          href: "https://discord.com/invite/ptN2pGf",
          position: "right",
          className: "header-discord-link",
          "aria-label": "Discord",
        },
        {
          href: "https://www.tcadmin.com/",
          position: "right",
          className: "header-website-link",
          "aria-label": "TCAdmin Website",
        },
        {
          href: "https://clients.tcadmin.com/billing/clientarea.php",
          position: "right",
          className: "header-billing-link",
          "aria-label": "Client Area",
        },
        {
          href: "https://community.tcadmin.com",
          position: "right",
          className: "header-forum-link",
          "aria-label": "Community Forum",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} TCADMIN.COM, ALL RIGHTS RESERVED.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["php", "cshtml", "csharp", "lua", "powershell"],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  },
};

export default config;
