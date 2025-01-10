"use client";

import {
  Box,
  Button,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Menu01 } from "@untitled-ui/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { NavLink } from "@/components/nav-link";
import { paths } from "@/paths";
import { NavDrawer } from "@/sections/navDrawer";
import { colors } from "@/styles/colors";
import cartoonImage from "../assets/cartoon-image.png";

export const Header = () => {
  const xs = useMediaQuery("(min-width:450px)");
  const md = useMediaQuery("(min-width:900px)");

  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cartoonImageSize = scrollPosition < 50 ? 100 : 50;

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Stack
        className="header-background"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          paddingLeft: "7rem",
          paddingRight: "5rem",
          paddingY: "1rem",
          minHeight: "8rem",
        }}
      >
        <Link href={paths.home}>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                position: "fixed",
                top: "10px",
                left: "10px",
                zIndex: 10,
              }}
            >
              <Image
                src={cartoonImage}
                alt="cartoon image"
                width={cartoonImageSize}
                height={cartoonImageSize}
                style={{
                  border: `2px solid ${colors.base.lightest}`,
                  borderRadius: "15%",
                  transition: "width 0.3s, height 0.3s",
                }}
              />
            </Box>
            {xs ? (
              <Typography
                variant="h4"
                sx={{ color: colors.chalk, textShadow: "1px 1px 1px #000000" }}
              >
                Mojan Mohajerin
              </Typography>
            ) : null}
          </Stack>
        </Link>
        {md ? (
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <NavLink title="Home" href={paths.home} />
            <NavLink title="Timeline" href={paths.experience} />
            <NavLink title="Projects" href={paths.projects} />
            <NavLink title="Photo Gallery" href={paths.photo_gallery} />
            <NavLink title="Contact" href={paths.contact} />
          </Stack>
        ) : (
          <>
            <Button onClick={handleClick}>
              <SvgIcon sx={{ color: colors.base.lightest }}>
                <Menu01 />
              </SvgIcon>
            </Button>
            <NavDrawer open={open} setOpen={setOpen} />
          </>
        )}
      </Stack>
    </Box>
  );
};
