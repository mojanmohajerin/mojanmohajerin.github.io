import { Box, Button, SvgIcon } from "@mui/material";
import { ChevronLeft } from "@untitled-ui/icons-react";

import { colors } from "@/styles/colors";

interface LeftButtonProps {
  displayImageIndex: number;
  setDisplayImageIndex: (displayImageIndex: number) => void;
  imagesArrayLength: number;
}

export const LeftButton = ({
  displayImageIndex,
  setDisplayImageIndex,
  imagesArrayLength,
}: LeftButtonProps) => {
  const handleClick = () => {
    if (displayImageIndex === 0) {
      setDisplayImageIndex(imagesArrayLength - 1);
    } else {
      setDisplayImageIndex(displayImageIndex - 1);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 3,
          paddingLeft: { xs: 1, md: 2 },
          width: "18%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          opacity: { xs: 1, md: 0.72 },
          transition: "opacity 0.3s",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <Button
          aria-label="Show previous project image"
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
              <ChevronLeft />
            </SvgIcon>
          </Box>
        </Button>
      </Box>
    </>
  );
};
