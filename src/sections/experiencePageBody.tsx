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

  return (
    <Box sx={{ padding: { xs: 0, md: "5em" } }}>
      <Experience
        activeYear={activeYear}
        setActiveYear={setActiveYear}
        md={md}
      />
      {md ? (
        <CurrentYear activeYear={activeYear} setActiveYear={setActiveYear} />
      ) : null}
    </Box>
  );
};
