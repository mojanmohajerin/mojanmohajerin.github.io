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
          left: scrollPosition < 1200 ? -1000 + scrollPosition : 200,
          zIndex: 0,
          height: 550,
          width: 1150,
          backgroundColor: colors.base.light,
          opacity: 0.4,
          transition: "left 0.1s",
        }}
      />
      <Stack direction="column" spacing={5} sx={{ zIndex: 1 }}>
        <Typography variant="h2">Something Else...</Typography>
        <Typography variant="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Stack>
    </Stack>
  );
};
