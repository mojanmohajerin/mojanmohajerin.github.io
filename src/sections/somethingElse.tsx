"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { colors } from "@/styles/colors";
import "../styles/effects.css";

export const SomethingElse = () => {
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

  console.log("scrollPosition", scrollPosition);

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
          left: scrollPosition < 900 ? -700 + scrollPosition : 200,
          zIndex: 0,
          height: 550,
          width: 1150,
          backgroundColor: colors.base.light,
          opacity: 0.4,
          transition: "left 0.1s",
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
