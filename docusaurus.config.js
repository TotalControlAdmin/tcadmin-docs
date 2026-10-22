// @ts-check
/** @type {import('@docusaurus/types').Config} */

const lightLogo = "img/tcadmin-logo.png";
const darkLogo = "img/TCAdmin_White.png";

// Code blocks use the panel console palette (TCADMIN — Total Control theme bundle).
// The panel keeps its console dark in light mode too, so both themes share the
// token colours and differ only in background.
/** @param {string} background */
function consoleTheme(background) {
  return {
    plain: { color: "#d6e2f0", backgroundColor: background },
    styles: [
      { types: ["comment", "prolog", "doctype", "cdata"], style: { color: "#7189aa", fontStyle: "italic" } },
      { types: ["punctuation", "operator"], style: { color: "#a3b6cf" } },
      { types: ["keyword", "atrule", "important", "selector"], style: { color: "#c678dd" } },
      { types: ["function", "tag"], style: { color: "#2bbcf0" } },
      { types: ["class-name", "builtin", "namespace"], style: { color: "#5fd0f7" } },
      { types: ["string", "char", "attr-value", "regex", "inserted"], style: { color: "#1fc77e" } },
      { types: ["number", "boolean", "constant", "symbol", "entity"], style: { color: "#f5a524" } },
      { types: ["property", "attr-name", "variable", "parameter"], style: { color: "#3b8eea" } },
      { types: ["deleted"], style: { color: "#f0454f" } },
      { types: ["url"], style: { color: "#2bbcf0", textDecorationLine: "underline" } },
    ],
  };
}

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
  future: {
    v4: true,
  },

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

  // The panel's type system: Saira Condensed (display), IBM Plex Sans (body), JetBrains Mono.
  headTags: [
    { tagName: "link", attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" } },
    { tagName: "link", attributes: { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" } },
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Saira+Condensed:wght@600;700;800&display=swap",
  ],

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
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // The V3 intro lives at /3/intro (slug: /intro), so the bare /3/
          // route would otherwise 404. Emit a static redirect page for it.
          { from: "/3", to: "/3/intro" },
        ],
      },
    ],
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
          type: "docsVersionDropdown",
          position: "left",
        },
        // Custom items: src/theme/NavbarItem/ComponentTypes.js
        {
          type: "custom-sectionLinks",
          position: "left",
        },
        {
          type: "custom-latestBuild",
          position: "right",
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
      theme: consoleTheme("#071a33"),
      darkTheme: consoleTheme("#020916"),
      additionalLanguages: ["php", "cshtml", "csharp", "lua", "powershell"],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        // Collapse control lives in the sidebar footer (src/components/SidebarFooter.jsx).
        hideable: true,
      },
    },
  },
};

export default config;
