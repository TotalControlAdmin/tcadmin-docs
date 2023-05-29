const lightLogo = "img/tcadmin-logo.png";
const darkLogo = "img/TCAdmin_White.png";

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "TCAdmin Documentation",
  tagline: "TCAdmin Documentation",
  favicon: "img/favicon.ico",

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
          href: "https://github.com/TotalControlAdmin/tcadmin-docs",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://github.com/TotalControlAdmin/tcadmin-docs",
          label: "Forums",
          position: "right",
        },
        {
          href: "https://github.com/TotalControlAdmin/tcadmin-docs",
          label: "Main Website",
          position: "right",
        },
        {
          href: "https://github.com/TotalControlAdmin/tcadmin-docs",
          label: "Billing",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Docs",
        //       to: "/docs/intro",
        //     },
        //   ],
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "/blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus",
        //     },
        //   ],
        // },
      ],
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
};

module.exports = config;
