import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

import { years } from "@/data/life";
import { colors } from "@/styles/colors";

interface CurrentYearProps {
  activeYear: number;
  setActiveYear: (activeYear: number) => void;
}

export const CurrentYear = ({
  activeYear,
  setActiveYear,
}: CurrentYearProps) => {
  const activeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeButtonRef.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }, [activeYear]);

  const handleClick = (yearNav: number) => {
    setActiveYear(yearNav);
  };

  return (
    <Box
      component="nav"
      aria-label="Timeline years"
      sx={{
        position: "fixed",
        top: "50%",
        right: { md: 36, lg: 64 },
        transform: "translateY(-50%)",
        width: 170,
        maxHeight: 170,
        overflowY: "auto",
        px: 1.5,
        py: 1,
        background: `linear-gradient(270deg, rgba(56,116,120,0.82) 0%, rgba(56,116,120,0.62) 45%, rgba(56,116,120,0) 100%)`,
        borderRadius: "8px 0 0 8px",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Stack spacing={0.5} justifyContent="center" alignItems="flex-end">
        {years.map((year) => {
          const isActive = activeYear === year;

          return (
            <Button
              key={year}
              ref={isActive ? activeButtonRef : null}
              disableRipple
              aria-current={isActive ? "date" : undefined}
              onClick={() => handleClick(year)}
              sx={{
                minWidth: 0,
                px: 1,
                py: 0.25,
                textDecoration: "none",
                textTransform: "none",
                color: colors.chalk,
                transformOrigin: "right center",
                transition:
                  "transform 0.2s ease-in-out, opacity 0.2s ease-in-out",
                opacity: isActive ? 1 : 0.76,
                "&:hover, &:focus-visible": {
                  backgroundColor: "transparent",
                  transform: "scale(1.08)",
                  opacity: 1,
                },
              }}
            >
              <Typography
                variant={isActive ? "h3" : "h4"}
                sx={{
                  lineHeight: 1.05,
                  fontWeight: isActive ? 700 : 500,
                  textShadow: "1px 1px 2px #000",
                }}
              >
                {year}
              </Typography>
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
};
