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
  const fastPanelOffset = 110 - scrollProgress * 280;
  const slowPanelOffset = -120 + scrollProgress * 180;
  const risingPanelOffset = 70 + scrollProgress * 240;
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
        padding: { xs: "0.75em", md: "1em" },
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
        left="16%"
        yOffset={-92 + scrollProgress * 64}
        rotate={-2}
        top={-135}
        height={210}
        width={{ xs: "46vw", md: 420 }}
        opacity={0.62}
        accentSide="left"
        blur={3}
      />
      <SlidingGlassPanel
        offset={slowPanelOffset}
        left="88%"
        yOffset={150 - scrollProgress * 110}
        rotate={2.5}
        top={310}
        height={170}
        width={{ xs: "50vw", md: 360 }}
        opacity={0.5}
        accentSide="none"
        blur={2}
      />
      <SlidingGlassPanel
        offset={risingPanelOffset}
        left="4%"
        yOffset={210 - scrollProgress * 170}
        rotate={-1.5}
        top={100}
        height={280}
        width={{ xs: "38vw", md: 240 }}
        opacity={0.42}
        accentSide="right"
        blur={2}
      />
      <Grid2 size={{ xs: 12, md: 4 }} sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            position: "relative",
            width: { xs: "min(78vw, 320px)", md: profileImageSize },
            height: { xs: "min(78vw, 320px)", md: profileImageSize },
            mx: "auto",
            flexShrink: 0,
            zIndex: 1,
            "& .home-hover-prompt": {
              display: { xs: "none", md: "block" },
            },
          }}
        >
          <Box className="home-hover-prompt">
            <HoverOverMe />
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: `4px solid ${colors.gold}`,
              overflow: "hidden",
            }}
          >
            <Image
              className="image-hover-scale"
              src={profileImage}
              alt="profile image"
              fill
              sizes="(min-width: 900px) 400px, 78vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
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
