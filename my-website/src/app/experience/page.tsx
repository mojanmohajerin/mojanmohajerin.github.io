import { Box, Stack, Typography } from "@mui/material";

import { Experience } from "@/sections/experience";
import { colors } from "@/styles/colors";

export default function ExperiencePage() {
  return (
    <Box
      className="background-opacity"
      sx={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ position: "relative" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -20,
            left: -80,
            height: 180,
            width: 400,
            backgroundColor: colors.base.light,
            border: "3px solid rgb(56, 116, 120, 0.5)",
            opacity: 0.4,
            zIndex: -1,
          }}
        />
        <Typography variant="h3" sx={{ textShadow: "2px 2px 4px #000000" }}>
          My Life Story
        </Typography>
        <Typography
          variant="body1"
          sx={{ paddingLeft: 1, textShadow: "2px 2px 4px #000000" }}
        >
          (in a nutshell)
        </Typography>
      </Stack>
      <Experience />
    </Box>
  );
}
