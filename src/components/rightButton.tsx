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
          paddingRight: { xs: 0, md: 2 },
          width: "25%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          opacity: { xs: 0.7, md: 0 },
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
                xs: null,
                md: colors.base.dark,
              },
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
