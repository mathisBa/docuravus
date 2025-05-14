import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Docker",
      items: [
        "docker/introduction",
        "docker/avantages",
        "docker/structure-dockerfile",
        "docker/commandes-essentielles",
        "docker/exemple-dockerfile",
        "docker/multistaging",
      ],
    },
    {
      type: "category",
      label: "Docker Compose",
      items: [
        "docker-compose/introduction",
        "docker-compose/outils",
        "docker-compose/exemple-compose",
        "docker-compose/mise-en-pratique",
      ],
    },
  ],
};

export default sidebars;
