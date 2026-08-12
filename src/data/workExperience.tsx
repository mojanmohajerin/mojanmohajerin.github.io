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
    skills: [],
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
    summary: "Front-end software engineering in a small start-up environment.",
    summaryJa:
      "小規模なスタートアップ環境でのフロントエンドソフトウェア開発。",
    skills: ["React", "Next.js", "TypeScript", "GraphQL", "GitHub API"],
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
    skills: [],
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
    skills: [],
  },
  {
    type: "service",
    company: "Baha'i community",
    companyJa: "バハイ・コミュニティ",
    role: "Period of Baha'i Service",
    roleJa: "バハイ奉仕活動の期間",
    location: "New Zealand",
    locationJa: "ニュージーランド",
    start: "May 2021",
    startJa: "2021年5月",
    end: "Sept 2022",
    endJa: "2022年9月",
    duration: "1 yr 4 mos",
    durationJa: "1年4か月",
    summary:
      "A period dedicated to community service focused on community-building educational activities.",
    summaryJa:
      "コミュニティづくりを目的とした教育活動に重点を置いた奉仕の期間。",
    skills: ["Community-building", "Mentoring", "Facilitation"],
    skillsJa: ["コミュニティづくり", "メンタリング", "ファシリテーション"],
  },
  {
    company: "SMEC",
    role: "Graduate Electrical Engineer (Rail)",
    roleJa: "新卒電気エンジニア（鉄道）",
    location: "Australia",
    locationJa: "オーストラリア",
    start: "Oct 2018",
    startJa: "2018年10月",
    end: "Apr 2021",
    endJa: "2021年4月",
    duration: "2 yrs 6 mos",
    durationJa: "2年6か月",
    image: smecLogo,
    summary: "Rail electrical engineering graduate role after internship work.",
    summaryJa: "インターン後に従事した鉄道電気分野の新卒エンジニア職。",
    skills: [],
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
    skills: [],
  },
];
