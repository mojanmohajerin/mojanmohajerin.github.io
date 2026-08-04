import { Box } from "@mui/material";

import { ExperiencePageBody } from "@/sections/experiencePageBody";
import { Title } from "@/sections/title";

export default function ExperiencePage() {
  return (
    <Box sx={{ mt: "-3rem", mb: "-3rem" }}>
      <Title
        title="My life story"
        additionalText="(in a nutshell)"
        bottomSpacing="0"
      />
      <ExperiencePageBody />
    </Box>
  );
}
