// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const lightLogo = "img/tcadmin-logo.png";
const darkLogo = "img/TCAdmin_White.png";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TCAdmin Documentation',
  tagline: 'TCAdmin Documentation',
  favicon: 'img/cropped-tcadmin-favicon-32x32.png',

  // Set the production url of your site here
  url: 'https://docs.tcadmin.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TotalControlAdmin', // Usually your GitHub org/user name.
  projectName: 'tcadmin-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  themes: ['docusaurus-theme-search-typesense'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/tcadmin-logo.png',
      typesense: {
        // Replace this with the name of your index/collection.
        // It should match the "index_name" entry in the scraper's "config.json" file.
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
  
        // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
        typesenseSearchParameters: {},
  
        // Optional
        contextualSearch: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: "TCAdmin Docs",
          src: lightLogo,
          srcDark: darkLogo,
        },
        items: [
          {
            href: "https://github.com/TotalControlAdmin/tcadmin-docs",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://discord.gg/ptN2pGf",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://community.tcadmin.com",
            label: "Forums",
            position: "right",
          },
          {
            href: "https://www.tcadmin.com/",
            label: "Main Website",
            position: "right",
          },
          {
            href: "https://clients.tcadmin.com/billing/clientarea.php",
            label: "Billing",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} TCAdmin Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php', 'cshtml', 'csharp'],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
