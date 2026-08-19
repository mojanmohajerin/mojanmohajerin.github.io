"use client";

import { Stack, Typography } from "@mui/material";

import { StylishDivider } from "@/components/stylish-divider";
import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { colors } from "@/styles/colors";
import { FacebookIcon } from "../assets/socialIcons/facebookIcon";
import { GithubIcon } from "../assets/socialIcons/githubIcon";
import { InstaIcon } from "../assets/socialIcons/instaIcon";
import { LinkedInIcon } from "../assets/socialIcons/linkedInIcon";
import { YoutubeIcon } from "../assets/socialIcons/youtubeIcon";

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Stack
      spacing={5}
      justifyContent="space-between"
      sx={{
        backgroundColor: colors.base.darkest,
        color: colors.chalk,
        paddingTop: "4rem",
        paddingBottom: "1rem",
        marginTop: "auto",
      }}
    >
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <StylishDivider />
        <FacebookIcon />
        <LinkedInIcon />
        <InstaIcon />
        <YoutubeIcon />
        <GithubIcon />
        <StylishDivider />
      </Stack>
      <Stack spacing={0} justifyContent="center" alignItems="center">
        <Typography variant="body2">
          {t.footer.builtWith}
        </Typography>
        <Typography variant="body2">
          {t.footer.copyright}
        </Typography>
        <Typography variant="body2" sx={{ color: colors.base.lightest, opacity: 0.82 }}>
          {t.footer.lastUpdated}
        </Typography>
      </Stack>
    </Stack>
  );
};
