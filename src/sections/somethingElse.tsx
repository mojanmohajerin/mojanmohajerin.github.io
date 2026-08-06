"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useRef } from "react";

import { useScrollIntoViewProgress } from "@/hooks/useScrollIntoViewProgress";
import { colors } from "@/styles/colors";
import "../styles/effects.css";

export const SomethingElse = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollIntoViewProgress(sectionRef);
  const rectangleOffset = -260 + scrollProgress * 520;

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
          height: 550,
          width: { xs: "calc(100vw - 2rem)", md: 1150 },
          backgroundColor: colors.base.light,
          opacity: 0.4,
          pointerEvents: "none",
          transition: "transform 0.1s",
          willChange: "transform",
        }}
      />
      <Stack spacing={5} sx={{ zIndex: 1 }}>
        <Typography variant="h2" sx={{ textShadow: "2px 2px 4px #000000" }}>
          Going off topic...
        </Typography>
        <Typography variant="h4" sx={{ textShadow: "2px 2px 4px #000000" }}>
          {`I've always been facinated by foreign langauges. I got entrapped in
          this dark forest about 10 years ago with my (then) girlfriend who
          happened to be German, and have since been trying to find my way out -
          slowly improving in one regard while letting the other aspects
          deteriorate to disrepair. The most recent project is Japanese, having
          started learning around early 2023, excited to see where this journey takes me!`}
        </Typography>
      </Stack>
    </Stack>
  );
};
