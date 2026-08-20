"use client";

import { Stack } from "@mui/material";
import { useRef } from "react";

import { HomeTextBlock } from "@/components/homeTextBlock";
import { SlidingGlassPanel } from "@/components/slidingGlassPanel";
import { useScrollIntoViewProgress } from "@/hooks/useScrollIntoViewProgress";
import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { Title } from "@/sections/title";
import { colors } from "@/styles/colors";

export const SomethingElse = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollIntoViewProgress(sectionRef);
  const rectangleOffset = -260 + scrollProgress * 520;
  const fastPanelOffset = 140 - scrollProgress * 300;
  const slowPanelOffset = -130 + scrollProgress * 210;
  const diagonalPanelOffset = 80 + scrollProgress * 260;
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Stack
      ref={sectionRef}
      direction="column"
      spacing={0}
      justifyContent="center"
      alignItems="stretch"
      sx={{
        color: colors.chalk,
        position: "relative",
        zIndex: 0,
      }}
    >
      <SlidingGlassPanel
        offset={rectangleOffset}
        height={550}
        width={{ xs: "calc(100vw - 2rem)", md: 1150 }}
        accentSide="right"
      />
      <SlidingGlassPanel
        offset={fastPanelOffset}
        left="92%"
        yOffset={230 - scrollProgress * 170}
        rotate={-2.2}
        top={290}
        height={160}
        width={{ xs: "50vw", md: 440 }}
        opacity={0.55}
        accentSide="left"
        blur={3}
      />
      <SlidingGlassPanel
        offset={slowPanelOffset}
        left="10%"
        yOffset={-95 + scrollProgress * 90}
        rotate={2.8}
        top={-130}
        height={210}
        width={{ xs: "44vw", md: 330 }}
        opacity={0.48}
        accentSide="none"
        blur={2}
      />
      <SlidingGlassPanel
        offset={diagonalPanelOffset}
        left="2%"
        yOffset={40 + scrollProgress * 120}
        rotate={1.4}
        top={80}
        height={310}
        width={{ xs: "36vw", md: 260 }}
        opacity={0.4}
        accentSide="right"
        blur={2}
      />
      <Title
        title={t.home.languageTitle}
        additionalText={t.home.languageSubtitle}
        bottomSpacing="2.5rem"
      />
      <Stack alignItems="center" sx={{ px: { xs: 2, md: 0 } }}>
        <HomeTextBlock>{t.home.languageBody}</HomeTextBlock>
      </Stack>
    </Stack>
  );
};
