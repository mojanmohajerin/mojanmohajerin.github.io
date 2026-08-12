"use client";

import { Box, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";

import { HoverOverMe } from "@/components/hoverOverMe";
import { useScrollIntoViewProgress } from "@/hooks/useScrollIntoViewProgress";
import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { colors } from "@/styles/colors";
import profileImage from "../assets/portrait-headshot.jpg";
import "../styles/effects.css";

export const Intro = () => {
  const profileImageSize = 400;
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollIntoViewProgress(sectionRef);
  const rectangleOffset = -260 + scrollProgress * 520;
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Grid2
      ref={sectionRef}
      container
      spacing={5}
      justifyContent="center"
      alignItems="center"
      sx={{
        color: colors.chalk,
        padding: "1em",
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
          height: 550,
          width: { xs: "calc(100vw - 2rem)", md: 1200 },
          backgroundColor: colors.base.light,
          opacity: 0.4,
          pointerEvents: "none",
          transition: "transform 0.1s",
          willChange: "transform",
        }}
      />
      <Grid2 size={{ xs: 12, md: 4 }} sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            borderRadius: "50%",
            border: `4px solid ${colors.gold}`,
            overflow: "hidden",
            width: profileImageSize,
            height: profileImageSize,
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          <HoverOverMe />
          <Image
            className="image-hover-scale"
            src={profileImage}
            alt="profile image"
            width={profileImageSize}
            height={profileImageSize}
          />
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 8 }} sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={5} sx={{ zIndex: 1 }}>
          <Typography variant="h2" sx={{ textShadow: "2px 2px 4px #000000" }}>
            {t.home.introTitle}
          </Typography>
          <Typography variant="h4" sx={{ textShadow: "2px 2px 4px #000000" }}>
            {t.home.introSubtitle}
          </Typography>
          <Typography variant="h4" sx={{ textShadow: "2px 2px 4px #000000" }}>
            {t.home.introBody}
          </Typography>
        </Stack>
      </Grid2>
    </Grid2>
  );
};
