"use client";

import { Box, Stack, Typography } from "@mui/material";
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
      <HoverOverMe />
      <Box
        sx={{
          position: "absolute",
          top: -50,
          left: 150 + scrollPosition * 0.9,
          zIndex: 0,
          height: 550,
          width: 1200,
          backgroundColor: colors.base.light,
          opacity: 0.4,
          transition: "left 0.1s",
        }}
      />
      <Box
        sx={{
          borderRadius: "50%",
          border: `4px solid ${colors.gold}`,
          overflow: "hidden",
          display: "inline-block",
          width: profileImageSize,
          height: profileImageSize,
          flexShrink: 0,
          zIndex: 1,
        }}
      >
        <Image
          className="image-hover-scale"
          src={profileImage}
          alt="profile image"
          width={profileImageSize}
          height={profileImageSize}
        />
      </Box>
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
    </Stack>
  );
};
