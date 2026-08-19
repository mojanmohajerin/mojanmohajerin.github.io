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
        minWidth: 0,
        width: 38,
        height: 38,
        borderRadius: "999px",
        color: colors.chalk,
        backgroundColor: "rgba(36, 54, 66, 0.56)",
        border: "1px solid rgba(226, 241, 231, 0.24)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.24)",
        transform: "scale(1)",
        transition:
          "color 0.2s ease-in-out, transform 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out",

        "&:hover": {
          backgroundColor: "rgba(255, 0, 51, 0.18)",
          borderColor: "rgba(255, 254, 249, 0.52)",
          color: colors.chalk,
          transform: "scale(1.08) rotate(90deg)",
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
