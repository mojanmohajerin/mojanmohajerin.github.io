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
import type { MouseEvent } from "react";
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
  surface?: boolean;
}

const milestoneCardBackground = "rgb(36, 54, 66, 0.82)";
const horizontalTimelineDotSize = 22;
const horizontalTimelineDotBottom = 48;
const horizontalTimelineConnectorHeight = 90;

const SideSpeechBubbleTail = () => (
  <Box
    sx={{
      position: "absolute",
      top: 17,
      left: -15,
      width: 16,
      height: 22,
      pointerEvents: "none",
      zIndex: 2,
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        right: -1,
        width: 4,
        height: 22,
        backgroundColor: milestoneCardBackground,
        transform: "translateY(-50%)",
        zIndex: 3,
      }}
    />
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: 0,
        width: 0,
        height: 0,
        borderTop: "11px solid transparent",
        borderBottom: "11px solid transparent",
        borderRight: `16px solid ${colors.base.light}`,
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
    />
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: 2,
        width: 0,
        height: 0,
        borderTop: "9px solid transparent",
        borderBottom: "9px solid transparent",
        borderRight: `14px solid ${milestoneCardBackground}`,
        transform: "translateY(-50%)",
        zIndex: 2,
      }}
    />
  </Box>
);

const MilestoneCard = ({
  year,
  compact = false,
  maxHeight,
  surface = true,
}: MilestoneCardProps) => {
  const milestones = [...life[year]].reverse();

  return (
    <Stack
      spacing={compact ? 1.5 : 2}
      sx={{
        position: "relative",
        zIndex: 1,
        padding: compact ? 1.5 : { xs: 1.5, md: 2 },
        backgroundColor: surface ? milestoneCardBackground : "transparent",
        borderRadius: surface ? 2 : 0,
        border: surface ? `1px solid ${colors.base.light}` : "none",
        boxShadow: surface ? "0 12px 32px rgb(0, 0, 0, 0.25)" : "none",
        maxHeight,
        overflowY: maxHeight ? "auto" : "visible",
        scrollbarWidth: maxHeight ? "thin" : "auto",
        scrollbarColor: maxHeight
          ? `${colors.base.lightest} rgba(36, 54, 66, 0.35)`
          : undefined,
        msOverflowStyle: "auto",
        "&::-webkit-scrollbar": {
          width: maxHeight ? 8 : undefined,
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "rgba(36, 54, 66, 0.35)",
          borderRadius: 999,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: colors.base.lightest,
          borderRadius: 999,
        },
      }}
    >
      {milestones.map((milestone: Milestone, index: number) => {
        const isLastMilestone = index === milestones.length - 1;

        return (
          <Stack
            key={`${milestone.date}-${milestone.place}`}
            direction="row"
            spacing={1.25}
            alignItems="stretch"
          >
            <Stack alignItems="center" sx={{ width: 16, flexShrink: 0 }}>
              <Box
                sx={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  backgroundColor: colors.gold,
                  border: `1px solid ${colors.base.lightest}`,
                  boxShadow: "0 0 0 2px rgba(36, 54, 66, 0.45)",
                  mt: 0.35,
                  flexShrink: 0,
                }}
              />
              {isLastMilestone ? null : (
                <Box
                  sx={{
                    width: 2,
                    flex: "1 1 auto",
                    minHeight: 20,
                    mt: 0.5,
                    backgroundColor: "rgba(226, 241, 231, 0.35)",
                  }}
                />
              )}
            </Stack>
            <Stack spacing={0.4} sx={{ minWidth: 0, flex: 1 }}>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="space-between"
                alignItems="baseline"
              >
                <Typography
                  color={colors.chalk}
                  variant={compact ? "subtitle2" : "h6"}
                  sx={{ textShadow: "2px 2px 4px #000000", lineHeight: 1.15 }}
                >
                  {`${milestone.date}, ${year}`}
                </Typography>
                <Stack
                  direction="row"
                  spacing={0.75}
                  justifyContent="flex-end"
                  alignItems="center"
                  sx={{ minWidth: 0 }}
                >
                  <Typography
                    color={colors.chalk}
                    variant="overline"
                    sx={{
                      lineHeight: 1.1,
                      textAlign: "right",
                      textShadow: "2px 2px 4px #000000",
                    }}
                  >
                    {milestone.place}
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
                  textShadow: "2px 2px 4px #000000",
                }}
              >
                {milestone.event}
              </Typography>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

const HorizontalMilestoneCard = ({
  year,
  openTowardCenter,
}: {
  year: number;
  openTowardCenter: boolean;
}) => (
  <Box
    sx={{
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: -16,
        left: openTowardCenter ? "auto" : horizontalTimelineDotSize / 2,
        right: openTowardCenter ? horizontalTimelineDotSize / 2 : "auto",
        width: 2,
        height: 10,
        backgroundColor: colors.base.light,
        opacity: 0.85,
        transform: "translateX(-50%)",
        pointerEvents: "none",
      },
    }}
  >
    <MilestoneCard year={year} compact maxHeight={180} />
  </Box>
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
    <SideSpeechBubbleTail />
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
  const visibleYear = hoveredYear ?? activeYear;
  const showMilestones = year === visibleYear;
  const isActive = year === activeYear;
  const isHighlighted = showMilestones;

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
              borderColor: isHighlighted
                ? colors.base.dark
                : colors.base.lightest,
              backgroundColor: isHighlighted
                ? colors.base.dark
                : colors.base.lightest,
              borderWidth: 6,
              transition: "background-color 0.2s ease-in-out",
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
                fontWeight: isActive || isHighlighted ? "bold" : "none",
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
  nextYear?: number;
  connector: boolean;
  index: number;
  totalYears: number;
  elevation: number;
  nextElevation: number;
  activeYear: number;
  hoveredYear?: number;
  setActiveYear: (year: number) => void;
  setHoveredYear: (year?: number) => void;
}

const HorizontalTimelineBlock = ({
  year,
  nextYear,
  connector,
  index,
  totalYears,
  elevation,
  nextElevation,
  activeYear,
  hoveredYear,
  setActiveYear,
  setHoveredYear,
}: HorizontalTimelineBlockProps) => {
  const isActive = year === activeYear;
  const visibleYear = hoveredYear ?? activeYear;
  const showMilestones = year === visibleYear;
  const isHighlighted = showMilestones;
  const openTowardCenter = index >= totalYears / 2;
  const hitAreaHeight =
    horizontalTimelineDotBottom +
    Math.max(elevation, nextElevation) +
    horizontalTimelineDotSize +
    8;

  const getClosestYear = (target: HTMLDivElement, clientX: number) => {
    if (!connector || !nextYear) {
      return year;
    }

    const rect = target.getBoundingClientRect();
    const cursorX = clientX - rect.left;
    const currentDotCenter = horizontalTimelineDotSize / 2;
    const nextDotCenter = rect.width + currentDotCenter;

    return Math.abs(cursorX - currentDotCenter) <=
      Math.abs(cursorX - nextDotCenter)
      ? year
      : nextYear;
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    setHoveredYear(getClosestYear(event.currentTarget, event.clientX));
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setActiveYear(getClosestYear(event.currentTarget, event.clientX));
  };

  return (
    <Box
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
            left: openTowardCenter ? "auto" : 0,
            right: openTowardCenter
              ? `calc(100% - ${horizontalTimelineDotSize}px)`
              : "auto",
            bottom: 88 + elevation,
            width: 300,
            zIndex: isActive ? 6 : 7,
            pointerEvents: "auto",
          }}
        >
          <HorizontalMilestoneCard
            year={year}
            openTowardCenter={openTowardCenter}
          />
        </Box>
      ) : null}
      <Box
        onMouseEnter={handleMouseMove}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        onMouseLeave={() => setHoveredYear(undefined)}
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: hitAreaHeight,
          cursor: "pointer",
          zIndex: 5,
        }}
      />
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
          bottom: horizontalTimelineDotBottom + elevation,
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
            width: horizontalTimelineDotSize,
            borderColor: isHighlighted ? colors.base.dark : colors.base.lightest,
            backgroundColor: isHighlighted
              ? colors.base.dark
              : colors.base.lightest,
            borderWidth: 6,
            m: 0,
            transition: "background-color 0.2s ease-in-out",
          }}
        />
      </Button>
      {connector ? (
        <Box
          component="svg"
          viewBox={`0 0 100 ${horizontalTimelineConnectorHeight}`}
          preserveAspectRatio="none"
          aria-hidden="true"
          sx={{
            position: "absolute",
            left: horizontalTimelineDotSize / 2,
            right: -(horizontalTimelineDotSize / 2),
            bottom: horizontalTimelineDotBottom,
            height: horizontalTimelineConnectorHeight,
            pointerEvents: "none",
            overflow: "visible",
            zIndex: 0,
          }}
        >
          <path
            d={`M 0 ${horizontalTimelineConnectorHeight -
              horizontalTimelineDotSize / 2 -
              elevation
              } C 34 ${horizontalTimelineConnectorHeight -
              horizontalTimelineDotSize / 2 -
              elevation
              }, 66 ${horizontalTimelineConnectorHeight -
              horizontalTimelineDotSize / 2 -
              nextElevation
              }, 100 ${horizontalTimelineConnectorHeight -
              horizontalTimelineDotSize / 2 -
              nextElevation
              }`}
            fill="none"
            stroke={colors.charcoal}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </Box>
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
          bottom: elevation,
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
            fontWeight: isActive || isHighlighted ? "bold" : "none",
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
  const visibleYear = hoveredYear ?? activeYear;
  const visibleYearIndex = horizontalYears.indexOf(visibleYear);
  const getTimelineElevation = (year: number) => {
    const distanceFromVisibleYear = Math.abs(
      horizontalYears.indexOf(year) - visibleYearIndex,
    );

    return Math.round(46 * Math.exp(-1.25 * distanceFromVisibleYear));
  };

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
              nextYear={horizontalYears[index + 1]}
              connector={index !== horizontalYears.length - 1}
              index={index}
              totalYears={horizontalYears.length}
              elevation={getTimelineElevation(year)}
              nextElevation={
                horizontalYears[index + 1]
                  ? getTimelineElevation(horizontalYears[index + 1])
                  : 0
              }
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
