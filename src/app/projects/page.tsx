import { Box } from "@mui/material";

import { CardUnit } from "@/components/card";
import { Title } from "@/sections/title";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <Box
    // sx={{
    //   position: "relative",
    // }}
    >
      <Title title="Some personal projects" />
      {/* <Box
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
      </Typography> */}
      {/* <Stack direction="row" spacing={8} sx={{ paddingTop: "15rem" }}> */}
      <Box
        sx={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          padding: "5rem",
        }}
      >
        {projects.map((project) => {
          return <CardUnit key={project.name} project={project} />;
        })}
      </Box>
      {/* </Stack> */}
    </Box>
  );
}
