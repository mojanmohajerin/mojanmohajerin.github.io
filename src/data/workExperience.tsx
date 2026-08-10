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
  role: string;
  location: string;
  start: string;
  end: string;
  duration: string;
  image?: StaticImageData;
  summary: string;
  skills: string[];
}

export const workExperience: WorkExperience[] = [
  {
    company: "M2Labo",
    role: "Systems Engineer",
    location: "Japan",
    start: "Mar 2025",
    end: "Aug 2026",
    duration: "1 yr 6 mos",
    image: m2laboLogo,
    summary: "Systems engineering role in Japan.",
    skills: [],
  },
  {
    company: "SquareKicker",
    role: "Software Engineer",
    location: "New Zealand",
    start: "Oct 2022",
    end: "Oct 2024",
    duration: "2 yrs",
    image: skLogo,
    summary: "Front-end software engineering in a small start-up environment.",
    skills: ["React", "Next.js", "TypeScript", "GraphQL", "GitHub API"],
  },
  {
    company: "The Gravity Well",
    role: "Wall Assistant",
    location: "New Zealand",
    start: "Nov 2022",
    end: "Oct 2024",
    duration: "1 yr 11 mos",
    image: gravityWellLogo,
    summary: "Part-time climbing wall assistant role.",
    skills: [],
  },
  {
    company: "Victory Primary School",
    role: "Teacher Aide",
    location: "New Zealand",
    start: "Mar 2022",
    end: "Sept 2022",
    duration: "6 mos",
    image: victorySchoolLogo,
    summary: "Teacher aide role supporting students and classroom activities.",
    skills: [],
  },
  {
    type: "service",
    company: "Baha'i community",
    role: "Period of Baha'i Service",
    location: "New Zealand",
    start: "May 2021",
    end: "Sept 2022",
    duration: "1 yr 4 mos",
    summary:
      "A period dedicated to community service focused on community-building educational activities.",
    skills: ["Community-building", "Mentoring", "Facilitation"],
  },
  {
    company: "SMEC",
    role: "Graduate Electrical Engineer (Rail)",
    location: "Australia",
    start: "Oct 2018",
    end: "Apr 2021",
    duration: "2 yrs 6 mos",
    image: smecLogo,
    summary: "Rail electrical engineering graduate role after internship work.",
    skills: [],
  },
  {
    type: "education",
    company: "University of Sydney",
    role: "Bachelor of Engineering Honours (Mechatronic)",
    location: "Australia",
    start: "Jan 2015",
    end: "July 2019",
    duration: "4 yrs 6 mos",
    image: usydLogo,
    summary: "Graduated with Second Class, First Division Honours.",
    skills: [],
  },
];
