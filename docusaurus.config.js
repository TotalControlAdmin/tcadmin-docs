// @ts-check
/** @type {import('@docusaurus/types').Config} */
import { themes as prismThemes } from 'prism-react-renderer';

const lightLogo = 'img/tcadmin-logo.png';
const darkLogo = 'img/TCAdmin_White.png';

const config = {
  title: 'TCAdmin Documentation',
  tagline: 'TCAdmin Documentation',
  favicon: 'img/cropped-tcadmin-favicon-32x32.png',
  url: 'https://docs.tcadmin.com',
  baseUrl: '/',
  organizationName: 'TotalControlAdmin',
  projectName: 'tcadmin-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          editUrl: 'https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-search-typesense'],

  themeConfig: {
    image: 'img/tcadmin-logo.png',
    typesense: {
      typesenseCollectionName: 'tcadmin-docs',
      typesenseServerConfig: {
        nodes: [
          {
            host: 'typesense.tcadmin.k8s.ovh.alexr03.dev',
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: 'fzpKd6Esfg47mr8Nh9f4Km1Kbbi1OiFM',
      },
      contextualSearch: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'TCAdmin Docs',
        src: lightLogo,
        srcDark: darkLogo,
      },
      items: [
        { href: 'https://github.com/TotalControlAdmin/tcadmin-docs', label: 'GitHub', position: 'right' },
        { href: 'https://discord.gg/ptN2pGf', label: 'Discord', position: 'right' },
        { href: 'https://community.tcadmin.com', label: 'Forums', position: 'right' },
        { href: 'https://www.tcadmin.com/', label: 'Main Website', position: 'right' },
        { href: 'https://clients.tcadmin.com/billing/clientarea.php', label: 'Billing', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} TCAdmin. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['php', 'cshtml', 'csharp'],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  },
};

export default config;