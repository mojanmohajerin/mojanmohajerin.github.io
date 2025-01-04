import { Box, Stack, Typography } from "@mui/material";

import { CardUnit } from "@/components/card";
import GithubToolImage from "../../assets/projects/github-tool-image.jpeg";
import HiveImage from "../../assets/projects/hive-image.webp";

export default function ProjectsPage() {
  return (
    <Box
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
        sx={{
          position: "relative",
        }}
      >
        <Box>
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
            Some personal projects
          </Typography>
        </Box>
        <Stack direction="row" spacing={8} sx={{ paddingTop: "15rem" }}>
          <CardUnit
            image={HiveImage}
            name="Hive"
            description="A board game."
            date="May, 2020"
            technologies={["Python"]}
          />
          <CardUnit
            image={GithubToolImage}
            name="GitHub Tool"
            description="An application to optimise GitHub PR efficiency."
            date="July, 2024"
            technologies={["Typescript", "React", "GitHub API"]}
          />
        </Stack>
      </Stack>
    </Box>
  );
}
