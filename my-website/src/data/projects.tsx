import GithubToolImage from "../assets/projects/github-tool-image.jpeg";
import HiveImage from "../assets/projects/hive-image3.webp";

export const projects = [
  {
    thumbnailImage: HiveImage,
    otherImages: [],
    name: "Hive",
    outline: "A board game.",
    description:
      "There was a board game that a friend and I used to play together in Australia. One day she moved to the other side of Australia, which made playing together difficult. So I programmed the board game.\nHive is a strategy-based board game, similar to chess, but played on hexagonal tiles. The objective is to surround your opponent's queen bee.",
    date: "May, 2020",
    technologies: ["Python"],
  },
  {
    thumbnailImage: GithubToolImage,
    otherImages: [],
    name: "GitHub Tool",
    outline: "An application to optimise GitHub PR efficiency.",
    description:
      "The tool was originally developed for use at SquareKicker. It is a quick way to view GitHub repositories and pull request information. It also includes functionality such as filtering by dependabots, and by owner or reviewer.",
    date: "July, 2024",
    technologies: ["Typescript", "React", "GitHub API"],
  },
];
