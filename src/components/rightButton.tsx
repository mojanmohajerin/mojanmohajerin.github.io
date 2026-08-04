import { Box, Button, SvgIcon } from "@mui/material";
import { ChevronRight } from "@untitled-ui/icons-react";

import { colors } from "@/styles/colors";

interface RightButtonProps {
  displayImageIndex: number;
  setDisplayImageIndex: (displayImageIndex: number) => void;
  imagesArrayLength: number;
}

export const RightButton = ({
  displayImageIndex,
  setDisplayImageIndex,
  imagesArrayLength,
}: RightButtonProps) => {
  const handleClick = () => {
    if (displayImageIndex === imagesArrayLength - 1) {
      setDisplayImageIndex(0);
    } else {
      setDisplayImageIndex(displayImageIndex + 1);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          paddingRight: { xs: 1, md: 2 },
          width: "18%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          opacity: { xs: 1, md: 0.72 },
          transition: "opacity 0.3s",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <Button
          aria-label="Show next project image"
          onClick={handleClick}
          sx={{
            minWidth: 0,
            p: 0,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 254, 249, 0.88)",
            color: colors.charcoal,
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.24)",
            transition:
              "background-color 0.2s ease-in-out, transform 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: colors.chalk,
              transform: "scale(1.08)",
            },
          }}
        >
          <Box
            sx={{
              height: 42,
              width: 42,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SvgIcon>
              <ChevronRight />
            </SvgIcon>
          </Box>
        </Button>
      </Box>
    </>
  );
};
