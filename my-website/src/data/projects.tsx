import HiveImage17 from "../assets/projects/hive-image17.jpg";
import HiveImage23 from "../assets/projects/hive-image23.jpg";
import HiveImage29 from "../assets/projects/hive-image29.jpg";
import HiveImage9 from "../assets/projects/hive-image9.jpg";

import GithubToolImage from "../assets/projects/github-tool-image.jpeg";
import GithubToolImage1 from "../assets/projects/github-tool-image1.jpeg";
import GithubToolImage2 from "../assets/projects/github-tool-image2.jpeg";
import GithubToolImage3 from "../assets/projects/github-tool-image3.jpeg";
import GithubToolImage4 from "../assets/projects/github-tool-image4.jpeg";

import SKTemplateStoreCreator from "../assets/projects/sk-template-store-creator.jpg";
import SKTemplateStoreTemplate from "../assets/projects/sk-template-store-template.jpg";
import SKTemplateStore from "../assets/projects/sk-template-store.jpg";

export const projects = [
  {
    thumbnailImage: HiveImage9,
    otherImages: [HiveImage9, HiveImage17, HiveImage23, HiveImage29],
    name: "Hive",
    outline: "A board game.",
    description:
      "There was a board game that a friend and I used to play together in Australia. One day she moved to the other side of Australia, which made playing together difficult. So I programmed the board game.\nHive is a strategy-based board game, similar to chess, but played on hexagonal tiles. The objective is to surround your opponent's queen bee.",
    date: "May, 2020",
    technologies: ["Python"],
  },
  {
    thumbnailImage: GithubToolImage,
    otherImages: [
      GithubToolImage,
      GithubToolImage1,
      GithubToolImage2,
      GithubToolImage3,
      GithubToolImage4,
    ],
    name: "GitHub Tool",
    outline: "An application to optimise GitHub PR efficiency.",
    description:
      "The tool was originally developed for use at SquareKicker. It is a quick way to view GitHub repositories and pull request information. It also includes functionality such as filtering by dependabots, and by owner or reviewer.",
    date: "July, 2024",
    technologies: ["Typescript", "React", "GitHub API"],
  },
  {
    thumbnailImage: SKTemplateStore,
    otherImages: [
      SKTemplateStore,
      SKTemplateStoreTemplate,
      SKTemplateStoreCreator,
    ],
    name: "SK Template Store",
    outline:
      "A marketplace environment to purchase premium Squarespace templates.",
    description:
      "SquareKicker Template Store is a groundbreaking extension of the Squarespace ecosystem. It is an online marketplace connecting website creators and Squarespace users to browse hundreds of premium Squarespace templates across a variety of categories. Template Store is the first innovative product to bring together template creators and end users on one convenient platform.",
    date: "Mar, 2024",
    technologies: [
      "Typescript",
      "React",
      "Next.js",
      "GraphQL",
      "Strapi",
      "Stripe",
      "Vercel",
    ],
    url: "https://store.squarekicker.com/templates",
  },
];
