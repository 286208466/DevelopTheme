// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "FH",
  tagline: "FH",
  url:
    process.env.BASE === "zone"
      ? "https://docs.taro.zone"
      : "https://nervjs.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "FH", // Usually your GitHub org/user name.
  projectName: "FH", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  // clientModules: [
  //   require.resolve('./mySiteGlobalJs.js'),
  //   require.resolve('./mySiteGlobalCss.css'),
  // ],
  stylesheets: [
    // String format.
    "../../../Cesium/Widgets/widgets.css",
    // Object format.
    // {
    //   href: 'http://mydomain.com/style.css',
    // },
  ],
  scripts: [
    // String format.
    // "../../../Cesium/Cesium.js",
    // Object format.
    {
      src: "../../../Cesium/Cesium.js",
      // async: true,
    },
    {
      src: "../../../js/BaiDuImageryProvider.js",
      // async: true,
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/page.css"),
          ],
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs_cesium",
        path: "docs_cesium",
        routeBasePath: "docs_cesium",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs_maptalks",
        path: "docs_maptalks",
        routeBasePath: "docs_maptalks",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "FH",
        logo: {
          alt: "FH",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "dropdown",
            position: "left",
            label: "??????",
            items: [
              {
                to: "docs_cesium/overview", // ?????????????????????????????????????????? to ,????????? href
                activeBasePath: "docs_cesium", // ???????????????????????????
                label: "Cesium", // ???????????????
              },
              {
                to: "docs_maptalks/overview", // ?????????????????????????????????????????? to ,????????? href
                activeBasePath: "docs_maptalks", // ???????????????????????????
                label: "Maptalks", // ???????????????
              },
            ],
          },
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Tutorial",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright ?? ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
