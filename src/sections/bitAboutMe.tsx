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
  const fastPanelOffset = -90 + scrollProgress * 260;
  const slowPanelOffset = 160 - scrollProgress * 190;
  const fallingPanelOffset = 70 - scrollProgress * 250;
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
        left="86%"
        yOffset={-95 + scrollProgress * 120}
        rotate={2}
        top={-130}
        height={180}
        width={{ xs: "48vw", md: 360 }}
        opacity={0.58}
        accentSide="right"
        blur={3}
      />
      <SlidingGlassPanel
        offset={slowPanelOffset}
        left="12%"
        yOffset={220 - scrollProgress * 80}
        rotate={-2.4}
        top={340}
        height={150}
        width={{ xs: "54vw", md: 440 }}
        opacity={0.48}
        accentSide="none"
        blur={2}
      />
      <SlidingGlassPanel
        offset={fallingPanelOffset}
        left="96%"
        yOffset={30 + scrollProgress * 120}
        rotate={1.5}
        top={40}
        height={330}
        width={{ xs: "36vw", md: 260 }}
        opacity={0.4}
        accentSide="left"
        blur={2}
      />
      <HomeTextBlock title={t.home.aboutTitle}>{t.home.aboutBody}</HomeTextBlock>
    </Stack>
  );
};
