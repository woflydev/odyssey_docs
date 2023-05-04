// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    "about",
    {
      type: "category",
      collapsed: false,
      label: "Our Team",
      link: {
        type: "doc",
        id: "our-team-overview",
      },
      items: [
        "mentorship-styles",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Software and Hardware",
      link: {
        type: "doc",
        id: "mentees-overview",
      },
      items: [
        "mentees-how-to-find-mentors",
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Github and Contributing",
      link: {
        type: "doc",
        id: "contributing-overview",
      },
      items: [
        "code-of-conduct",
        "contributing",
        "internationalization",
        "thank-you-contributions",
      ],
    },
  ],
};

module.exports = sidebars;