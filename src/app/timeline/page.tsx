"use client";

import { Box } from "@mui/material";

import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { ExperiencePageBody } from "@/sections/experiencePageBody";
import { Title } from "@/sections/title";
import { WorkExperience } from "@/sections/workExperience";

export default function ExperiencePage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Box sx={{ mt: "-3rem", mb: "-3rem" }}>
      <Title
        title={t.pages.timelineTitle}
        additionalText={t.pages.timelineSubtitle}
        bottomSpacing={{ xs: "2rem", md: "3.5rem" }}
      />
      <ExperiencePageBody />
      <WorkExperience />
    </Box>
  );
}
