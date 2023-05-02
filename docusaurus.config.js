// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Project Odyssey",
  tagline: "Official website, documentation, and blogs of Project Odyssey.",
  url: "https://odyssey-docs.web.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/favicon.ico",
  organizationName: "project-odyssey",
  projectName: "project-odyssey",
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/mentorship-sponsorship/mentorship-guide-docs/blob/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/mentorship-sponsorship/mentorship-guide-docs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Mentorship Guide",
        logo: {
          alt: "Mentorship Guide Logo",
          src: "img/mg-book.svg",
        },
        items: [
          {
            type: "doc",
            docId: "what-why-mentorship",
            position: "left",
            label: "Read",
          },
          { to: "/docs/contributing", label: "Contribute", position: "left" },
          {
            href: "https://github.com/mentorship-sponsorship/mentorship-guide-docs",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Read",
            items: [
              {
                label: "Why mentorship?",
                to: "/docs/what-why-mentorship",
              },
              {
                label: "For Mentors",
                to: "/docs/mentors-overview",
              },
              {
                label: "For Mentees",
                to: "/docs/mentees-overview",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "About",
                to: "/docs/about",
              },
              {
                label: "GitHub",
                href: "https://github.com/mentorship-sponsorship/mentorship-guide-docs",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/holaguedis",
              },
            ],
          },
          {
            title: "Contribute",
            items: [
              {
                label: "What about sponsorship?",
                to: "/docs/about#sponsorship-is-important",
              },
              {
                label: "Share what you can, when you can, how you can",
                to: "/docs/contributing",
              },
            ],
          },
        ],
        copyright: `Mentorship Guide - Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: false,
      },
    }),
};

module.exports = config;
