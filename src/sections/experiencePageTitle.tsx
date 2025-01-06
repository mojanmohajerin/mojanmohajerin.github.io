"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const ExperiencePageTitle = () => {
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
      direction="column"
      spacing={2}
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        position: "absolute",
        left: -scrollPosition,
        transition: "left 0.1s",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -20,
          left: -80,
          height: 180,
          width: 400,
          background: `linear-gradient(90deg, rgba(98,149,132,1) 0%, rgba(0,212,255,0) 100%)`,
          opacity: 0.6,
          zIndex: -1,
        }}
      />
      <Typography variant="h3" sx={{ textShadow: "2px 2px 4px #000000" }}>
        My Life Story
      </Typography>
      <Typography
        variant="body1"
        sx={{ paddingLeft: 1, textShadow: "2px 2px 4px #000000" }}
      >
        {`(in a nutshell)`}
      </Typography>
    </Stack>
  );
};
