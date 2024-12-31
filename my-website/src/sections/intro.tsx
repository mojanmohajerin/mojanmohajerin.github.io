import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import { colors } from "@/styles/colors";
import profileImage from "../assets/portrait-headshot.jpg";
import "../styles/effects.css";

export const Intro = () => {
  const profileImageSize = 400;

  return (
    <Stack
      direction="row"
      spacing={5}
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: colors.base.light,
        color: colors.chalk,
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          border: `4px solid ${colors.gold}`,
          overflow: "hidden",
          display: "inline-block",
          width: profileImageSize,
          height: profileImageSize,
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
      <Stack direction="column" spacing={5}>
        <Typography variant="h2">Hi, I'm Mo!</Typography>
        <Typography variant="h4">
          I'm a software engineer with a passion for web development.
        </Typography>
        <Typography variant="h4">
          I'm currently working with React, Next.js, and TypeScript.
        </Typography>
      </Stack>
    </Stack>
  );
};
