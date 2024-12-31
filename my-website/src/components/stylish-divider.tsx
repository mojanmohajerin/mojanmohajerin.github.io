import { Divider, Stack } from "@mui/material";

import { colors } from "@/styles/colors";

export const StylishDivider = () => {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 0.5,
        height: 17,
      }}
    >
      <Divider
        sx={{ backgroundColor: colors.chalk, opacity: 0.3, width: "90%" }}
      />
    </Stack>
  );
};
