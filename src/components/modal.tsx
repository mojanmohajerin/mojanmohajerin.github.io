"use client";

import {
  Backdrop,
  Box,
  Fade,
  Modal,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";

import { colors } from "@/styles/colors";
import Link from "next/link";
import { useState } from "react";
import { LeftButton } from "./leftButton";
import { RightButton } from "./rightButton";
import { XCloseButton } from "./xCloseButton";

interface ProjectModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  project: {
    thumbnailImage: StaticImageData;
    otherImages: StaticImageData[];
    name: string;
    outline: string;
    description: string;
    date: string;
    technologies: string[];
    url?: string;
  };
}

export const ProjectModal = ({ open, setOpen, project }: ProjectModalProps) => {
  const imageHeight = 580;
  const imageWidth = 1000;

  const md = useMediaQuery("(min-width:900px)");

  const [displayImageIndex, setDisplayImageIndex] = useState<number>(0);

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        {md ? (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 1000,
              height: 800,
              backgroundColor: "rgb(98, 149, 132, 0.3)",
              borderRadius: "3%",
              boxShadow: 24,
            }}
          >
            <Stack
              spacing={2}
              justifyContent="space-between"
              alignItems="flex-start"
              sx={{ position: "relative", height: "98%" }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                  width: imageWidth,
                  height: imageHeight,
                  backgroundColor: colors.charcoal,
                }}
              >
                <Image
                  src={project.otherImages[displayImageIndex]}
                  alt={project.name}
                  width={imageWidth}
                  height={imageHeight}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                  }}
                />

                <LeftButton
                  displayImageIndex={displayImageIndex}
                  setDisplayImageIndex={setDisplayImageIndex}
                  imagesArrayLength={project.otherImages.length}
                />
                <RightButton
                  displayImageIndex={displayImageIndex}
                  setDisplayImageIndex={setDisplayImageIndex}
                  imagesArrayLength={project.otherImages.length}
                />
              </Box>
              <Box sx={{ position: "absolute", top: 0, right: 0 }}>
                <XCloseButton handleClose={handleClose} />
              </Box>
              <Stack
                spacing={2}
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{
                  paddingX: 4,
                  color: colors.chalk,
                  textShadow: "2px 2px 2px #000",
                }}
              >
                <Stack direction="row" spacing={4}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", textDecoration: "underline" }}
                  >
                    {project.name}
                  </Typography>
                  <Typography variant="overline" sx={{ paddingTop: 2 }}>
                    {project.date}
                  </Typography>
                </Stack>
                <Stack
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ height: "100%" }}
                >
                  <Typography variant="body1">{project.description}</Typography>
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "underline",
                        color: colors.base.lightest,
                      }}
                    >
                      {project.url}
                    </Link>
                  )}
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="flex-start"
                  >
                    {project.technologies.map((tech) => {
                      return (
                        <Box
                          key={`${project.name}-${tech}`}
                          sx={{
                            backgroundColor: "rgba(226, 241, 231, 0.5)",
                            borderRadius: "100px",
                            border: `1px solid ${colors.chalk}`,
                            padding: 1,
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              color: colors.chalk,
                              textShadow: `1px 1px 1px ${colors.charcoal}`,
                            }}
                          >
                            {tech}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        ) : (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "95%",
              height: "60%",
              backgroundColor: "rgb(98, 149, 132, 0.3)",
              borderRadius: "10px",
              border: `2px solid ${colors.charcoal}`,
              boxShadow: 24,
              overflow: "auto",
              padding: 1,
            }}
          >
            <Box sx={{ position: "absolute", top: 10, right: 0, zIndex: 10 }}>
              <XCloseButton handleClose={handleClose} />
            </Box>
            <Box
              sx={{
                position: "relative",
                display: "inline-block",
                width: "100%",
                height: "50%",
                backgroundColor: colors.chalk,
              }}
            >
              <Image
                src={project.otherImages[displayImageIndex]}
                alt={project.name}
                width={300}
                height={300}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  margin: "auto",
                }}
              />

              <LeftButton
                displayImageIndex={displayImageIndex}
                setDisplayImageIndex={setDisplayImageIndex}
                imagesArrayLength={project.otherImages.length}
              />
              <RightButton
                displayImageIndex={displayImageIndex}
                setDisplayImageIndex={setDisplayImageIndex}
                imagesArrayLength={project.otherImages.length}
              />
            </Box>
            <Stack
              spacing={2}
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{
                padding: "0.75em",
                color: colors.chalk,
                textShadow: "2px 2px 2px #000",
              }}
            >
              <Stack direction="row" spacing={4} sx={{ padding: "0.25em" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  {project.name}
                </Typography>
                <Typography
                  variant="overline"
                  sx={{ paddingTop: 2, whiteSpace: "nowrap" }}
                >
                  {project.date}
                </Typography>
              </Stack>
              <Stack
                spacing={2}
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Typography variant="body1">{project.description}</Typography>
                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "underline",
                      color: colors.base.lightest,
                    }}
                  >
                    {project.url}
                  </Link>
                )}
              </Stack>
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="flex-start"
              sx={{
                overflow: "auto",
              }}
            >
              {project.technologies.map((tech) => {
                return (
                  <Box
                    key={`${project.name}-${tech}`}
                    sx={{
                      backgroundColor: "rgba(226, 241, 231, 0.5)",
                      borderRadius: "100px",
                      border: `1px solid ${colors.chalk}`,
                      padding: 1,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: colors.chalk,
                        textShadow: `1px 1px 1px ${colors.charcoal}`,
                      }}
                    >
                      {tech}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        )}
      </Fade>
    </Modal>
  );
};
