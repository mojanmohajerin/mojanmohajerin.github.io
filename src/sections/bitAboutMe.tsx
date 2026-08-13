"use client";

import { Stack } from "@mui/material";
import { useRef } from "react";

import { HomeTextBlock } from "@/components/homeTextBlock";
import { SlidingGlassPanel } from "@/components/slidingGlassPanel";
import { useScrollIntoViewProgress } from "@/hooks/useScrollIntoViewProgress";
import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { colors } from "@/styles/colors";
import "../styles/effects.css";

export const BitAboutMe = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollIntoViewProgress(sectionRef);
  const rectangleOffset = 260 - scrollProgress * 520;
  const fastPanelOffset = -380 + scrollProgress * 720;
  const slowPanelOffset = 520 - scrollProgress * 260;
  const fallingPanelOffset = -120 - scrollProgress * 320;
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
      <SlidingGlassPanel
        offset={rectangleOffset}
        height={600}
        width={{ xs: "calc(100vw - 2rem)", md: 1000 }}
        accentSide="left"
      />
      <SlidingGlassPanel
        offset={fastPanelOffset}
        yOffset={-70 + scrollProgress * 95}
        rotate={2}
        top={-76}
        height={180}
        width={{ xs: "58vw", md: 430 }}
        opacity={0.58}
        accentSide="right"
        blur={3}
      />
      <SlidingGlassPanel
        offset={slowPanelOffset}
        yOffset={160 - scrollProgress * 45}
        rotate={-2.4}
        top={290}
        height={150}
        width={{ xs: "62vw", md: 500 }}
        opacity={0.48}
        accentSide="none"
        blur={2}
      />
      <SlidingGlassPanel
        offset={fallingPanelOffset}
        yOffset={-130 + scrollProgress * 190}
        rotate={1.5}
        top={110}
        height={360}
        width={{ xs: "40vw", md: 280 }}
        opacity={0.4}
        accentSide="left"
        blur={2}
      />
      <HomeTextBlock title={t.home.aboutTitle}>{t.home.aboutBody}</HomeTextBlock>
    </Stack>
  );
};
