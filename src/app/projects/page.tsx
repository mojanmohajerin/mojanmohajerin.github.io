import { Box } from "@mui/material";

import { CardUnit } from "@/components/card";
import { Title } from "@/sections/title";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Title title="Some personal projects" />
      <Box
        sx={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(325px, 1fr))",
          padding: { xs: "1em", md: "5em" },
        }}
      >
        {projects.map((project) => {
          return <CardUnit key={project.name} project={project} />;
        })}
      </Box>
    </>
  );
}
