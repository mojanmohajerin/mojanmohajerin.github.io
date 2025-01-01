import { createTheme } from "@mui/material";

import { colors } from "./colors";

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.chalk,
          textShadow: "2px 2px 4px #000000",
        },
      },
    },
  },
});
