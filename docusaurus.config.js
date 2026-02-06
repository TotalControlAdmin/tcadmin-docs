// @ts-check
/** @type {import('@docusaurus/types').Config} */
import { themes as prismThemes } from "prism-react-renderer";

const lightLogo = "img/tcadmin-logo.png";
const darkLogo = "img/TCAdmin_White.png";

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
      additionalLanguages: ["php", "cshtml", "csharp"],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  },
};

export default config;
