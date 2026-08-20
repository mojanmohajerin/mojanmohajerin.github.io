"use client";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

import { useLanguage } from "@/i18n/language";
import { colors } from "@/styles/colors";
import { ProjectModal } from "./modal";

const chipGap = 8;
const minimumTruncatedChipWidth = 72;

interface VisibleTechnology {
  label: string;
  maxWidth?: number;
}

interface CardUnitProps {
  project: {
    thumbnailImage: StaticImageData;
    otherImages: StaticImageData[];
    name: string;
    outline: string;
    outlineJa?: string;
    description: string;
    descriptionJa?: string;
    date: string;
    dateJa?: string;
    technologies: string[];
  };
}

export const CardUnit = ({ project }: CardUnitProps) => {
  const [open, setOpen] = useState(false);
  const [visibleTechnologies, setVisibleTechnologies] = useState<VisibleTechnology[]>(
    project.technologies.map((technology) => ({ label: technology }))
  );
  const technologyRowRef = useRef<HTMLDivElement | null>(null);
  const technologyMeasureRef = useRef<HTMLDivElement | null>(null);
  const sm = useMediaQuery("(min-width:600px)");
  const { language } = useLanguage();
  const outline =
    language === "ja" ? project.outlineJa ?? project.outline : project.outline;
  const date = language === "ja" ? project.dateJa ?? project.date : project.date;
  const renderedTechnologies: VisibleTechnology[] =
    visibleTechnologies.length > 0
      ? visibleTechnologies
      : project.technologies.map((technology) => ({ label: technology }));

  const handleClick = () => {
    setOpen(true);
  };

  useLayoutEffect(() => {
    if (!sm) {
      setVisibleTechnologies(
        project.technologies.map((technology) => ({ label: technology }))
      );
      return;
    }

    const calculateVisibleTechnologies = () => {
      const row = technologyRowRef.current;
      const measure = technologyMeasureRef.current;

      if (!row || !measure) {
        return;
      }

      const availableWidth = row.clientWidth;
      const measuredChips = Array.from(measure.children) as HTMLElement[];
      const chipWidths = measuredChips.map((chip) =>
        Math.ceil(chip.getBoundingClientRect().width)
      );

      if (availableWidth <= 0 || chipWidths.length === 0) {
        return;
      }

      const totalWidth =
        chipWidths.reduce((sum, width) => sum + width, 0) +
        chipGap * Math.max(chipWidths.length - 1, 0);

      if (totalWidth <= availableWidth) {
        setVisibleTechnologies(
          project.technologies.map((technology) => ({ label: technology }))
        );
        return;
      }

      const nextVisibleTechnologies: VisibleTechnology[] = [];
      let usedWidth = 0;

      for (const [index, technology] of project.technologies.entries()) {
        const gapWidth = nextVisibleTechnologies.length > 0 ? chipGap : 0;
        const chipWidth = chipWidths[index] ?? 0;
        const remainingWidth = availableWidth - usedWidth - gapWidth;

        if (remainingWidth >= chipWidth) {
          nextVisibleTechnologies.push({ label: technology });
          usedWidth += gapWidth + chipWidth;
          continue;
        }

        if (remainingWidth >= minimumTruncatedChipWidth) {
          nextVisibleTechnologies.push({
            label: technology,
            maxWidth: remainingWidth,
          });
        } else if (nextVisibleTechnologies.length > 0) {
          const previousIndex = nextVisibleTechnologies.length - 1;
          nextVisibleTechnologies[previousIndex] = {
            ...nextVisibleTechnologies[previousIndex],
            label: `${nextVisibleTechnologies[previousIndex].label}...`,
          };
        } else {
          nextVisibleTechnologies.push({
            label: technology,
            maxWidth: availableWidth,
          });
        }

        break;
      }

      setVisibleTechnologies(nextVisibleTechnologies);
    };

    calculateVisibleTechnologies();

    const resizeObserver = new ResizeObserver(calculateVisibleTechnologies);

    if (technologyRowRef.current) {
      resizeObserver.observe(technologyRowRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [project.technologies, sm]);

  return (
    <>
      <Card
        raised
        sx={{
          maxWidth: "500px",
          minHeight: "400px",
          backgroundColor: "transparent",
          boxShadow: "0 0 0 0",
          height: "100%",
          transition: "transform 0.3s",
          "@media (min-width: 900px)": {
            "&:hover": {
              transform: "scale(1.05)",
            },
          },
          "&:hover .project-thumbnail-frame": {
            borderColor: "rgba(189, 172, 106, 0.95)",
            boxShadow:
              "0 0 0 1px rgba(189, 172, 106, 0.26), 0 12px 30px rgba(0, 0, 0, 0.26), inset 0 1px 0 rgba(255, 254, 249, 0.22)",
          },
          "&:hover .project-thumbnail-image": {
            transform: "scale(1.04)",
          },
        }}
      >
        <CardActionArea
          onClick={handleClick}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            height: "100%",
            width: "100%",
            textAlign: "left",
            "& .MuiCardActionArea-focusHighlight": {
              backgroundColor: "transparent",
            },
            "&:hover .MuiCardActionArea-focusHighlight": {
              opacity: 0,
            },
          }}
        >
          <Box
            className="project-thumbnail-frame"
            sx={{
              position: "relative",
              width: "100%",
              height: 250,
              overflow: "hidden",
              borderRadius: 2,
              border: `1px solid rgba(226, 241, 231, 0.62)`,
              background:
                "linear-gradient(135deg, rgba(226, 241, 231, 0.16), rgba(36, 54, 66, 0.26))",
              boxShadow:
                "0 0 0 1px rgba(36, 54, 66, 0.72), 0 12px 30px rgba(0, 0, 0, 0.26), inset 0 1px 0 rgba(255, 254, 249, 0.22)",
              transition: "border-color 220ms ease, box-shadow 220ms ease",
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 8,
                borderRadius: 1.25,
                border: `1px solid rgba(255, 254, 249, 0.26)`,
                pointerEvents: "none",
                zIndex: 1,
              },
            }}
          >
            <Image
              className="project-thumbnail-image"
              src={project.thumbnailImage}
              alt={project.name}
              fill
              sizes="(min-width: 900px) 500px, calc(100vw - 2rem)"
              style={{
                objectFit: "cover",
                transform: "scale(1)",
                transition: "transform 320ms ease",
              }}
            />
          </Box>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{
                minHeight: { xs: "auto", sm: 72 },
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: colors.chalk,
                  textShadow: "1px 1px 2px #000000",
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
              >
                {project.name}
              </Typography>
              <Typography
                variant="overline"
                sx={{
                  color: colors.base.lightest,
                  textShadow: "1px 1px 2px #000000",
                  paddingTop: 0.75,
                }}
              >
                {date}
              </Typography>
            </Stack>
            <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  color: colors.chalk,
                  textShadow: "1px 1px 2px #000000",
                  minHeight: { xs: "auto", sm: 78 },
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
              >
                {outline}
              </Typography>
              <Stack
                ref={technologyRowRef}
                direction="row"
                spacing={1}
                justifyContent="flex-start"
                sx={{
                  minWidth: 0,
                  overflow: { xs: "visible", sm: "hidden" },
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                  rowGap: { xs: 1, sm: 0 },
                  pr: 0.5,
                }}
              >
                {renderedTechnologies.map((tech, index) => (
                  <Box
                    key={`${project.name}-${tech.label}-${index}`}
                    sx={{
                      minWidth: 0,
                      flex: "0 0 auto",
                      maxWidth: {
                        xs: "100%",
                        sm: tech.maxWidth ? `${tech.maxWidth}px` : "max-content",
                      },
                      backgroundColor: "rgba(36, 54, 66, 0.72)",
                      borderRadius: "100px",
                      border: `1px solid rgba(226, 241, 231, 0.42)`,
                      padding: 1,
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: colors.chalk,
                        textShadow: "1px 1px 2px #000000",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tech.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Stack
                ref={technologyMeasureRef}
                direction="row"
                spacing={1}
                aria-hidden
                sx={{
                  position: "absolute",
                  width: "max-content",
                  height: 0,
                  overflow: "hidden",
                  visibility: "hidden",
                  pointerEvents: "none",
                }}
              >
                {project.technologies.map((tech) => (
                  <Box
                    key={`${project.name}-${tech}-measure`}
                    sx={{
                      flex: "0 0 auto",
                      backgroundColor: "rgba(36, 54, 66, 0.72)",
                      borderRadius: "100px",
                      border: `1px solid rgba(226, 241, 231, 0.42)`,
                      padding: 1,
                    }}
                  >
                    <Typography variant="body1" sx={{ whiteSpace: "nowrap" }}>
                      {tech}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <ProjectModal open={open} setOpen={setOpen} project={project} />
    </>
  );
};
