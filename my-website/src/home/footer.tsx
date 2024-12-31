import { Stack, Typography } from "@mui/material";

import { StylishDivider } from "@/components/stylish-divider";
import { colors } from "@/styles/colors";
import { FacebookIcon } from "../assets/socialIcons/facebookIcon";
import { GithubIcon } from "../assets/socialIcons/githubIcon";
import { InstaIcon } from "../assets/socialIcons/instaIcon";
import { LinkedInIcon } from "../assets/socialIcons/linkedInIcon";
import { YoutubeIcon } from "../assets/socialIcons/youtubeIcon";

export const Footer = () => {
  return (
    <Stack
      direction="column"
      spacing={5}
      justifyContent="space-between"
      sx={{
        backgroundColor: colors.base.darkest,
        color: colors.chalk,
        paddingTop: "2rem",
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
      <Stack direction="row" justifyContent="center">
        <Typography variant="body2">
          © 2024 Mo's Website. All rights reserved.
        </Typography>
      </Stack>
    </Stack>
  );
};
