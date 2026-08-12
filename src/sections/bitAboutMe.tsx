"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useRef } from "react";

import { useScrollIntoViewProgress } from "@/hooks/useScrollIntoViewProgress";
import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { colors } from "@/styles/colors";
import "../styles/effects.css";

export const BitAboutMe = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollIntoViewProgress(sectionRef);
  const rectangleOffset = 260 - scrollProgress * 520;
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Stack
      ref={sectionRef}
      direction="row"
      spacing={5}
      justifyContent="center"
      alignItems="center"
      sx={{
        color: colors.chalk,
        position: "relative",
        zIndex: 0,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -50,
          left: "50%",
          transform: `translateX(calc(-50% + ${rectangleOffset}px))`,
          zIndex: 0,
          height: 600,
          width: { xs: "calc(100vw - 2rem)", md: 1000 },
          backgroundColor: colors.base.light,
          opacity: 0.4,
          pointerEvents: "none",
          transition: "transform 0.1s",
          willChange: "transform",
        }}
      />
      <Stack spacing={5} sx={{ zIndex: 1 }}>
        <Typography variant="h2" sx={{ textShadow: "2px 2px 4px #000000" }}>
          {t.home.aboutTitle}
        </Typography>
        <Typography variant="h4" sx={{ textShadow: "2px 2px 4px #000000" }}>
          {t.home.aboutBody}
        </Typography>
      </Stack>
    </Stack>
  );
};
