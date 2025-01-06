import { colors } from "@/styles/colors";
import { Divider, Stack } from "@mui/material";

export const StylishDividerVert = () => {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 0.5,
        height: 17,
        paddingLeft: 6,
      }}
    >
      <Divider
        orientation="vertical"
        sx={{
          backgroundColor: colors.base.darkest,
          opacity: 0.5,
          width: 2,
          height: 35,
        }}
      />
    </Stack>
  );
};
