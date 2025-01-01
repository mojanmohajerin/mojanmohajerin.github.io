import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box>
      <Typography variant="h3" sx={{ textShadow: "2px 2px 4px #000000" }}>
        Still under development.
      </Typography>
      <Typography variant="body1" sx={{ textShadow: "2px 2px 4px #000000" }}>
        Please try again later.
      </Typography>
    </Box>
  );
}
