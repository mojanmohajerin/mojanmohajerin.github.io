import { Box } from "@mui/material";

import { Intro } from "@/sections/intro";
import { colors } from "@/styles/colors";

export const Body = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.base.dark,
        color: colors.chalk,
        padding: "5rem",
      }}
    >
      <Intro />
    </Box>
  );
};
