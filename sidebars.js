// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    "about",
    {
      type: "category",
      collapsed: false,
      label: "Past Experiences",
      link: {
        type: "doc",
        id: "mentors-overview",
      },
      items: [
        "mentorship-styles",
        "mentorship-forms",
        "mentors-becoming-a-mentor",
        "mentors-what-to-share",
        "mentors-when-where-to-mentor",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Mentees",
      link: {
        type: "doc",
        id: "mentees-overview",
      },
      items: [
        "mentees-how-to-find-mentors",
        "mentees-where-to-find-mentors",
        "mentees-practices",
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Contributing",
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
