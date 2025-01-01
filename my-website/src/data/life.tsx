import { StaticImageData } from "next/image";

import ausFlag from "../assets/experiencePagePhotos/aus-flag.png";
import gravityWellLogo from "../assets/experiencePagePhotos/gravity-well-logo.png";
import japanFlag from "../assets/experiencePagePhotos/japan-flag.jpg";
import nzFlag from "../assets/experiencePagePhotos/nz-flag.svg";
import skLogo from "../assets/experiencePagePhotos/sk-logo.svg";
import smecLogo from "../assets/experiencePagePhotos/SMEC.webp";
import tpsLogo from "../assets/experiencePagePhotos/tps-logo.png";
import thsLogo from "../assets/experiencePagePhotos/tuzza-logo.png";
import usydLogo from "../assets/experiencePagePhotos/usyd-logo.webp";
import victorySchoolLogo from "../assets/experiencePagePhotos/victory-school-logo.jpeg";

export interface Milestone {
  date: string;
  place: string;
  country: string;
  image: StaticImageData;
  event: string;
}

interface Life {
  [year: number]: Milestone[];
}

export const years = [
  2024, 2022, 2021, 2020, 2019, 2018, 2015, 2014, 2009, 2002, 1996,
];

export const life: Life = {
  2024: [
    {
      date: "Dec",
      place: "Fukuoka",
      country: "Japan",
      image: japanFlag,
      event:
        "Moved to Fukuoka.\nCurrently trying to find work and establish myself here. :)",
    },
    {
      date: "Oct",
      place: "Tokyo",
      country: "Japan",
      image: japanFlag,
      event: "Moved to Japan.\nWorking Holiday Visa.",
    },
    {
      date: "Oct",
      place: "SquareKicker",
      country: "New Zealand",
      image: skLogo,
      event: "Role: Software Engineer\nResigned.",
    },
    {
      date: "Oct",
      place: "The Gravity Well",
      country: "New Zealand",
      image: gravityWellLogo,
      event: "Role: Wall Assistant\nResigned.",
    },
  ],
  2022: [
    {
      date: "Nov",
      place: "The Gravity Well",
      country: "New Zealand",
      image: gravityWellLogo,
      event: "Started work.\nRole: Wall Assistant.",
    },
    {
      date: "Oct",
      place: "SquareKicker",
      country: "New Zealand",
      image: skLogo,
      event: "Role: Software Engineer\nStarted work.",
    },
    {
      date: "Sept",
      place: "Victory Primary School",
      country: "New Zealand",
      image: victorySchoolLogo,
      event: "Role: Teacher Aide\nResigned.",
    },
    {
      date: "Mar",
      place: "Victory Primary School",
      country: "New Zealand",
      image: victorySchoolLogo,
      event: "Role: Teacher Aide\nStarted work.",
    },
    {
      date: "Jan",
      place: "Nelson",
      country: "New Zealand",
      image: nzFlag,
      event:
        "Moved to Nelson.\nContinued efforts in community building projects.",
    },
  ],
  2021: [
    {
      date: "May",
      place: "Dunedin",
      country: "New Zealand",
      image: nzFlag,
      event:
        "Moved to New Zealand.\nDedicated a period of time to voluntary community building and educational projects.",
    },
    {
      date: "April",
      place: "SMEC",
      country: "Australia",
      image: smecLogo,
      event: "Role: Graduate Electrical Engineer (Rail)\nResigned.",
    },
  ],
  2020: [
    {
      date: "Jan",
      place: "SMEC",
      country: "Australia",
      image: smecLogo,
      event: "Role: Graduate Electrical Engineer (Rail)\nChanged department.",
    },
  ],
  2019: [
    {
      date: "July",
      place: "University of Sydney",
      country: "Australia",
      image: usydLogo,
      event: "Graduated university.\nSecond Class, First Division (Honours).",
    },
  ],
  2018: [
    {
      date: "Oct",
      place: "SMEC",
      country: "Australia",
      image: smecLogo,
      event: "Role: Document Controller\nStarted internship.",
    },
  ],
  2015: [
    {
      date: "July",
      place: "University of Sydney",
      country: "Australia",
      image: usydLogo,
      event:
        "Changed major.\nDegree: Bachelor of Engineering Honours (Mechatronic).",
    },
    {
      date: "Jan",
      place: "University of Sydney",
      country: "Australia",
      image: usydLogo,
      event:
        "Started attending university.\nDegree: Bachelor of Biomedical Engineering & Medical Science (double degree).",
    },
  ],
  2014: [
    {
      date: "Nov",
      place: "Turramurra High School",
      country: "Australia",
      image: thsLogo,
      event: "Graduated high school.\nHSC score 96.55.",
    },
  ],
  2009: [
    {
      date: "Jan",
      place: "Turramurra High School",
      country: "Australia",
      image: thsLogo,
      event: "Started attending high school.",
    },
  ],

  2002: [
    {
      date: "Jan",
      place: "Turramurra Public School",
      country: "Australia",
      image: tpsLogo,
      event: "Started attending primary school.",
    },
  ],
  1996: [
    {
      date: "Nov",
      place: "Hornsby Hospital, Sydney",
      country: "Australia",
      image: ausFlag,
      event: "I was born!",
    },
  ],
};
