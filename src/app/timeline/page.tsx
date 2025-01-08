import { Box } from "@mui/material";

import { ExperiencePageBody } from "@/sections/experiencePageBody";
import { Title } from "@/sections/title";

export default function ExperiencePage() {
  return (
    <Box>
      <Title title="My life story" additionalText="(in a nutshell)" />
      <ExperiencePageBody />
    </Box>
  );
}
