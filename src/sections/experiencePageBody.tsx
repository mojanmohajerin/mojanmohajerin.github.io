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
  const [showTimelinePrompt, setShowTimelinePrompt] = useState(true);

  const handleTimelineClick = () => {
    setShowTimelinePrompt(false);
  };

  const handleSetActiveYearFromSelector = (year: number) => {
    handleTimelineClick();
    setActiveYear(year);
  };

  return (
    <Box sx={{ position: "relative", padding: { xs: 0, md: "0 4em 0" } }}>
      <Experience
        activeYear={activeYear}
        setActiveYear={setActiveYear}
        md={md}
        showPrompt={showTimelinePrompt}
        onTimelineClick={handleTimelineClick}
      />
      {md ? (
        <CurrentYear
          activeYear={activeYear}
          setActiveYear={handleSetActiveYearFromSelector}
          onTimelineClick={handleTimelineClick}
        />
      ) : null}
    </Box>
  );
};
