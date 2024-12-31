import { Box, Divider, Stack } from "@mui/material";

import { colors } from "@/styles/colors";
import { FacebookIcon } from "../assets/socialIcons/facebookIcon";
import { LinkedInIcon } from "../assets/socialIcons/linkedInIcon";
import { InstaIcon } from "../assets/socialIcons/instaIcon";
import { YoutubeIcon } from "../assets/socialIcons/youtubeIcon";
import { GithubIcon } from "../assets/socialIcons/githubIcon";
import { StylishDivider } from "@/components/stylish-divider";

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.base.darkest,
        color: colors.chalk,
        padding: "2rem",
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
    </Box>
  );
};
