"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useRef } from "react";

import { useScrollIntoViewProgress } from "@/hooks/useScrollIntoViewProgress";
import { colors } from "@/styles/colors";
import "../styles/effects.css";

export const BitAboutMe = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollIntoViewProgress(sectionRef);
  const rectangleOffset = 260 - scrollProgress * 520;

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
          A bit about me...
        </Typography>
        <Typography variant="h4" sx={{ textShadow: "2px 2px 4px #000000" }}>
          I graduated with a degree in Mechatronic Engineering in 2019. I
          recently joined a small start-up in New Zealand as a Software Engineer
          and loved every moment of it - company culture, the people, the work
          itself. I felt being able to write programmical solutions to tangible
          problems was an intellectually stimulating and fulfilling challenge,
          like piecing together an intricate riddle until everything locks into
          place and clarifies into a simple, errorless execution. At this
          company, I gained front-end development experience using technologies
          such as React, Next.js and Typescript. I also had the opportunity to
          play with API queries with GraphQL and GitHub API.
        </Typography>
      </Stack>
    </Stack>
  );
};
