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

interface ExperienceProps {
  activeYear: number;
  setActiveYear: (activeYear: number) => void;
  scrollToActiveToken: number;
  md: boolean;
}

interface TimelineBlockProps {
  year: number;
  connector: boolean;
  activeYear: number;
  hoveredYear?: number;
  scrollToActiveToken: number;
  setActiveYear: (year: number) => void;
  setHoveredYear: (year?: number) => void;
}

interface MilestonePanelProps {
  year: number;
  pinned: boolean;
}

interface MilestoneCardProps {
  year: number;
  compact?: boolean;
  maxHeight?: number;
}

const MilestoneCard = ({
  year,
  compact = false,
  maxHeight,
}: MilestoneCardProps) => (
  <Stack
    spacing={compact ? 1.5 : 2}
    sx={{
      padding: compact ? 1.5 : { xs: 1.5, md: 2 },
      backgroundColor: "rgb(36, 54, 66, 0.82)",
      borderRadius: 2,
      border: `1px solid ${colors.base.light}`,
      boxShadow: "0 12px 32px rgb(0, 0, 0, 0.25)",
      maxHeight,
      overflowY: maxHeight ? "auto" : "visible",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    }}
  >
    {life[year].map((milestone: Milestone, index: number) => {
      const showDate =
        index === 0 || milestone.date !== life[year][index - 1].date;

      return (
        <Stack key={`${milestone.date}-${milestone.place}`} spacing={0.5}>
          <Stack spacing={0.25}>
            {showDate ? (
              <Typography
                color={colors.chalk}
                variant={compact ? "subtitle1" : "h6"}
                sx={{ textShadow: "2px 2px 4px #000000", lineHeight: 1.1 }}
              >
                {`${milestone.date}, ${year}`}
              </Typography>
            ) : null}
            <Stack
              direction="row"
              spacing={1}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Typography
                color={colors.chalk}
                variant="overline"
                sx={{
                  lineHeight: 1.2,
                  textShadow: "2px 2px 4px #000000",
                }}
              >
                {`${milestone.place}, ${milestone.country}`}
              </Typography>
              <Image
                src={milestone.image}
                alt={milestone.country}
                height={13}
                width={22}
              />
            </Stack>
          </Stack>
          <Typography
            color={colors.chalk}
            variant="body2"
            sx={{
              whiteSpace: "pre-wrap",
              paddingLeft: compact ? 1.5 : { xs: 1.5, md: 2 },
              textShadow: "2px 2px 4px #000000",
            }}
          >
            {milestone.event}
          </Typography>
        </Stack>
      );
    })}
  </Stack>
);

const MilestonePanel = ({ year, pinned }: MilestonePanelProps) => (
  <TimelineOppositeContent
    sx={{
      position: "absolute",
      top: -6,
      right: { xs: -24, md: -38 },
      width: { xs: "100%", md: "48%" },
      zIndex: pinned ? 6 : 7,
      pointerEvents: "none",
    }}
  >
    <MilestoneCard year={year} compact />
  </TimelineOppositeContent>
);

const TimelineBlock = ({
  year,
  connector,
  activeYear,
  hoveredYear,
  scrollToActiveToken,
  setActiveYear,
  setHoveredYear,
}: TimelineBlockProps) => {
  const indexInArray = years.indexOf(year);
  const nextYear = years[indexInArray + 1];
  const connectorHeight = nextYear ? 52 * (year - nextYear) : 0;
  const dotSize = 22;
  const showMilestones = year === activeYear || year === hoveredYear;

  const timelineItemRef = useRef<HTMLDivElement>(null);

  const handleClick = (year: number) => {
    if (activeYear !== year) {
      setActiveYear(year);
    }
  };

  useEffect(() => {
    if (
      scrollToActiveToken > 0 &&
      activeYear === year &&
      timelineItemRef.current
    ) {
      timelineItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeYear, scrollToActiveToken, year]);

  return (
    <TimelineItem
      ref={timelineItemRef}
      onMouseEnter={() => setHoveredYear(year)}
      onMouseLeave={() => setHoveredYear(undefined)}
      sx={{
        position: "relative",
        "&:hover .timeline-dot": {
          backgroundColor: colors.base.dark,
          transition: "background-color 0.5s ease-in-out",
        },
      }}
    >
      {showMilestones ? (
        <MilestonePanel year={year} pinned={year === activeYear} />
      ) : null}
      <TimelineSeparator>
        <Button
          onClick={() => handleClick(year)}
          onFocus={() => setHoveredYear(year)}
          onBlur={() => setHoveredYear(undefined)}
          disableFocusRipple
          disableRipple
          sx={{
            minWidth: 32,
            p: 0,
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
                activeYear === year ? colors.base.dark : colors.base.lightest,
              backgroundColor:
                activeYear === year ? colors.base.dark : colors.base.lightest,
              borderWidth: 6,
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
      <Stack sx={{ position: "absolute", left: -35, top: 0 }}>
        <TimelineContent>
          <Button
            onClick={() => handleClick(year)}
            onFocus={() => setHoveredYear(year)}
            onBlur={() => setHoveredYear(undefined)}
            disableFocusRipple
            disableRipple
            sx={{
              transform: "rotate(-40deg)",
              minWidth: 0,
              p: 0.5,
              "&:hover": {
                backgroundColor: "transparent",
                color: "transparent",
              },
            }}
          >
            <Typography
              color={colors.chalk}
              variant="h5"
              sx={{
                textShadow: "2px 2px 4px #000000",
                fontWeight: year === activeYear ? "bold" : "none",
              }}
            >
              {year}
            </Typography>
          </Button>
        </TimelineContent>
      </Stack>
    </TimelineItem>
  );
};

interface HorizontalTimelineBlockProps {
  year: number;
  connector: boolean;
  activeYear: number;
  hoveredYear?: number;
  setActiveYear: (year: number) => void;
  setHoveredYear: (year?: number) => void;
}

const HorizontalTimelineBlock = ({
  year,
  connector,
  activeYear,
  hoveredYear,
  setActiveYear,
  setHoveredYear,
}: HorizontalTimelineBlockProps) => {
  const isActive = year === activeYear;
  const showMilestones = isActive || year === hoveredYear;
  return (
    <Box
      onMouseEnter={() => setHoveredYear(year)}
      onMouseLeave={() => setHoveredYear(undefined)}
      sx={{
        position: "relative",
        flex: "1 1 0",
        minWidth: 0,
        height: 270,
      }}
    >
      {showMilestones ? (
        <Box
          sx={{
            position: "absolute",
            left: 0,
            bottom: 88,
            width: 300,
            zIndex: isActive ? 6 : 7,
            pointerEvents: "auto",
          }}
        >
          <MilestoneCard year={year} compact maxHeight={180} />
        </Box>
      ) : null}
      <Button
        aria-label={`Select ${year}`}
        aria-current={isActive ? "date" : undefined}
        onClick={() => setActiveYear(year)}
        onFocus={() => setHoveredYear(year)}
        onBlur={() => setHoveredYear(undefined)}
        disableFocusRipple
        disableRipple
        sx={{
          position: "absolute",
          left: 0,
          bottom: 48,
          minWidth: 0,
          p: 0,
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:hover .timeline-dot": {
            backgroundColor: colors.base.dark,
          },
        }}
      >
        <TimelineDot
          variant="outlined"
          className="timeline-dot"
          sx={{
            height: 22,
            width: 22,
            borderColor: isActive ? colors.base.dark : colors.base.lightest,
            backgroundColor: isActive ? colors.base.dark : colors.base.lightest,
            borderWidth: 6,
            m: 0,
          }}
        />
      </Button>
      {connector ? (
        <Box
          sx={{
            position: "absolute",
            left: 22,
            right: 0,
            bottom: 58,
            height: 4,
            backgroundColor: colors.charcoal,
          }}
        />
      ) : null}
      <Button
        onClick={() => setActiveYear(year)}
        onFocus={() => setHoveredYear(year)}
        onBlur={() => setHoveredYear(undefined)}
        disableFocusRipple
        disableRipple
        sx={{
          position: "absolute",
          left: -18,
          bottom: 0,
          minWidth: 0,
          p: 0.5,
          transform: "rotate(-35deg)",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Typography
          color={colors.chalk}
          variant="h5"
          sx={{
            textShadow: "2px 2px 4px #000000",
            fontWeight: isActive ? "bold" : "none",
          }}
        >
          {year}
        </Typography>
      </Button>
    </Box>
  );
};

export const Experience = ({
  activeYear,
  setActiveYear,
  scrollToActiveToken,
  md,
}: ExperienceProps) => {
  const [hoveredYear, setHoveredYear] = useState<number | undefined>();
  const horizontalYears = [...years].reverse();

  if (md) {
    return (
      <Box
        sx={{
          mr: { md: 10, lg: 12 },
          mt: -4,
          overflow: "visible",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            width: "100%",
            px: 3,
            pt: 2,
          }}
        >
          {horizontalYears.map((year, index) => (
            <HorizontalTimelineBlock
              key={year}
              year={year}
              connector={index !== horizontalYears.length - 1}
              activeYear={activeYear}
              hoveredYear={hoveredYear}
              setActiveYear={setActiveYear}
              setHoveredYear={setHoveredYear}
            />
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: -2 }}>
      <Timeline position="left" sx={{ py: 0 }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector
              sx={{
                height: 28,
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
            hoveredYear={hoveredYear}
            scrollToActiveToken={scrollToActiveToken}
            setActiveYear={setActiveYear}
            setHoveredYear={setHoveredYear}
          />
        ))}
      </Timeline>
    </Box>
  );
};
