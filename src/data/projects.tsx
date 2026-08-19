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
      "MM Navi is a work project supporting Mobile Mover operations across a Flutter mobile app, backend APIs, device integration, test assets, and documentation. From the mobile app, users can manage machines, operate routes, perform BLE initial setup, review logs, and trigger OTA updates while coordinating with backend APIs and ESP32-S3 device firmware.",
    descriptionJa:
      "MM Navi は、Mobile Mover の運用を支える業務プロジェクトで、Flutter 製モバイルアプリ、バックエンド API、デバイス連携、テスト資産、関連ドキュメントを含みます。モバイルアプリから機体管理、ルート操作、BLE 初期設定、ログ確認、OTA 更新を行い、バックエンド API や ESP32-S3 デバイスファームウェアと連携します。",
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
  },
  {
    thumbnailImage: ShoppingList1,
    otherImages: [ShoppingList1, ShoppingList2, ShoppingList3],
    name: "Shopping List",
    outline: "A simple mobile shopping list app for everyday errands.",
    outlineJa: "日々の買い物に使うシンプルなモバイル買い物リストアプリ。",
    description:
      "Shopping List is a personal mobile app built to make everyday grocery trips easier to manage. It focuses on a clean checklist flow: quickly add items, mark them off while shopping, review completed items, and keep the interface light enough to use one-handed while moving around a store.",
    descriptionJa:
      "Shopping List は、日々の食料品の買い物を管理しやすくするために作った個人用のモバイルアプリです。素早く商品を追加し、買い物中にチェックを入れ、完了した商品を確認でき、店内を移動しながら片手でも使いやすい軽い操作感を重視しています。",
    date: "Mar 2025 - Apr 2025",
    dateJa: "2025年3月 - 2025年4月",
    technologies: ["Dart", "Flutter"],
  },
  {
    thumbnailImage: GithubToolImage,
    otherImages: [
      GithubToolImage,
      GithubToolImage2,
      GithubToolImage4,
    ],
    name: "GitHub Tool",
    outline: "An application to optimise GitHub PR efficiency.",
    outlineJa: "GitHub の PR 作業効率を高めるためのアプリケーション。",
    description:
      "The tool was originally developed for use at SquareKicker. It is a quick way to view GitHub repositories and pull request information. It also includes functionality such as filtering by dependabots, and by owner or reviewer.",
    descriptionJa:
      "このツールはもともと SquareKicker での利用を目的として開発しました。GitHub のリポジトリやプルリクエスト情報を素早く確認できるツールです。Dependabot による絞り込みや、担当者・レビュアーによるフィルタリングなどの機能も含まれています。",
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
    outline: "A board game.",
    outlineJa: "ボードゲーム。",
    description:
      "There was a board game that a friend and I used to play together in Australia. One day she moved to the other side of Australia, which made playing together difficult. So I programmed the board game.\nHive is a strategy-based board game, similar to chess, but played on hexagonal tiles. The objective is to surround your opponent's queen bee.",
    descriptionJa:
      "オーストラリアにいた頃、友人とよく一緒に遊んでいたボードゲームがありました。ある日、その友人がオーストラリアの反対側へ引っ越してしまい、一緒に遊ぶのが難しくなりました。そこで、そのボードゲームをプログラムしました。\nHive はチェスに似た戦略型のボードゲームですが、六角形のタイルを使って遊びます。目的は、相手の女王蜂を囲むことです。",
    date: "May 2020 - Aug 2020",
    dateJa: "2020年5月 - 2020年8月",
    technologies: ["Python"],
  },
];
