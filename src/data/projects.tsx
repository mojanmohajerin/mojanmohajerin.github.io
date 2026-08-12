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
    outlineJa: "ボードゲーム。",
    description:
      "There was a board game that a friend and I used to play together in Australia. One day she moved to the other side of Australia, which made playing together difficult. So I programmed the board game.\nHive is a strategy-based board game, similar to chess, but played on hexagonal tiles. The objective is to surround your opponent's queen bee.",
    descriptionJa:
      "オーストラリアにいた頃、友人とよく一緒に遊んでいたボードゲームがありました。ある日、その友人がオーストラリアの反対側へ引っ越してしまい、一緒に遊ぶのが難しくなりました。そこで、そのボードゲームをプログラムしました。\nHive はチェスに似た戦略型のボードゲームですが、六角形のタイルを使って遊びます。目的は、相手の女王蜂を囲むことです。",
    date: "May, 2020",
    dateJa: "2020年5月",
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
    outlineJa: "GitHub の PR 作業効率を高めるためのアプリケーション。",
    description:
      "The tool was originally developed for use at SquareKicker. It is a quick way to view GitHub repositories and pull request information. It also includes functionality such as filtering by dependabots, and by owner or reviewer.",
    descriptionJa:
      "このツールはもともと SquareKicker での利用を目的として開発しました。GitHub のリポジトリやプルリクエスト情報を素早く確認できるツールです。Dependabot による絞り込みや、担当者・レビュアーによるフィルタリングなどの機能も含まれています。",
    date: "July, 2024",
    dateJa: "2024年7月",
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
    outlineJa:
      "プレミアム Squarespace テンプレートを購入するためのマーケットプレイス環境。",
    description:
      "The SquareKicker Template Store is a groundbreaking extension of the Squarespace ecosystem. It is an online marketplace environment allowing Squarespace users to browse hundreds of premium Squarespace templates across a variety of categories. The Template Store is the first of it's kind, an innovative product integrating template creators and end users in one convenient platform.",
    descriptionJa:
      "SquareKicker Template Store は、Squarespace エコシステムを拡張する画期的なプロダクトです。Squarespace ユーザーがさまざまなカテゴリの中から数百種類のプレミアム Squarespace テンプレートを閲覧できるオンラインマーケットプレイスです。Template Store はこの種のものとして初めてのもので、テンプレート制作者とエンドユーザーを一つの便利なプラットフォームに統合する革新的なプロダクトです。",
    date: "Mar, 2024",
    dateJa: "2024年3月",
    technologies: ["Typescript", "React", "Next.js", "GraphQL", "Vercel"],
    url: "https://store.squarekicker.com/templates",
  },
];
