"use client";

import { Box, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

import { HoverOverMe } from "@/components/hoverOverMe";
import { colors } from "@/styles/colors";
import profileImage from "../assets/portrait-headshot.jpg";
import "../styles/effects.css";

export const Intro = () => {
  const profileImageSize = 400;

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
    <Grid2
      container
      spacing={5}
      justifyContent="center"
      alignItems="center"
      sx={{
        color: colors.chalk,
        padding: "1em",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -50,
          left: 150 + scrollPosition * 0.9,
          zIndex: -2,
          height: 550,
          width: 1200,
          backgroundColor: colors.base.light,
          opacity: 0.4,
          transition: "left 0.1s",
        }}
      />
      <Grid2 size={{ xs: 12, md: 4 }}>
        <Box
          sx={{
            borderRadius: "50%",
            border: `4px solid ${colors.gold}`,
            overflow: "hidden",
            width: profileImageSize,
            height: profileImageSize,
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          <HoverOverMe />
          <Image
            className="image-hover-scale"
            src={profileImage}
            alt="profile image"
            width={profileImageSize}
            height={profileImageSize}
          />
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 8 }}>
        <Stack spacing={5} sx={{ zIndex: 1 }}>
          <Typography variant="h2" sx={{ textShadow: "2px 2px 4px #000000" }}>
            {`Hi, I'm Mo!`}
          </Typography>
          <Typography variant="h4" sx={{ textShadow: "2px 2px 4px #000000" }}>
            {`I'm an Australian software engineer.`}
          </Typography>
          <Typography variant="h4" sx={{ textShadow: "2px 2px 4px #000000" }}>
            {`I was recently living in New Zealand, but now I'm starting my life afresh in Japan!`}
          </Typography>
        </Stack>
      </Grid2>
    </Grid2>
  );
};
