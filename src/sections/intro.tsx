"use client";

import { Box, Grid2 } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";

import { HoverOverMe } from "@/components/hoverOverMe";
import { HomeTextBlock } from "@/components/homeTextBlock";
import { SlidingGlassPanel } from "@/components/slidingGlassPanel";
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
  const fastPanelOffset = 360 - scrollProgress * 760;
  const slowPanelOffset = -520 + scrollProgress * 260;
  const risingPanelOffset = 140 + scrollProgress * 360;
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
      <SlidingGlassPanel
        offset={rectangleOffset}
        height={550}
        width={{ xs: "calc(100vw - 2rem)", md: 1200 }}
        accentSide="right"
      />
      <SlidingGlassPanel
        offset={fastPanelOffset}
        yOffset={-84 + scrollProgress * 42}
        rotate={-2}
        top={-88}
        height={210}
        width={{ xs: "64vw", md: 520 }}
        opacity={0.62}
        accentSide="left"
        blur={3}
      />
      <SlidingGlassPanel
        offset={slowPanelOffset}
        yOffset={120 - scrollProgress * 80}
        rotate={2.5}
        top={250}
        height={170}
        width={{ xs: "58vw", md: 420 }}
        opacity={0.5}
        accentSide="none"
        blur={2}
      />
      <SlidingGlassPanel
        offset={risingPanelOffset}
        yOffset={180 - scrollProgress * 150}
        rotate={-1.5}
        top={70}
        height={320}
        width={{ xs: "44vw", md: 300 }}
        opacity={0.42}
        accentSide="right"
        blur={2}
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
        <HomeTextBlock title={t.home.introTitle}>
          {[t.home.introSubtitle, t.home.introBody]}
        </HomeTextBlock>
      </Grid2>
    </Grid2>
  );
};
