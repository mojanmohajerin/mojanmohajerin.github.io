import type { FC } from "react";

import { Button, SvgIcon } from "@mui/material";
import XClose from "@untitled-ui/icons-react/build/esm/XClose";

import { colors } from "../styles/colors";

interface XCloseButtonProps {
  handleClose: () => void;
}

export const XCloseButton: FC<XCloseButtonProps> = ({ handleClose }) => {
  return (
    <Button
      onClick={handleClose}
      sx={{
        color: "#000000",
        transform: "scale(1)",
        transition: "color 0.2s ease-in-out, transform 0.2s ease-in-out",

        "&:hover": {
          backgroundColor: "transparent",
          color: colors.red,
          transform: "scale(1.2) rotate(90deg)",
        },
      }}
      disableRipple
    >
      <SvgIcon>
        <XClose />
      </SvgIcon>
    </Button>
  );
};
