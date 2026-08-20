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
import { Box, Button, Stack, SvgIcon, Typography } from "@mui/material";
import { ArrowBlockDown } from "@untitled-ui/icons-react";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

import { life, years } from "@/data/life";
import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { colors } from "@/styles/colors";
import Image from "next/image";

interface ExperienceProps {
  activeYear: number;
  setActiveYear: (activeYear: number) => void;
  md: boolean;
  showPrompt: boolean;
  onTimelineClick: () => void;
}

interface TimelineBlockProps {
  year: number;
  connector: boolean;
  activeYear: number;
  hoveredYear?: number;
  setActiveYear: (year: number) => void;
  setHoveredYear: (year?: number) => void;
  clearHoveredYear: (delay?: number) => void;
  onTimelineClick: () => void;
  showPrompt: boolean;
}

interface MilestonePanelProps {
  year: number;
  pinned: boolean;
  setHoveredYear: (year?: number) => void;
  clearHoveredYear: (delay?: number) => void;
}

interface MilestoneCardProps {
  year: number;
  compact?: boolean;
  maxHeight?: number;
  surface?: boolean;
}

const milestoneCardBackground = "rgba(36, 54, 66, 0.86)";
const horizontalTimelineDotSize = 22;
const horizontalTimelineDotBottom = 48;
const timelinePromptYear = 1996;

const timelineDateJa: Record<string, string> = {
  Jan: "1月",
  Mar: "3月",
  April: "4月",
  May: "5月",
  July: "7月",
  Oct: "10月",
  Nov: "11月",
  Dec: "12月",
  Sept: "9月",
};

const timelinePlaceJa: Record<string, string> = {
  Japan: "日本",
  "New Zealand": "ニュージーランド",
  Australia: "オーストラリア",
  Tokyo: "東京",
  Fukuoka: "福岡",
  Nelson: "ネルソン",
  Dunedin: "ダニーデン",
  "University of Sydney": "シドニー大学",
  "Turramurra High School": "タラマラ高校",
  "Turramurra Public School": "タラマラ公立小学校",
  "Hornsby, Sydney": "シドニー、ホーンズビー",
};

const timelineEventJa: Record<string, string> = {
  "Resigned.\nRole: Systems Engineer": "退職。\n職種：システムエンジニア",
  "Started work.\nRole: Systems Engineer":
    "勤務開始。\n職種：システムエンジニア",
  "Moved to Fukuoka! :)": "福岡へ引っ越しました！ :)",
  "Moved to Japan on a Working Holiday Visa.\nSpent the first month travelling\nToyko -> Nagoya -> Mie -> Sendai -> Aomori -> Hakodate -> Sapporo -> Osaka":
    "ワーキングホリデービザで日本へ移住。\n最初の1か月は旅行をしました。\n東京 -> 名古屋 -> 三重 -> 仙台 -> 青森 -> 函館 -> 札幌 -> 大阪",
  "Resigned.\nRole: Software Engineer":
    "退職。\n職種：ソフトウェアエンジニア",
  "Resigned.\nRole: Wall Assistant": "退職。\n職種：ウォールアシスタント",
  "Started part-time work.\nRole: Wall Assistant":
    "パートタイム勤務開始。\n職種：ウォールアシスタント",
  "Started work.\nRole: Software Engineer":
    "勤務開始。\n職種：ソフトウェアエンジニア",
  "Resigned.\nRole: Teacher Aide": "退職。\n職種：ティーチャーエイド",
  "Started work.\nRole: Teacher Aide":
    "勤務開始。\n職種：ティーチャーエイド",
  "Moved to Nelson.\nContinued efforts in community building projects.":
    "ネルソンへ引っ越しました。\nコミュニティづくりのプロジェクトへの取り組みを継続しました。",
  "Moved to New Zealand.\nDedicated a period of time to voluntary community building and educational projects.":
    "ニュージーランドへ移住。\n自主的なコミュニティづくりと教育プロジェクトに一定期間を捧げました。",
  "Resigned.\nRole: Graduate Electrical Engineer (Rail)":
    "退職。\n職種：新卒電気エンジニア（鉄道）",
  "Changed department.\nRole: Graduate Electrical Engineer (Rail)":
    "部署異動。\n職種：新卒電気エンジニア（鉄道）",
  "Graduated university.\nDegree: Bachelor of Engineering Honours (Mechatronic)\nSecond Class, First Division (Honours)":
    "大学卒業。\n学位：工学士（優等学位・メカトロニクス）\nSecond Class, First Division（優等）",
  "Started internship.\nRole: Document Controller":
    "インターン開始。\n職種：ドキュメントコントローラー",
  "Changed major.\nDegree: Bachelor of Engineering Honours (Mechatronic).":
    "専攻変更。\n学位：工学士（優等学位・メカトロニクス）。",
  "Started attending university.\nDegree: Bachelor of Biomedical Engineering & Medical Science (double degree).":
    "大学入学。\n学位：生物医学工学・医科学のダブルディグリー。",
  "Graduated high school.\nHSC score 96.55.":
    "高校卒業。\nHSC スコア 96.55。",
  "Started attending high school.": "高校に入学。",
  "Started attending primary school.": "小学校に入学。",
  "I was born!": "誕生！",
};

const TimelineClickPrompt = ({
  placement,
  bottomOffset,
  onClick,
}: {
  placement: "horizontal" | "vertical";
  bottomOffset?: number;
  onClick: () => void;
}) => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleClick = () => {
    onClick();
  };

  return (
    <Box
      sx={{
        position: "absolute",
        left: placement === "horizontal" ? -38 : -38,
        bottom: placement === "horizontal" ? bottomOffset : "auto",
        top: placement === "vertical" ? -64 : "auto",
        transform: "rotate(-28deg)",
        transformOrigin: "center bottom",
        zIndex: 9,
        pointerEvents: "auto",
      }}
    >
      <Button disableRipple onClick={handleClick} sx={{ p: 0 }}>
        <Stack spacing={1} alignItems="center">
          <Typography
            variant="overline"
            sx={{
              color: colors.red,
              textShadow: `1px 1px 2px ${colors.charcoal}`,
              fontWeight: "bold",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            {t.timeline.clickMe}
          </Typography>
          <SvgIcon
            sx={{
              color: colors.red,
              filter: `drop-shadow(1px 1px 2px ${colors.charcoal})`,
              animation: "bounce 1s ease-in-out 3.25",
              cursor: "pointer",
            }}
          >
            <ArrowBlockDown />
          </SvgIcon>
        </Stack>
      </Button>
    </Box>
  );
};

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
        borderRight: `16px solid rgba(226, 241, 231, 0.26)`,
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
        borderRight: `14px solid rgba(36, 54, 66, 0.86)`,
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
  const { language } = useLanguage();

  return (
    <Stack
      spacing={compact ? 1.5 : 2}
      sx={{
        position: "relative",
        zIndex: 1,
        padding: compact ? 1.5 : { xs: 1.5, md: 2 },
        background: surface
          ? "linear-gradient(145deg, rgba(36, 54, 66, 0.9) 0%, rgba(56, 116, 120, 0.68) 62%, rgba(36, 54, 66, 0.84) 100%)"
          : "transparent",
        borderRadius: surface ? 2 : 0,
        border: surface ? `1px solid rgba(226, 241, 231, 0.26)` : "none",
        boxShadow: surface
          ? "0 18px 42px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255, 254, 249, 0.12)"
          : "none",
        backdropFilter: surface ? "blur(8px)" : "none",
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
        const date =
          language === "ja"
            ? milestone.dateJa ?? timelineDateJa[milestone.date] ?? milestone.date
            : milestone.date;
        const place =
          language === "ja"
            ? milestone.placeJa ?? timelinePlaceJa[milestone.place] ?? milestone.place
            : milestone.place;
        const country =
          language === "ja"
            ? milestone.countryJa ??
            timelinePlaceJa[milestone.country] ??
            milestone.country
            : milestone.country;
        const event =
          language === "ja"
            ? milestone.eventJa ?? timelineEventJa[milestone.event] ?? milestone.event
            : milestone.event;

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
                  boxShadow:
                    "0 0 0 2px rgba(36, 54, 66, 0.45), 0 0 14px rgba(189, 172, 106, 0.55)",
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
                    background:
                      "linear-gradient(180deg, rgba(189, 172, 106, 0.42), rgba(226, 241, 231, 0.18))",
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
                  {language === "ja" ? `${year}年${date}` : `${date}, ${year}`}
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
                    {place}
                  </Typography>
                  <Image
                    src={milestone.image}
                    alt={country}
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
                {event}
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
        background: `linear-gradient(180deg, ${colors.gold}, rgba(226, 241, 231, 0.45))`,
        opacity: 0.85,
        boxShadow: `0 0 12px rgba(189, 172, 106, 0.42)`,
        transform: "translateX(-50%)",
        pointerEvents: "none",
      },
    }}
  >
    <MilestoneCard year={year} compact maxHeight={180} />
  </Box>
);

const MilestonePanel = ({
  year,
  pinned,
  setHoveredYear,
  clearHoveredYear,
}: MilestonePanelProps) => (
  <TimelineOppositeContent
    onMouseEnter={() => setHoveredYear(year)}
    onMouseLeave={() => clearHoveredYear(180)}
    sx={{
      position: "absolute",
      top: -6,
      right: { xs: -24, md: -38 },
      width: { xs: "100%", md: "48%" },
      zIndex: pinned ? 6 : 7,
      pointerEvents: "auto",
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
  setActiveYear,
  setHoveredYear,
  clearHoveredYear,
  onTimelineClick,
  showPrompt,
}: TimelineBlockProps) => {
  const indexInArray = years.indexOf(year);
  const nextYear = years[indexInArray + 1];
  const connectorHeight = nextYear ? 52 * (year - nextYear) : 0;
  const dotSize = 22;
  const visibleYear = hoveredYear ?? activeYear;
  const showMilestones = year === visibleYear;
  const isActive = year === activeYear;
  const isHighlighted = showMilestones;

  const handleClick = (year: number) => {
    onTimelineClick();

    if (activeYear !== year) {
      setActiveYear(year);
    }
  };

  return (
    <TimelineItem
      onMouseEnter={() => {
        setHoveredYear(year);
      }}
      onMouseLeave={() => clearHoveredYear(180)}
      sx={{
        position: "relative",
      }}
    >
      {showPrompt && year === timelinePromptYear ? (
        <TimelineClickPrompt
          placement="vertical"
          onClick={() => handleClick(timelinePromptYear)}
        />
      ) : null}
      {showMilestones ? (
        <MilestonePanel
          year={year}
          pinned={year === activeYear}
          setHoveredYear={setHoveredYear}
          clearHoveredYear={clearHoveredYear}
        />
      ) : null}
      <TimelineSeparator>
        <Button
          onClick={() => handleClick(year)}
          onFocus={() => {
            setHoveredYear(year);
          }}
          onBlur={() => clearHoveredYear(180)}
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
                ? colors.gold
                : "rgba(226, 241, 231, 0.86)",
              backgroundColor: isHighlighted
                ? colors.gold
                : "rgba(226, 241, 231, 0.82)",
              borderWidth: 5,
              boxShadow: isHighlighted
                ? "0 0 0 5px rgba(189, 172, 106, 0.16), 0 0 20px rgba(189, 172, 106, 0.62)"
                : "0 0 0 4px rgba(36, 54, 66, 0.4)",
              transition:
                "background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
            }}
          />
        </Button>
        {connector ? (
          <TimelineConnector
            sx={{
              height: connectorHeight,
              width: 3,
              borderRadius: 999,
              background:
                "linear-gradient(180deg, rgba(226, 241, 231, 0.46), rgba(189, 172, 106, 0.24), rgba(226, 241, 231, 0.34))",
              boxShadow: "0 0 12px rgba(226, 241, 231, 0.16)",
            }}
          />
        ) : null}
      </TimelineSeparator>
      <Stack sx={{ position: "absolute", left: -35, top: 0 }}>
        <TimelineContent>
          <Button
            onClick={() => handleClick(year)}
            onFocus={() => {
              setHoveredYear(year);
            }}
            onBlur={() => clearHoveredYear(180)}
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
                color: isActive || isHighlighted ? colors.gold : colors.chalk,
                textShadow: isActive || isHighlighted
                  ? "2px 2px 4px #000000, 0 0 14px rgba(189, 172, 106, 0.36)"
                  : "2px 2px 4px #000000",
                fontWeight: isActive || isHighlighted ? 700 : 500,
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
  clearHoveredYear: (delay?: number) => void;
  onTimelineClick: () => void;
  showPrompt: boolean;
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
  clearHoveredYear,
  onTimelineClick,
  showPrompt,
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
    onTimelineClick();
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
      {showPrompt && year === timelinePromptYear ? (
        <TimelineClickPrompt
          placement="horizontal"
          bottomOffset={horizontalTimelineDotBottom + elevation + 34}
          onClick={() => {
            onTimelineClick();
            setActiveYear(timelinePromptYear);
          }}
        />
      ) : null}
      {showMilestones ? (
        <Box
          onMouseEnter={() => setHoveredYear(year)}
          onMouseLeave={() => clearHoveredYear(180)}
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
            transition: "bottom 220ms cubic-bezier(0.2, 0.8, 0.2, 1)",
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
        onMouseLeave={() => clearHoveredYear(180)}
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
        onClick={() => {
          onTimelineClick();
          setActiveYear(year);
        }}
        onFocus={() => {
          setHoveredYear(year);
        }}
        onBlur={() => clearHoveredYear(180)}
        disableFocusRipple
        disableRipple
        sx={{
          position: "absolute",
          left: 0,
          bottom: horizontalTimelineDotBottom + elevation,
          minWidth: 0,
          p: 0,
          transition: "bottom 220ms cubic-bezier(0.2, 0.8, 0.2, 1)",
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:hover .timeline-dot": {
            backgroundColor: colors.gold,
            borderColor: colors.gold,
            boxShadow:
              "0 0 0 5px rgba(189, 172, 106, 0.16), 0 0 20px rgba(189, 172, 106, 0.62)",
          },
        }}
      >
        <TimelineDot
          variant="outlined"
          className="timeline-dot"
          sx={{
            height: 22,
            width: horizontalTimelineDotSize,
            borderColor: isHighlighted
              ? colors.gold
              : "rgba(226, 241, 231, 0.86)",
            backgroundColor: isHighlighted
              ? colors.gold
              : "rgba(226, 241, 231, 0.82)",
            borderWidth: 5,
            m: 0,
            boxShadow: isHighlighted
              ? "0 0 0 5px rgba(189, 172, 106, 0.16), 0 0 20px rgba(189, 172, 106, 0.62)"
              : "0 0 0 4px rgba(36, 54, 66, 0.4)",
            transition:
              "background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          }}
        />
      </Button>
      <Button
        onClick={() => {
          onTimelineClick();
          setActiveYear(year);
        }}
        onFocus={() => {
          setHoveredYear(year);
        }}
        onBlur={() => clearHoveredYear(180)}
        disableFocusRipple
        disableRipple
        sx={{
          position: "absolute",
          left: -18,
          bottom: elevation,
          minWidth: 0,
          p: 0.5,
          transform: "rotate(-35deg)",
          transition: "bottom 220ms cubic-bezier(0.2, 0.8, 0.2, 1)",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Typography
          color={colors.chalk}
          variant="h5"
          sx={{
            color: isActive || isHighlighted ? colors.gold : colors.chalk,
            textShadow: isActive || isHighlighted
              ? "2px 2px 4px #000000, 0 0 14px rgba(189, 172, 106, 0.36)"
              : "2px 2px 4px #000000",
            fontWeight: isActive || isHighlighted ? 700 : 500,
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
  md,
  showPrompt,
  onTimelineClick,
}: ExperienceProps) => {
  const [hoveredYear, setHoveredYear] = useState<number | undefined>();
  const hoverClearTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const horizontalYears = [...years].reverse();
  const visibleYear = hoveredYear ?? activeYear;
  const visibleYearIndex = horizontalYears.indexOf(visibleYear);

  const showHoveredYear = (year?: number) => {
    if (hoverClearTimeoutRef.current) {
      clearTimeout(hoverClearTimeoutRef.current);
      hoverClearTimeoutRef.current = null;
    }

    setHoveredYear(year);
  };

  const clearHoveredYear = (delay = 0) => {
    if (hoverClearTimeoutRef.current) {
      clearTimeout(hoverClearTimeoutRef.current);
      hoverClearTimeoutRef.current = null;
    }

    if (delay > 0) {
      hoverClearTimeoutRef.current = setTimeout(() => {
        setHoveredYear(undefined);
        hoverClearTimeoutRef.current = null;
      }, delay);

      return;
    }

    setHoveredYear(undefined);
  };

  useEffect(() => {
    return () => {
      if (hoverClearTimeoutRef.current) {
        clearTimeout(hoverClearTimeoutRef.current);
      }
    };
  }, []);

  const getTimelineElevation = (year: number) => {
    const distanceFromVisibleYear = Math.abs(
      horizontalYears.indexOf(year) - visibleYearIndex,
    );

    return Math.round(52 * Math.exp(-0.48 * distanceFromVisibleYear ** 2));
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
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            width: "100%",
            px: 3,
            pt: 2,
            "&::before": {
              content: '""',
              position: "absolute",
              left: `calc(${24}px + ${horizontalTimelineDotSize / 2}px)`,
              right: `calc(${24}px - ${horizontalTimelineDotSize / 2}px)`,
              bottom: horizontalTimelineDotBottom + horizontalTimelineDotSize / 2,
              height: 3,
              borderRadius: 999,
              background:
                "linear-gradient(90deg, rgba(226, 241, 231, 0.08) 0%, rgba(226, 241, 231, 0.46) 18%, rgba(189, 172, 106, 0.3) 50%, rgba(226, 241, 231, 0.46) 82%, rgba(226, 241, 231, 0.08) 100%)",
              boxShadow: "0 0 14px rgba(226, 241, 231, 0.16)",
              pointerEvents: "none",
              zIndex: 0,
            },
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
              setHoveredYear={showHoveredYear}
              clearHoveredYear={clearHoveredYear}
              onTimelineClick={onTimelineClick}
              showPrompt={showPrompt}
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
                width: 3,
                borderRadius: 999,
                background:
                  "linear-gradient(180deg, rgba(226, 241, 231, 0.28), rgba(226, 241, 231, 0.46))",
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
            setActiveYear={setActiveYear}
            setHoveredYear={showHoveredYear}
            clearHoveredYear={clearHoveredYear}
            onTimelineClick={onTimelineClick}
            showPrompt={showPrompt}
          />
        ))}
      </Timeline>
    </Box>
  );
};
