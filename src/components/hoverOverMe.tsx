"use client";

import { Box, Button, Stack, SvgIcon, Typography } from "@mui/material";
import { ArrowBlockDown } from "@untitled-ui/icons-react";
import { useEffect, useState } from "react";

import { colors } from "@/styles/colors";

export const HoverOverMe = () => {
  const [clicked, setClicked] = useState<boolean>(true);

  const handleClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 3000);
    }
  }, [clicked]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: -25,
        left: 5,
        transform: "rotate(-40deg)",
        zIndex: 10,
      }}
    >
      <Button disableRipple onClick={handleClick} sx={{}}>
        <Stack spacing={1} alignItems="center">
          <Typography
            variant="overline"
            sx={{
              color: colors.red,
              textShadow: `1px 1px 2px ${colors.charcoal}`,
              fontWeight: "bold",
            }}
          >
            Hover over me!
          </Typography>
          <SvgIcon
            sx={{
              color: colors.red,
              filter: `drop-shadow(1px 1px 2px ${colors.charcoal})`,
              animation: clicked ? "bounce 1s ease-in-out 3.25" : "none",
              cursor: "pointer",
            }}
          >
            <ArrowBlockDown />
          </SvgIcon>
        </Stack>
      </Button>
    </Box>
  );
};
