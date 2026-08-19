import { StaticImageData } from "next/image";

import gravityWellLogo from "../assets/experiencePagePhotos/gravity-well-logo.jpg";
import m2laboLogo from "../assets/experiencePagePhotos/m2labo-logo.png";
import skLogo from "../assets/experiencePagePhotos/sk-logo.svg";
import smecLogo from "../assets/experiencePagePhotos/SMEC.webp";
import usydLogo from "../assets/experiencePagePhotos/usyd-logo.webp";
import victorySchoolLogo from "../assets/experiencePagePhotos/victory-school-logo.jpeg";

export interface WorkExperience {
  type?: "work" | "education" | "service";
  company: string;
  companyJa?: string;
  role: string;
  roleJa?: string;
  location: string;
  locationJa?: string;
  start: string;
  startJa?: string;
  end: string;
  endJa?: string;
  duration: string;
  durationJa?: string;
  image?: StaticImageData;
  summary: string;
  summaryJa?: string;
  skills: string[];
  skillsJa?: string[];
  roles?: WorkExperienceRole[];
}

export interface WorkExperienceRole {
  role: string;
  roleJa?: string;
  start: string;
  startJa?: string;
  end: string;
  endJa?: string;
  duration: string;
  durationJa?: string;
  summary: string;
  summaryJa?: string;
  skills: string[];
  skillsJa?: string[];
}

export const workExperience: WorkExperience[] = [
  {
    company: "M2Labo",
    role: "Systems Engineer",
    roleJa: "システムエンジニア",
    location: "Japan",
    locationJa: "日本",
    start: "Mar 2025",
    startJa: "2025年3月",
    end: "Aug 2026",
    endJa: "2026年8月",
    duration: "1 yr 6 mos",
    durationJa: "1年6か月",
    image: m2laboLogo,
    summary: "Systems engineering role in Japan.",
    summaryJa: "日本でのシステムエンジニア職。",
    skills: ["Flutter", "AWS", "SQL", "Google Play Console", "Device Integration"],
    skillsJa: ["Flutter", "AWS", "SQL", "Google Play Console", "デバイス連携"],
  },
  {
    company: "SquareKicker",
    role: "Software Engineer",
    roleJa: "ソフトウェアエンジニア",
    location: "New Zealand",
    locationJa: "ニュージーランド",
    start: "Oct 2022",
    startJa: "2022年10月",
    end: "Oct 2024",
    endJa: "2024年10月",
    duration: "2 yrs",
    durationJa: "2年",
    image: skLogo,
    summary:
      "Developed front-end web applications with React, Next.js, and TypeScript for no-code products. Managed data flow through GraphQL and REST APIs, wrote Cypress tests, collaborated through GitHub code reviews, and worked in agile Scrum workflows.",
    summaryJa:
      "React、Next.js、TypeScript を用いてノーコードプロダクト向けのフロントエンドWebアプリケーションを開発。GraphQL と REST API によるデータフロー管理、Cypress による自動テスト、GitHub でのコードレビュー、Scrum を含むアジャイル開発に携わりました。",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "REST APIs",
      "Cypress",
    ],
    skillsJa: [
      "React",
      "Next.js",
      "TypeScript",
      "REST API",
      "Cypress",
    ],
  },
  {
    company: "The Gravity Well",
    role: "Wall Assistant",
    roleJa: "ウォールアシスタント",
    location: "New Zealand",
    locationJa: "ニュージーランド",
    start: "Nov 2022",
    startJa: "2022年11月",
    end: "Oct 2024",
    endJa: "2024年10月",
    duration: "1 yr 11 mos",
    durationJa: "1年11か月",
    image: gravityWellLogo,
    summary: "Part-time climbing wall assistant role.",
    summaryJa: "クライミングジムでのパートタイムのウォールアシスタント職。",
    skills: ["Customer Service"],
    skillsJa: ["接客"],
  },
  {
    company: "Victory Primary School",
    role: "Teacher Aide",
    roleJa: "ティーチャーエイド",
    location: "New Zealand",
    locationJa: "ニュージーランド",
    start: "Mar 2022",
    startJa: "2022年3月",
    end: "Sept 2022",
    endJa: "2022年9月",
    duration: "6 mos",
    durationJa: "6か月",
    image: victorySchoolLogo,
    summary: "Teacher aide role supporting students and classroom activities.",
    summaryJa: "児童と授業活動を支援するティーチャーエイド職。",
    skills: ["Mentoring", "Learning Support"],
    skillsJa: ["メンタリング", "学習支援"],
  },
  {
    type: "service",
    company: "Baha'i community",
    companyJa: "バハイ・コミュニティ",
    role: "Period of Baha'i Service",
    roleJa: "バハイ奉仕活動の期間",
    location: "New Zealand",
    locationJa: "ニュージーランド",
    start: "July 2021",
    startJa: "2021年7月",
    end: "July 2022",
    endJa: "2022年7月",
    duration: "1 yr",
    durationJa: "1年",
    summary:
      "A period dedicated to community service focused on community-building educational activities.",
    summaryJa:
      "コミュニティづくりを目的とした教育活動に重点を置いた奉仕の期間。",
    skills: ["Community-building", "Mentoring", "Volunteering", "Teaching"],
    skillsJa: ["コミュニティづくり", "メンタリング", "ボランティア", "教育"],
  },
  {
    company: "SMEC",
    role: "Rail Engineering & Project Documentation",
    roleJa: "鉄道エンジニアリング・プロジェクト文書管理",
    location: "Australia",
    locationJa: "オーストラリア",
    start: "Oct 2018",
    startJa: "2018年10月",
    end: "Apr 2021",
    endJa: "2021年4月",
    duration: "2 yrs 7 mos",
    durationJa: "2年7か月",
    image: smecLogo,
    summary:
      "Progressed through two roles at SMEC across rail electrical engineering and major infrastructure project documentation.",
    summaryJa:
      "SMEC にて、鉄道電気エンジニアリングと大規模インフラプロジェクトの文書管理にまたがる2つの職務を経験しました。",
    skills: [
      "Rail Electrical Design",
      "Document Control",
      "Technical Reports",
      "Dashboards",
      "Progress Tracking",
      "Factory Acceptance Testing",
    ],
    skillsJa: [
      "鉄道電気設計",
      "文書管理",
      "技術報告書",
      "ダッシュボード",
      "進捗管理",
      "工場受入試験",
    ],
    roles: [
      {
        role: "Graduate Electrical Engineer (Rail)",
        roleJa: "新卒電気エンジニア（鉄道）",
        start: "Jan 2020",
        startJa: "2020年1月",
        end: "Apr 2021",
        endJa: "2021年4月",
        duration: "1 yr 4 mos",
        durationJa: "1年4か月",
        summary:
          "Assisted with lighting, low voltage, earthing and bonding, and overhead wiring design for rail projects, following Australian and ASA standards. Prepared technical design reports, tender proposals, and fee estimates.",
        summaryJa:
          "鉄道プロジェクトにおける照明、低圧、接地・ボンディング、架線設備の設計を、オーストラリアおよび ASA 規格に準拠して支援。技術設計報告書、入札提案書、見積書の作成にも携わりました。",
        skills: [
          "Rail Electrical Design",
          "Technical Reports",
        ],
        skillsJa: [
          "鉄道電気設計",
          "技術報告書",
        ],
      },
      {
        role: "Document Controller",
        roleJa: "ドキュメントコントローラー",
        start: "Oct 2018",
        startJa: "2018年10月",
        end: "Dec 2019",
        endJa: "2019年12月",
        duration: "1 yr 3 mos",
        durationJa: "1年3か月",
        summary:
          "Managed design and construction documentation for the New M5 tunnel project, including certificates and engineering drawings. Built dashboards and trackers across design, construction, commissioning, and procurement, and participated in factory acceptance testing.",
        summaryJa:
          "New M5 トンネルプロジェクトにおいて、証明書や設計図面を含む設計・施工ドキュメントを管理。設計、施工、試運転、調達の進捗を可視化するダッシュボードやトラッカーを作成し、工場受入試験にも参加しました。",
        skills: [
          "Document Control",
          "Progress Tracking",
        ],
        skillsJa: [
          "文書管理",
          "進捗管理",
        ],
      },
    ],
  },
  {
    type: "education",
    company: "University of Sydney",
    companyJa: "シドニー大学",
    role: "Bachelor of Engineering Honours (Mechatronic)",
    roleJa: "工学士（優等学位・メカトロニクス）",
    location: "Australia",
    locationJa: "オーストラリア",
    start: "Jan 2015",
    startJa: "2015年1月",
    end: "July 2019",
    endJa: "2019年7月",
    duration: "4 yrs 6 mos",
    durationJa: "4年6か月",
    image: usydLogo,
    summary: "Graduated with Second Class, First Division Honours.",
    summaryJa: "Second Class, First Division Honours で卒業。",
    skills: [
      "Control Systems",
      "Electronics",
      "Signals & Sensors",
      "Mechanical Design",
      "Computer Vision",
    ],
    skillsJa: [
      "制御システム",
      "電子回路",
      "信号・センサー",
      "機械設計",
      "コンピュータビジョン",
    ],
  },
  {
    company: "Private Tutoring",
    companyJa: "個人家庭教師",
    role: "Private Tutor",
    roleJa: "個人家庭教師",
    location: "Australia",
    locationJa: "オーストラリア",
    start: "Jan 2015",
    startJa: "2015年1月",
    end: "Jun 2019",
    endJa: "2019年6月",
    duration: "4 yrs 6 mos",
    durationJa: "4年6か月",
    summary:
      "Provided private tutoring in mathematics and science, supporting students with concept building, problem solving, and exam preparation.",
    summaryJa:
      "数学と理科の個人指導を行い、概念理解、問題解決、試験対策を通して生徒を支援しました。",
    skills: ["Mathematics", "Science"],
    skillsJa: ["数学", "理科"],
  },
];
