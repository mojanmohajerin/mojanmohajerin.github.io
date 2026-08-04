"use client";

import { useMediaQuery } from "@mui/material";
import { useState } from "react";

import { CurrentYear } from "@/components/currentYear";
import { years } from "@/data/life";
import { Experience } from "@/sections/experience";
import { Box } from "@mui/material";

export const ExperiencePageBody = () => {
  const md = useMediaQuery("(min-width:900px)");
  const [activeYear, setActiveYear] = useState<number>(years[0]);
  const [scrollToActiveToken, setScrollToActiveToken] = useState(0);

  const handleSetActiveYearFromSelector = (year: number) => {
    setActiveYear(year);
    setScrollToActiveToken((currentToken) => currentToken + 1);
  };

  return (
    <Box sx={{ padding: { xs: 0, md: "0 4em 0" } }}>
      <Experience
        activeYear={activeYear}
        setActiveYear={setActiveYear}
        scrollToActiveToken={scrollToActiveToken}
        md={md}
      />
      {md ? (
        <CurrentYear
          activeYear={activeYear}
          setActiveYear={handleSetActiveYearFromSelector}
        />
      ) : null}
    </Box>
  );
};
