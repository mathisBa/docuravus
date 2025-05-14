import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Docker doc",
  tagline: "La docu en exclu",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://github.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Moi", // Usually your GitHub org/user name.
  projectName: "docuravus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          // Modifiez ce lien vers votre repo pour le bouton "Edit this page"
          editUrl: "https://github.com/mon-orga/mon-repo/tree/main/",
        },
        blog: false, // <— on désactive complètement le blog
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg", // ou votre visuel
    navbar: {
      title: "Docuravus",
      logo: {
        alt: "Docuravus Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar", // ou l’ID de votre sidebar
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/mathisBa",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/docker/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://github.com/mathisBa",
            },
            {
              label: "Discord",
              href: "https://github.com/mathisBa",
            },
            {
              label: "Twitter",
              href: "https://github.com/mathisBa",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/mathisBa",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Docuravus.`,
    },
    prism: {
      // vos thèmes de coloration
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
