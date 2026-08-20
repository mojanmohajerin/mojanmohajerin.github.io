import HiveImage17 from "../assets/projects/hive-image17.jpg";
import HiveImage9 from "../assets/projects/hive-image9.jpg";

import GithubToolImage from "../assets/projects/github-tool-image.jpeg";
import GithubToolImage2 from "../assets/projects/github-tool-image2.jpeg";
import GithubToolImage4 from "../assets/projects/github-tool-image4.jpeg";

import SKTemplateStoreCreator from "../assets/projects/sk-template-store-creator.jpg";
import SKTemplateStoreTemplate from "../assets/projects/sk-template-store-template.jpg";
import SKTemplateStore from "../assets/projects/sk-template-store.jpg";

import MMNavi1 from "../assets/projects/mm-navi1.png";
import MMNavi2 from "../assets/projects/mm-navi2.png";
import MMNavi3 from "../assets/projects/mm-navi3.png";
import MMNavi4 from "../assets/projects/mm-navi4.png";
import MMNavi5 from "../assets/projects/mm-navi5.png";
import MMNavi6 from "../assets/projects/mm-navi6.png";
import MMNavi7 from "../assets/projects/mm-navi7.png";

import ShoppingList1 from "../assets/projects/shopping-list1.png";
import ShoppingList2 from "../assets/projects/shopping-list2.png";
import ShoppingList3 from "../assets/projects/shopping-list3.png";

export const projects = [
  {
    thumbnailImage: MMNavi1,
    otherImages: [MMNavi1, MMNavi2, MMNavi3, MMNavi4, MMNavi5, MMNavi6, MMNavi7],
    name: "MM Navi",
    outline: "An app used to operate the Mobile Mover robot.",
    outlineJa: "Mobile Mover ロボットを操作するためのアプリ。",
    description:
      "MM Navi is an application used to operate the Mobile Mover - an agricultural assist robot. The app is designed on a Flutter codebase while utilising a Python backend and AWS to interact with a SQL database. Using this app, users can perform actions such as manage and control their Mover manually, create routes for a range of different work modules, run these routes autonomously integrating the Mover's Autodrive module and RTK GPS tracking, and review previous run results and logs.",
    descriptionJa:
      "MM Navi は、農業支援ロボットである Mobile Mover を操作するためのアプリケーションです。Flutter のコードベースで設計されており、Python バックエンドと AWS を利用して SQL データベースと連携します。このアプリを使うことで、ユーザーは Mover の管理や手動操作、さまざまな作業モジュール向けのルート作成、Mover の Autodrive モジュールと RTK GPS トラッキングを統合した自律走行、過去の実行結果やログの確認などを行うことができます。",
    date: "Mar 2025 - Aug 2026",
    dateJa: "2025年3月 - 2026年8月",
    technologies: [
      "Dart",
      "Flutter",
      "AWS",
      "Python",
      "SQL",
      "Google Play Console",
    ],
    url: "https://mobilemover.jp/"
  },
  {
    thumbnailImage: ShoppingList1,
    otherImages: [ShoppingList1, ShoppingList2, ShoppingList3],
    name: "Shopping List",
    outline: "A simple mobile shopping list app.",
    outlineJa: "シンプルなモバイル買い物リストアプリ。",
    description:
      "This was a simple project with the intention of becoming familiar with Flutter code. It incorporates a simple storage feature to remember data between app closures, as well as item entry, cross off, delete, history, and restore features. The code is open to download and use from my GitHub if this feels like something you need ;).",
    descriptionJa:
      "これは Flutter のコードに慣れることを目的として作ったシンプルなプロジェクトです。アプリを閉じてもデータを保持する簡単な保存機能に加え、アイテムの入力、チェック、削除、履歴、復元機能を備えています。必要そうだと感じる方は、GitHub からコードを自由にダウンロードして使うことができます ;)。",
    date: "Mar 2025 - Apr 2025",
    dateJa: "2025年3月 - 2025年4月",
    technologies: ["Dart", "Flutter"],
    url: "https://github.com/mojanmohajerin/shopping-app"
  },
  {
    thumbnailImage: GithubToolImage,
    otherImages: [
      GithubToolImage,
      GithubToolImage2,
      GithubToolImage4,
    ],
    name: "GitHub Tool",
    outline: "An application to optimise GitHub pull request efficiency.",
    outlineJa: "GitHub のプルリクエスト作業効率を高めるためのアプリケーション。",
    description:
      "This tool was originally developed for use at SquareKicker. It is a quick way to view GitHub repositories and pull request information. It also includes functionality such as filtering by dependabots, and by owner or reviewer. During periods experiencing large volumes of pull requests, this tool simplifies the process of summarising what is currently at what stage of review.",
    descriptionJa:
      "このツールはもともと SquareKicker での利用を目的として開発しました。GitHub のリポジトリやプルリクエスト情報を素早く確認できるツールです。Dependabot、担当者、レビュアーによる絞り込み機能も含まれています。大量のプルリクエストが発生している時期に、現在どのレビュー段階に何があるのかを整理しやすくします。",
    date: "Jul 2024 - Oct 2024",
    dateJa: "2024年7月 - 2024年10月",
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
    date: "Mar 2024 - Oct 2024",
    dateJa: "2024年3月 - 2024年10月",
    technologies: ["Typescript", "React", "Next.js", "GraphQL", "Vercel"],
    url: "https://store.squarekicker.com/templates",
  },
  {
    thumbnailImage: HiveImage9,
    otherImages: [HiveImage9, HiveImage17],
    name: "Hive",
    outline: "An online board game.",
    outlineJa: "オンラインボードゲーム。",
    description:
      "There was a board game that a friend and I used to play together in Australia. One day she moved to the other side of Australia, which made playing together difficult. So I programmed the board game.\nHive is a strategy-based board game, similar to chess, but played on hexagonal tiles. The objective is to surround your opponent's queen bee.",
    descriptionJa:
      "オーストラリアにいた頃、友人とよく一緒に遊んでいたボードゲームがありました。ある日、その友人がオーストラリアの反対側へ引っ越してしまい、一緒に遊ぶのが難しくなりました。そこで、そのボードゲームをプログラムしました。\nHive はチェスに似た戦略型のボードゲームですが、六角形のタイルを使って遊びます。目的は、相手の女王蜂を囲むことです。",
    date: "May 2020 - Aug 2020",
    dateJa: "2020年5月 - 2020年8月",
    technologies: ["Python"],
    url: "https://boardgamegeek.com/boardgame/2655/hive"
  },
];
