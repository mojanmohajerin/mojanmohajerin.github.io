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

import { useLanguage } from "@/i18n/language";
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
    descriptionJa?: string;
    date: string;
    dateJa?: string;
    technologies: string[];
    url?: string;
  };
}

export const ProjectModal = ({ open, setOpen, project }: ProjectModalProps) => {
  const md = useMediaQuery("(min-width:900px)");
  const { language } = useLanguage();
  const description =
    language === "ja" ? project.descriptionJa ?? project.description : project.description;
  const date = language === "ja" ? project.dateJa ?? project.date : project.date;

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
          sx: {
            backgroundColor: "rgba(10, 18, 22, 0.74)",
            backdropFilter: "blur(3px)",
          },
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "94vw", md: "min(1040px, 90vw)" },
            maxHeight: "88vh",
            background:
              "linear-gradient(145deg, rgba(36, 54, 66, 0.88) 0%, rgba(56, 116, 120, 0.7) 58%, rgba(36, 54, 66, 0.86) 100%)",
            border: `1px solid rgba(226, 241, 231, 0.22)`,
            borderRadius: 3,
            boxShadow:
              "0 30px 90px rgba(0, 0, 0, 0.58), inset 0 1px 0 rgba(255, 254, 249, 0.18)",
            backdropFilter: "blur(12px)",
            overflow: "auto",
            p: { xs: 1.25, md: 2 },
          }}
        >
          <Box sx={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}>
            <XCloseButton handleClose={handleClose} />
          </Box>
          <Stack spacing={2}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "36vh", md: "min(52vh, 520px)" },
                minHeight: { xs: 220, md: 360 },
                backgroundColor: "rgba(20, 29, 35, 0.84)",
                borderRadius: 2,
                overflow: "hidden",
                border: `1px solid rgba(226, 241, 231, 0.2)`,
                boxShadow:
                  "0 18px 50px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 254, 249, 0.12)",
              }}
            >
              <Image
                src={project.otherImages[displayImageIndex]}
                alt=""
                fill
                sizes="(min-width: 900px) 900px, 94vw"
                aria-hidden="true"
                style={{
                  objectFit: "cover",
                  transform: "scale(1.18)",
                  filter: "blur(18px)",
                  opacity: 0.28,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(20, 29, 35, 0.42), rgba(20, 29, 35, 0.16))",
                  zIndex: 1,
                }}
              />
              <Image
                src={project.otherImages[displayImageIndex]}
                alt={project.name}
                fill
                sizes="(min-width: 900px) 900px, 94vw"
                style={{
                  objectFit: "contain",
                  padding: md ? 16 : 8,
                  zIndex: 2,
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
              <Typography
                variant="caption"
                sx={{
                  position: "absolute",
                  right: 16,
                  bottom: 10,
                  zIndex: 3,
                  color: colors.chalk,
                  backgroundColor: "rgba(0, 0, 0, 0.45)",
                  borderRadius: "999px",
                  px: 1,
                  py: 0.25,
                  textShadow: "none",
                }}
              >
                {`${displayImageIndex + 1} / ${project.otherImages.length}`}
              </Typography>
            </Box>
            <Stack
              spacing={1.5}
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{
                color: colors.chalk,
                px: { xs: 0.5, md: 1 },
                pb: { xs: 0.5, md: 1 },
              }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 0.5, md: 2 }}
                alignItems={{ xs: "flex-start", md: "baseline" }}
              >
                <Typography
                  variant={md ? "h4" : "h5"}
                  sx={{ fontWeight: 700, textShadow: "1px 1px 2px #000000" }}
                >
                  {project.name}
                </Typography>
                <Typography
                  variant="overline"
                  sx={{
                    color: colors.gold,
                    textShadow: "1px 1px 2px #000000",
                  }}
                >
                  {date}
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: "72rem",
                  lineHeight: 1.65,
                  color: colors.base.lightest,
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.55)",
                }}
              >
                {description}
              </Typography>
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: colors.gold,
                    fontWeight: 700,
                    overflowWrap: "anywhere",
                  }}
                >
                  {project.url}
                </Link>
              )}
              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                flexWrap="nowrap"
                justifyContent="flex-start"
                sx={{ minWidth: 0, maxWidth: "100%", overflow: "hidden" }}
              >
                {project.technologies.map((tech, index) => {
                  const isLastTech = index === project.technologies.length - 1;

                  return (
                    <Box
                      key={`${project.name}-${tech}`}
                      sx={{
                        minWidth: 0,
                        flex: isLastTech ? "0 1 auto" : "0 0 auto",
                        backgroundColor: "rgba(226, 241, 231, 0.14)",
                        borderRadius: "999px",
                        border: `1px solid rgba(226, 241, 231, 0.28)`,
                        px: 1.25,
                        py: 0.5,
                        boxShadow: "inset 0 1px 0 rgba(255, 254, 249, 0.1)",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: colors.chalk,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
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
        </Box>
      </Fade>
    </Modal>
  );
};
