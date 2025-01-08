import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import Coding from "@/assets/not-found-page/coding.png";

export default function NotFound() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={Coding} alt="Not found image" height={300} width={300} />
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ paddingTop: 5 }}
      >
        <Typography variant="h3" sx={{ textShadow: "2px 2px 4px #000000" }}>
          Still under development.
        </Typography>
        <Typography variant="body1" sx={{ textShadow: "2px 2px 4px #000000" }}>
          Please try again later.
        </Typography>
      </Stack>
    </Box>
  );
}
