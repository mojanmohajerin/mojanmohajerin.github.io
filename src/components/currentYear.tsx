import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

import { years } from "@/data/life";
import { colors } from "@/styles/colors";

interface CurrentYearProps {
  activeYear: number;
  setActiveYear: (activeYear: number) => void;
  onTimelineClick: () => void;
}

export const CurrentYear = ({
  activeYear,
  setActiveYear,
  onTimelineClick,
}: CurrentYearProps) => {
  const navRef = useRef<HTMLElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const activeButton = activeButtonRef.current;

    if (!nav || !activeButton) {
      return;
    }

    nav.scrollTo({
      top:
        activeButton.offsetTop -
        nav.clientHeight / 2 +
        activeButton.clientHeight / 2,
      behavior: "smooth",
    });
  }, [activeYear]);

  const handleClick = (yearNav: number) => {
    onTimelineClick();
    setActiveYear(yearNav);
  };

  return (
    <Box
      ref={navRef}
      component="nav"
      aria-label="Timeline years"
      sx={{
        position: "absolute",
        top: "42%",
        right: { md: -12, lg: 0 },
        transform: "translateY(-50%)",
        width: 170,
        maxHeight: 170,
        overflowY: "auto",
        px: 1.25,
        py: 1.25,
        background:
          "linear-gradient(270deg, rgba(36, 54, 66, 0.82) 0%, rgba(56, 116, 120, 0.5) 58%, rgba(36, 54, 66, 0.12) 100%)",
        border: "1px solid rgba(226, 241, 231, 0.18)",
        borderRight: "none",
        borderRadius: "14px 0 0 14px",
        boxShadow:
          "0 18px 42px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(255, 254, 249, 0.14)",
        backdropFilter: "blur(9px)",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        maskImage:
          "linear-gradient(180deg, transparent 0%, black 16%, black 84%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(180deg, transparent 0%, black 16%, black 84%, transparent 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 18,
          bottom: 18,
          right: 0,
          width: 3,
          borderRadius: "999px 0 0 999px",
          background: `linear-gradient(180deg, rgba(189, 172, 106, 0) 0%, ${colors.gold} 22%, ${colors.gold} 78%, rgba(189, 172, 106, 0) 100%)`,
          boxShadow: `0 0 18px rgba(189, 172, 106, 0.42)`,
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: -18,
          background:
            "radial-gradient(circle at 80% 50%, rgba(226, 241, 231, 0.16), transparent 42%)",
          filter: "blur(14px)",
          opacity: 0.75,
          pointerEvents: "none",
        },
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
                px: 1.1,
                py: 0.35,
                borderRadius: "999px",
                textDecoration: "none",
                textTransform: "none",
                color: colors.chalk,
                transformOrigin: "right center",
                transition:
                  "transform 0.2s ease-in-out, opacity 0.2s ease-in-out, background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                opacity: isActive ? 1 : 0.68,
                backgroundColor: "transparent",
                border: "1px solid transparent",
                boxShadow: "none",
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
                  color: isActive ? colors.gold : colors.chalk,
                  textShadow: isActive
                    ? "1px 1px 3px #000, 0 0 12px rgba(189, 172, 106, 0.28)"
                    : "1px 1px 2px #000",
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
