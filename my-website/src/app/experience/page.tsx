import { Box, Stack, Typography } from "@mui/material";

import { Experience } from "@/sections/experience";

export default function ExperiencePage() {
  return (
    <Box sx={{ minHeight: "100svh", display: "flex", flexDirection: "column" }}>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Typography variant="h3">My Life Story</Typography>
        <Typography variant="body1" sx={{ paddingLeft: 1 }}>
          (in a nutshell)
        </Typography>
      </Stack>
      <Experience />
    </Box>
  );
}
