"use client";

import { useState } from "react";

import { CurrentYear } from "@/components/currentYear";
import { years } from "@/data/life";
import { Experience } from "@/sections/experience";
import { Box } from "@mui/material";

export const ExperiencePageBody = () => {
  const [activeYear, setActiveYear] = useState<number>(years[0]);

  return (
    <Box sx={{ padding: "5rem" }}>
      <Experience activeYear={activeYear} setActiveYear={setActiveYear} />
      <CurrentYear activeYear={activeYear} setActiveYear={setActiveYear} />
    </Box>
  );
};
