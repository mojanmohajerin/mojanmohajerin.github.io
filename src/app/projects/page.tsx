"use client";

import { Box } from "@mui/material";

import { CardUnit } from "@/components/card";
import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { Title } from "@/sections/title";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Title title={t.pages.projectsTitle} bottomSpacing="2rem" />
      <Box
        sx={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(325px, 1fr))",
          padding: { xs: "1em", md: "5em" },
        }}
      >
        {projects.map((project) => {
          return <CardUnit key={project.name} project={project} />;
        })}
      </Box>
    </>
  );
}
