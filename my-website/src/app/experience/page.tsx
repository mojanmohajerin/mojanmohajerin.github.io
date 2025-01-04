import { Box } from "@mui/material";

import { ExperiencePageBody } from "@/sections/experiencePageBody";
import { ExperiencePageTitle } from "@/sections/experiencePageTitle";

export default function ExperiencePage() {
  return (
    <Box
      sx={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <ExperiencePageTitle />
      <ExperiencePageBody />
    </Box>
  );
}
