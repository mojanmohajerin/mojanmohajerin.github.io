import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import { colors } from "@/styles/colors";
import cartoonImage from "../assets/cartoon-image.png";
import { NavLink } from "@/components/nav-link";
import Link from "next/link";

export const Header = () => {
  const cartoonImageSize = 100;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: colors.base.darkest,
        paddingLeft: "2rem",
        paddingRight: "5rem",
        paddingY: "1rem",
      }}
    >
      <Link href="/">
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={cartoonImage}
            alt="cartoon image"
            width={cartoonImageSize}
            height={cartoonImageSize}
            style={{
              border: `2px solid ${colors.base.lightest}`,
              borderRadius: "15%",
            }}
          />
          <Typography variant="h4" sx={{ color: colors.chalk }}>
            My Website
          </Typography>
        </Stack>
      </Link>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <NavLink title="Home" href="/" />
        <NavLink title="Experience" href="/" />
        <NavLink title="Projects" href="/" />
        <NavLink title="Photo Gallery" href="/" />
      </Stack>
    </Stack>
  );
};
