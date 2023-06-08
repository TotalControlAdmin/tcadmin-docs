const lightLogo = "img/tcadmin-logo.png";
const darkLogo = "img/TCAdmin_White.png";

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "TCAdmin Documentation",
  tagline: "TCAdmin Documentation",
  favicon: "img/cropped-tcadmin-favicon-32x32.png",

  url: "https://docs.tcadmin.com",
  baseUrl: "/",

  organizationName: "TotalControlAdmin",
  projectName: "tcadmin-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          editUrl:
            "https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/",
        },
        blog: false, // Optional: disable the blog plugin
        // ...
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/tcadmin-logo.png",
    typesense: {
      // Replace this with the name of your index/collection.
      // It should match the "index_name" entry in the scraper's "config.json" file.
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

      // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
      typesenseSearchParameters: {},

      // Optional
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
          href: "https://clients.tcadmin.com/billing",
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
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  },
  plugins: [
    [
      'docusaurus-theme-search-typesense',
      {
        typesenseSearchParameters: {
          queryBy: 'title,keywords,content',
          numTypos: 2,
        },
      },
    ],
  ],
};

module.exports = config;
