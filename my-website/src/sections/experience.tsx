"use client";

import type { Milestone } from "@/data/life";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { life, years } from "@/data/life";
import { colors } from "@/styles/colors";
import Image from "next/image";

interface TimelineBlockProps {
  year: number;
  connector: boolean;
  activeYear: number;
  setActiveYear: (year: number) => void;
  clicked: number;
  setClicked: (clicked: number) => void;
}

const TimelineBlock = ({
  year,
  connector,
  activeYear,
  setActiveYear,
  clicked,
  setClicked,
}: TimelineBlockProps) => {
  const indexInArray = years.indexOf(year);
  const connectorHeight = 80 * (years[indexInArray] - years[indexInArray + 1]);
  const dotSize = 30;

  const timelineItemRef = useRef<HTMLDivElement>(null);

  const handleClick = (year: number) => {
    if (activeYear !== year) {
      setActiveYear(year);
      setClicked(year);
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
      sx={{
        position: "relative",
        "&:hover .timeline-dot": {
          backgroundColor: colors.base.dark,
          transition: "background-color 0.5s ease-in-out",
        },
      }}
    >
      {year === activeYear ? (
        <>
          <TimelineOppositeContent
            sx={{ position: "absolute", top: 0, right: -50, width: "50%" }}
          >
            <Stack
              direction="column"
              spacing={4}
              sx={{
                padding: 3,
                backgroundColor: "rgb(56, 116, 120, 0.3)",
                borderRadius: 5,
                border: "3px solid rgb(56, 116, 120, 0.5)",
              }}
            >
              {life[year].map((milestone: Milestone, index: number) => {
                return (
                  <Stack
                    key={`${milestone.date}-${milestone.place}`}
                    direction="column"
                    spacing={0}
                  >
                    <Stack direction="column" spacing={0}>
                      {index === 0 ||
                      (index > 0 &&
                        milestone.date !== life[year][index - 1].date) ? (
                        <Typography
                          color={colors.chalk}
                          variant="h5"
                          sx={{ textShadow: "2px 2px 4px #000000" }}
                        >
                          {`${milestone.date}, ${year}`}
                        </Typography>
                      ) : null}
                      <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <Typography
                          color={colors.chalk}
                          variant="overline"
                          sx={{ textShadow: "2px 2px 4px #000000" }}
                        >
                          {`${milestone.place}, ${milestone.country}`}
                        </Typography>
                        {milestone.image ? (
                          <Image
                            src={milestone.image}
                            alt={milestone.country}
                            height={15}
                            width={25}
                          />
                        ) : null}
                      </Stack>
                    </Stack>
                    <Typography
                      color={colors.chalk}
                      variant="body1"
                      sx={{
                        whiteSpace: "pre-wrap",
                        paddingLeft: 3,
                        textShadow: "2px 2px 4px #000000",
                      }}
                    >
                      {milestone.event}
                    </Typography>
                  </Stack>
                );
              })}
            </Stack>
          </TimelineOppositeContent>
        </>
      ) : null}
      <TimelineSeparator>
        <Button
          onClick={() => handleClick(year)}
          disableFocusRipple
          disableRipple
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
              color: "transparent",
            },
          }}
        >
          <TimelineDot
            variant="outlined"
            className="timeline-dot"
            sx={{
              height: dotSize,
              width: dotSize,
              borderColor:
                clicked === year ? colors.base.dark : colors.base.lightest,
              backgroundColor:
                clicked === year ? colors.base.dark : colors.base.lightest,
              borderWidth: 9,
            }}
          />
        </Button>
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
      <TimelineContent sx={{ width: "50%" }}>
        <Button
          onClick={() => handleClick(year)}
          disableFocusRipple
          disableRipple
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
              color: "transparent",
            },
          }}
        >
          <Typography
            color={colors.chalk}
            variant="h4"
            sx={{ textShadow: "2px 2px 4px #000000" }}
          >
            {year}
          </Typography>
        </Button>
      </TimelineContent>
    </TimelineItem>
  );
};

export const Experience = () => {
  const [activeYear, setActiveYear] = useState<number>(years[0]);
  const [clicked, setClicked] = useState(years[0]);

  return (
    <Box sx={{ paddingTop: "2rem", width: "100%" }}>
      <Timeline position="left">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector
              sx={{
                height: 50,
                width: 4,
                backgroundColor: colors.charcoal,
              }}
            />
          </TimelineSeparator>
          <TimelineContent />
        </TimelineItem>
        {years.map((year, index) => (
          <TimelineBlock
            key={year}
            year={year}
            connector={index !== years.length - 1}
            activeYear={activeYear}
            setActiveYear={setActiveYear}
            clicked={clicked}
            setClicked={setClicked}
          />
        ))}
      </Timeline>
    </Box>
  );
};
