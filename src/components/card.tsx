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

import { colors } from "@/styles/colors";
import { ProjectModal } from "./modal";

interface CardUnitProps {
  project: {
    thumbnailImage: StaticImageData;
    otherImages: StaticImageData[];
    name: string;
    outline: string;
    description: string;
    date: string;
    technologies: string[];
  };
}

export const CardUnit = ({ project }: CardUnitProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Card
        raised
        sx={{
          width: 400,
          height: 400,
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
                  textShadow: `1px 1px 1px ${colors.chalk}`,
                }}
              >
                {project.name}
              </Typography>
              <Typography
                variant="overline"
                sx={{
                  color: "text.secondary",
                  textShadow: `1px 1px 1px ${colors.chalk}`,
                  paddingTop: 0.75,
                }}
              >
                {project.date}
              </Typography>
            </Stack>
            <Stack direction="column" spacing={1}>
              <Typography
                variant="body1"
                sx={{
                  color: colors.charcoal,
                  textShadow: `1px 1px 1px ${colors.chalk}`,
                }}
              >
                {project.outline}
              </Typography>
              <Stack direction="row" spacing={1} justifyContent="flex-start">
                {project.technologies.map((tech) => {
                  return (
                    <Box
                      key={`${project.name}-${tech}`}
                      sx={{
                        backgroundColor: "rgba(226, 241, 231, 0.5)",
                        borderRadius: "50%",
                        padding: 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: colors.charcoal,
                          textShadow: `1px 1px 1px ${colors.chalk}`,
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
