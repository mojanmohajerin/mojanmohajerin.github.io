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
          paddingLeft: 2,
          width: "25%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          opacity: 0,
          transition: "opacity 0.3s",
          "&:hover": {
            opacity: 0.7,
          },
        }}
      >
        <Button
          variant="outlined"
          onClick={handleClick}
          sx={{
            borderColor: "transparent",
            color: "transparent",
          }}
        >
          <Box
            sx={{
              backgroundColor: colors.base.darkest,
              color: colors.chalk,
              height: 40,
              width: 30,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: `1px solid ${colors.chalk}`,
              "&:hover": {
                backgroundColor: colors.base.dark,
              },
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
