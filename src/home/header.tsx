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

import { LanguageButton } from "@/components/language-button";
import { NavLink } from "@/components/nav-link";
import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { paths } from "@/paths";
import { NavDrawer } from "@/sections/navDrawer";
import { colors } from "@/styles/colors";
import cartoonImage from "../assets/cartoon-image.png";

export const Header = () => {
  const xs = useMediaQuery("(min-width:450px)");
  const md = useMediaQuery("(min-width:900px)");
  const { language } = useLanguage();
  const t = translations[language];

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
            spacing={1.25}
            justifyContent="center"
            alignItems="center"
          >
            <LanguageButton />
            <NavLink title={t.nav.home} href={paths.home} />
            <NavLink title={t.nav.timeline} href={paths.experience} />
            <NavLink title={t.nav.projects} href={paths.projects} />
            <NavLink title={t.nav.photoGallery} href={paths.photo_gallery} />
            <NavLink title={t.nav.contact} href={paths.contact} />
          </Stack>
        ) : (
          <>
            <Button
              onClick={handleClick}
              aria-label="Open navigation"
              sx={{
                minWidth: 0,
                width: 44,
                height: 44,
                borderRadius: "999px",
                backgroundColor: "rgba(226, 241, 231, 0.1)",
                border: "1px solid rgba(226, 241, 231, 0.28)",
                boxShadow: "inset 0 1px 0 rgba(226, 241, 231, 0.14)",
                transition:
                  "transform 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  backgroundColor: "rgba(226, 241, 231, 0.18)",
                  borderColor: "rgba(226, 241, 231, 0.58)",
                  boxShadow:
                    "0 10px 24px rgba(0, 0, 0, 0.26), inset 0 1px 0 rgba(226, 241, 231, 0.22)",
                },
                "&:active": {
                  transform: "translateY(0)",
                  backgroundColor: "rgba(98, 149, 132, 0.42)",
                  borderColor: "rgba(189, 172, 106, 0.78)",
                },
                "&:focus-visible": {
                  outline: `2px solid ${colors.gold}`,
                  outlineOffset: 3,
                },
              }}
            >
              <SvgIcon sx={{ color: colors.base.lightest, fontSize: 24 }}>
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
