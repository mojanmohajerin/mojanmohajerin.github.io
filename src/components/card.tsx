"use client";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import { useLanguage } from "@/i18n/language";
import { colors } from "@/styles/colors";
import { ProjectModal } from "./modal";

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
  const { language } = useLanguage();
  const outline =
    language === "ja" ? project.outlineJa ?? project.outline : project.outline;
  const date = language === "ja" ? project.dateJa ?? project.date : project.date;

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Card
        raised
        sx={{
          maxWidth: "500px",
          minHeight: "400px",
          backgroundColor: "transparent",
          boxShadow: "0 0 0 0",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardActionArea
          onClick={handleClick}
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 250,
            }}
          >
            <Image
              src={project.thumbnailImage}
              alt={project.name}
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: 5,
                border: `3px solid ${colors.charcoal}`,
              }}
            />
          </Box>
          <CardContent>
            <Stack direction="row" spacing={2} justifyContent="flex-start">
              <Typography
                variant="h5"
                sx={{
                  color: colors.chalk,
                  textShadow: "1px 1px 2px #000000",
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
            <Stack spacing={1}>
              <Typography
                variant="body1"
                sx={{
                  color: colors.chalk,
                  textShadow: "1px 1px 2px #000000",
                }}
              >
                {outline}
              </Typography>
              <Stack direction="row" spacing={1} justifyContent="flex-start">
                {project.technologies.map((tech) => {
                  return (
                    <Box
                      key={`${project.name}-${tech}`}
                      sx={{
                        backgroundColor: "rgba(36, 54, 66, 0.72)",
                        borderRadius: "100px",
                        border: `1px solid rgba(226, 241, 231, 0.42)`,
                        padding: 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: colors.chalk,
                          textShadow: "1px 1px 2px #000000",
                        }}
                      >
                        {tech}
                      </Typography>
                    </Box>
                  );
                })}
              </Stack>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <ProjectModal open={open} setOpen={setOpen} project={project} />
    </>
  );
};
