import { Box } from "@mui/material";

import { Body } from "@/home/body";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100svh", display: "flex", flexDirection: "column" }}>
      <Body />
    </Box>
  );
}
