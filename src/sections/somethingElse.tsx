"use client";

import { Stack } from "@mui/material";
import { useRef } from "react";

import { HomeTextBlock } from "@/components/homeTextBlock";
import { SlidingGlassPanel } from "@/components/slidingGlassPanel";
import { useScrollIntoViewProgress } from "@/hooks/useScrollIntoViewProgress";
import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { colors } from "@/styles/colors";

export const SomethingElse = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollIntoViewProgress(sectionRef);
  const rectangleOffset = -260 + scrollProgress * 520;
  const fastPanelOffset = 420 - scrollProgress * 820;
  const slowPanelOffset = -540 + scrollProgress * 300;
  const diagonalPanelOffset = 80 + scrollProgress * 420;
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
        height={550}
        width={{ xs: "calc(100vw - 2rem)", md: 1150 }}
        accentSide="right"
      />
      <SlidingGlassPanel
        offset={fastPanelOffset}
        yOffset={150 - scrollProgress * 160}
        rotate={-2.2}
        top={230}
        height={160}
        width={{ xs: "62vw", md: 560 }}
        opacity={0.55}
        accentSide="left"
        blur={3}
      />
      <SlidingGlassPanel
        offset={slowPanelOffset}
        yOffset={-100 + scrollProgress * 52}
        rotate={2.8}
        top={-92}
        height={210}
        width={{ xs: "54vw", md: 390 }}
        opacity={0.48}
        accentSide="none"
        blur={2}
      />
      <SlidingGlassPanel
        offset={diagonalPanelOffset}
        yOffset={-30 + scrollProgress * 120}
        rotate={1.4}
        top={44}
        height={310}
        width={{ xs: "42vw", md: 310 }}
        opacity={0.4}
        accentSide="right"
        blur={2}
      />
      <HomeTextBlock title={t.home.languageTitle}>
        {t.home.languageBody}
      </HomeTextBlock>
    </Stack>
  );
};
