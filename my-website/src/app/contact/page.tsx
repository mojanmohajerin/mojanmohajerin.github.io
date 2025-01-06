import { Box, Stack, Typography } from "@mui/material";

import { ContactMe } from "@/sections/contactMe";
import { colors } from "@/styles/colors";

export default function ContactPage() {
  return (
    <Stack
      direction="column"
      spacing={35}
      sx={{ minHeight: "100vh", position: "relative" }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          transition: "left 0.1s",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -20,
            left: -80,
            height: 180,
            width: 500,
            background: `linear-gradient(90deg, rgba(98,149,132,1) 0%, rgba(0,212,255,0) 100%)`,
            opacity: 0.6,
            zIndex: -1,
          }}
        />
        <Typography
          variant="h3"
          sx={{ textShadow: "2px 2px 4px #000000", paddingTop: "1rem" }}
        >
          Contact Details
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ContactMe />
      </Box>
      <Stack
        direction="column"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ color: colors.base.darkest }}
      >
        <Stack
          direction="column"
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5" sx={{ textShadow: "1px 1px 2px #fff" }}>
            *Or you can contact me directly at:
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textShadow: "1px 1px 2px #fff",
              textDecoration: "underline",
            }}
          >
            mojan.mohajerin@gmail.com
          </Typography>
        </Stack>
        <Typography variant="h5" sx={{ textShadow: "1px 1px 2px #fff" }}>
          Feel free to reach out to me for any inquiries or just to say hi!
        </Typography>
      </Stack>
    </Stack>
  );
}
