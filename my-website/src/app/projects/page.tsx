import { Box, Stack, Typography } from "@mui/material";

import { CardUnit } from "@/components/card";
import { colors } from "@/styles/colors";
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
        sx={{ position: "relative" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -20,
            left: -80,
            height: 180,
            width: 500,
            backgroundColor: colors.base.light,
            border: "3px solid rgb(56, 116, 120, 0.5)",
            opacity: 0.4,
            zIndex: -1,
          }}
        />
        <Typography variant="h3" sx={{ textShadow: "2px 2px 4px #000000" }}>
          Some Projects
        </Typography>
        <Stack direction="row" spacing={8} sx={{ paddingTop: "12rem" }}>
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
