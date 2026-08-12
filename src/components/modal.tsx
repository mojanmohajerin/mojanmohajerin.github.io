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
            backgroundColor: "rgba(226, 241, 231, 0.92)",
            border: `1px solid rgba(36, 54, 66, 0.35)`,
            borderRadius: 2,
            boxShadow: "0 24px 80px rgba(0, 0, 0, 0.45)",
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
                backgroundColor: colors.charcoal,
                borderRadius: 1.5,
                overflow: "hidden",
                border: `1px solid rgba(36, 54, 66, 0.45)`,
              }}
            >
              <Image
                src={project.otherImages[displayImageIndex]}
                alt={project.name}
                fill
                sizes="(min-width: 900px) 900px, 94vw"
                style={{
                  objectFit: "contain",
                  padding: md ? 16 : 8,
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
                color: colors.charcoal,
                px: { xs: 0.5, md: 1 },
                pb: { xs: 0.5, md: 1 },
              }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 0.5, md: 2 }}
                alignItems={{ xs: "flex-start", md: "baseline" }}
              >
                <Typography variant={md ? "h4" : "h5"} sx={{ fontWeight: 700 }}>
                  {project.name}
                </Typography>
                <Typography variant="overline" sx={{ color: colors.base.dark }}>
                  {date}
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                sx={{ maxWidth: "72rem", lineHeight: 1.65 }}
              >
                {description}
              </Typography>
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: colors.base.dark,
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
                flexWrap="wrap"
                justifyContent="flex-start"
              >
                {project.technologies.map((tech) => {
                  return (
                    <Box
                      key={`${project.name}-${tech}`}
                      sx={{
                        backgroundColor: "rgba(98, 149, 132, 0.22)",
                        borderRadius: "999px",
                        border: `1px solid rgba(36, 54, 66, 0.28)`,
                        px: 1.25,
                        py: 0.5,
                      }}
                    >
                      <Typography variant="body2" sx={{ color: colors.charcoal }}>
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
