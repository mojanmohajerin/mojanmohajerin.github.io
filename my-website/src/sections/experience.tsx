"use client";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { colors } from "@/styles/colors";

const years = [2024, 2022, 2021, 2020, 2019, 2018, 2015, 2009, 2002, 1996];

interface TimelineBlockProps {
  year: number;
  connector: boolean;
  activeYear: number | null;
  setActiveYear: (year: number) => void;
}

const TimelineBlock = ({
  year,
  connector,
  activeYear,
  setActiveYear,
}: TimelineBlockProps) => {
  const indexInArray = years.indexOf(year);
  const connectorHeight = 80 * (years[indexInArray] - years[indexInArray + 1]);
  const dotSize = 30;

  const timelineItemRef = useRef<HTMLDivElement>(null);

  const handleClick = (year: number) => {
    if (activeYear !== year) {
      setActiveYear(year);
    }
  };

  useEffect(() => {
    if (activeYear === year && timelineItemRef.current) {
      timelineItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeYear, year]);

  return (
    <TimelineItem
      ref={timelineItemRef}
      className="timeline-item"
      sx={{
        "&:hover .timeline-dot": {
          backgroundColor: colors.base.light,
          transition: "background-color 0.5s ease-in-out",
        },
      }}
    >
      {year === activeYear ? (
        <TimelineOppositeContent>
          <Typography color={colors.chalk}>{activeYear}</Typography>
        </TimelineOppositeContent>
      ) : null}
      <TimelineSeparator>
        <TimelineDot
          variant="outlined"
          className="timeline-dot"
          sx={{
            height: dotSize,
            width: dotSize,
            borderColor: colors.charcoal,
            borderWidth: 5,
          }}
        >
          <Button onClick={() => handleClick(year)} />
        </TimelineDot>
        {connector ? (
          <TimelineConnector
            sx={{
              height: connectorHeight,
              width: 4,
              backgroundColor: colors.charcoal,
            }}
          />
        ) : null}
      </TimelineSeparator>
      <TimelineContent
        sx={{
          paddingTop: "0.5rem",
          paddingRight: "3rem",
        }}
      >
        <Button onClick={() => handleClick(year)}>
          <Typography color={colors.chalk} variant="h4">
            {year}
          </Typography>
        </Button>
      </TimelineContent>
    </TimelineItem>
  );
};

export const Experience = () => {
  const [activeYear, setActiveYear] = useState<number | null>(null);

  return (
    <Box sx={{ paddingTop: "2rem", width: "100%" }}>
      <Timeline position="left">
        {years.map((year, index) => (
          <TimelineBlock
            key={year}
            year={year}
            connector={index !== years.length - 1}
            activeYear={activeYear}
            setActiveYear={setActiveYear}
          />
        ))}
      </Timeline>
    </Box>
  );
};
