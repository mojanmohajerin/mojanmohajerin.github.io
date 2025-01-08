import { Box, Button, Stack, Typography } from "@mui/material";

import { years } from "@/data/life";
import { colors } from "@/styles/colors";
import { StylishDividerVert } from "./stylish-divider-vert";

interface CurrentYearProps {
  activeYear: number;
  setActiveYear: (activeYear: number) => void;
}

export const CurrentYear = ({
  activeYear,
  setActiveYear,
}: CurrentYearProps) => {
  const index = years.indexOf(activeYear);

  const handleClick = (yearNav: number) => {
    setActiveYear(yearNav);
  };

  return (
    <Box sx={{ position: "fixed", top: 425, left: 100 }}>
      <Box
        sx={{
          position: "absolute",
          top: 75,
          left: -20,
          height: 70,
          width: 200,
          background: `linear-gradient(90deg, rgba(56,116,120,1) 0%, rgba(56,116,120,1) 20%, rgba(0,212,255,0) 100%)`,
          opacity: 0.9,
          zIndex: -1,
        }}
      />
      <Stack spacing={1.5} justifyContent="center" alignItems="flex-start">
        {/* {index > 0 ? ( */}
        <Button
          disableRipple
          onClick={index > 0 ? () => handleClick(years[index - 1]) : () => {}}
          sx={{
            transition: "scale 0.3s ease-in-out",
            textDecoration: "none",
            textTransform: index > 0 ? "auto" : "capitalize",
            color: colors.chalk,
            padding: 0,
            "&:hover": {
              backgroundColor: "transparent",
              transform: "scale(1.1)",
            },
          }}
        >
          {index > 0 ? (
            <Typography
              variant="h4"
              sx={{ textShadow: "1px 1px 2px #000", paddingLeft: 1 }}
            >
              {years[index - 1]}
            </Typography>
          ) : (
            <Typography variant="h4" sx={{ textShadow: "1px 1px 2px #000" }}>
              {"Present"}
            </Typography>
          )}
        </Button>
        <StylishDividerVert />
        <Typography variant="h3" sx={{ textShadow: "1px 1px 2px #000" }}>
          {activeYear}
        </Typography>
        {index < years.length - 1 ? (
          <>
            <StylishDividerVert />
            <Button
              disableRipple
              onClick={() => handleClick(years[index + 1])}
              sx={{
                transition: "scale 0.3s ease-in-out",
                textDecoration: "none",
                color: colors.chalk,
                padding: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{ textShadow: "1px 1px 2px #000", paddingLeft: 1 }}
              >
                {years[index + 1]}
              </Typography>
            </Button>
          </>
        ) : null}
      </Stack>
    </Box>
  );
};
