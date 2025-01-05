"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { colors } from "@/styles/colors";
import "../styles/effects.css";

export const BitAboutMe = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Stack
      direction="row"
      spacing={5}
      justifyContent="center"
      alignItems="center"
      sx={{
        color: colors.chalk,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -50,
          left: scrollPosition < 600 ? 600 - scrollPosition : 0,
          zIndex: 0,
          height: 550,
          width: 1000,
          backgroundColor: colors.base.light,
          opacity: 0.4,
          transition: "left 0.1s",
        }}
      />
      <Stack direction="column" spacing={5} sx={{ zIndex: 1 }}>
        <Typography variant="h2" sx={{ textShadow: "2px 2px 4px #000000" }}>
          A bit about me...
        </Typography>
        <Typography variant="h4" sx={{ textShadow: "2px 2px 4px #000000" }}>
          I graduated with a degree in Mechatronic Engineering. I recently
          joined a small start-up in New Zealand as a Software Engineer and
          loved every moment of it - both the work culture and the work itself.
          I felt being able to write programmical solutions to tangible problems
          was intellectually stimulating and fulfilling, like a riddle. At this
          company, I gained front-end development experience using technologies
          such as React, Next.js and Typescript. I also had the opportunity to
          play with API queries with GraphQL and GitHub API. I am excited to see
          where this journey takes me.
        </Typography>
      </Stack>
    </Stack>
  );
};
