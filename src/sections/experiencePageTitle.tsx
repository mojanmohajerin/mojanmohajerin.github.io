"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";

export const ExperiencePageTitle = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Stack
      spacing={2}
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        position: "absolute",
        left: -scrollPosition,
        transition: "left 0.1s",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -20,
          left: -80,
          height: 180,
          width: 400,
          background: `linear-gradient(90deg, rgba(98,149,132,1) 0%, rgba(0,212,255,0) 100%)`,
          opacity: 0.6,
          zIndex: -1,
        }}
      />
      <Typography variant="h3" sx={{ textShadow: "2px 2px 4px #000000" }}>
        {t.pages.timelineTitle}
      </Typography>
      <Typography
        variant="body1"
        sx={{ paddingLeft: "1rem", textShadow: "2px 2px 4px #000000" }}
      >
        {t.pages.timelineSubtitle}
      </Typography>
    </Stack>
  );
};
