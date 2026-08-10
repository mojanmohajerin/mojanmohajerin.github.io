"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import { workExperience } from "@/data/workExperience";
import { colors } from "@/styles/colors";

const servicePrograms = [
  {
    title: "Baha'i neighbourhood children's classes",
    timeframe: "2015 - Present",
    description:
      "Classes that help children develop spiritual qualities such as kindness, truthfulness, generosity, and courage through stories, songs, prayer, memorisation, games, and acts of service.",
  },
  {
    title: "Junior Youth Spiritual Empowerment Program",
    timeframe: "2015 - Present",
    description:
      "A community-building program for early adolescents that strengthens expression, moral reasoning, cooperation, and service-mindedness so participants can contribute to the wellbeing of their neighbourhoods.",
  },
];

export const WorkExperience = () => {
  const scrollToService = () => {
    document
      .getElementById("bahai-service")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box
      component="section"
      sx={{
        mt: { xs: 10, md: 16 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(98,149,132,0.58) 0%, rgba(98,149,132,0.18) 42%, rgba(0,212,255,0) 100%)",
          width: { xs: "100%", md: "50%" },
          zIndex: -1,
          paddingTop: "1rem",
          paddingLeft: { xs: "1.5rem", md: "2rem" },
          paddingBottom: "4rem",
          mb: { xs: 4, md: 6 },
        }}
      >
        <Typography
          variant="h3"
          sx={{ textShadow: "2px 2px 4px #000000", paddingTop: "1rem" }}
        >
          Professional experience
        </Typography>
        <Typography
          variant="body1"
          sx={{ paddingLeft: "1rem", textShadow: "2px 2px 4px #000000" }}
        >
          (in a nutshell)
        </Typography>
      </Box>

      <Stack spacing={2.5} sx={{ px: { xs: 2, md: 8 } }}>
        {workExperience.map((experience) => {
          const isEducation = experience.type === "education";
          const isService = experience.type === "service";
          const cardTone = isService
            ? {
              background: "rgba(45, 58, 62, 0.58)",
              border: "rgba(226, 241, 231, 0.34)",
              shadow: "0 12px 30px rgba(0, 0, 0, 0.16)",
              skillBackground: "rgba(226, 241, 231, 0.14)",
            }
            : isEducation
              ? {
                background: "rgba(68, 54, 86, 0.84)",
                border: "rgba(214, 184, 104, 0.82)",
                shadow: "0 14px 34px rgba(32, 18, 50, 0.26)",
                skillBackground: "rgba(214, 184, 104, 0.24)",
              }
              : {
                background: "rgba(36, 54, 66, 0.82)",
                border: "rgba(98, 149, 132, 0.85)",
                shadow: "0 14px 34px rgba(0, 0, 0, 0.22)",
                skillBackground: "rgba(98, 149, 132, 0.32)",
              };

          return (
            <Box
              component={isService ? "button" : "article"}
              onClick={isService ? scrollToService : undefined}
              key={`${experience.company}-${experience.start}`}
              sx={{
                appearance: "none",
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "minmax(9rem, 0.32fr) minmax(0, 1fr) minmax(12rem, 0.42fr)",
                },
                gap: { xs: 1.5, md: 3 },
                p: { xs: 2, md: 2.5 },
                width: "100%",
                color: "inherit",
                font: "inherit",
                textAlign: "left",
                backgroundColor: cardTone.background,
                border: `1px solid ${cardTone.border}`,
                borderRadius: 2,
                boxShadow: cardTone.shadow,
                cursor: isService ? "pointer" : "default",
                opacity: isService ? 0.88 : 1,
                transition:
                  "transform 180ms ease, opacity 180ms ease, border-color 180ms ease",
                "&:hover": isService
                  ? {
                    opacity: 1,
                    transform: "translateY(-2px)",
                    borderColor: "rgba(226, 241, 231, 0.58)",
                  }
                  : undefined,
              }}
            >
              <Stack spacing={1.25} alignItems="flex-start">
                <Box
                  sx={{
                    position: "relative",
                    width: 60,
                    height: 60,
                    flexShrink: 0,
                    borderRadius: 1.5,
                    overflow: "hidden",
                    backgroundColor: colors.chalk,
                    border: `1px solid rgba(226, 241, 231, 0.55)`,
                    "& .logo-cover": {
                      opacity: 1,
                      transform: "scale(1)",
                    },
                    "& .logo-full": {
                      opacity: 0,
                      transform: "scale(0.94)",
                    },
                    "& .logo-cover, & .logo-full": {
                      transition:
                        "opacity 240ms ease, transform 240ms ease",
                    },
                    "&:hover .logo-cover": {
                      opacity: 0,
                      transform: "scale(1.08)",
                    },
                    "&:hover .logo-full": {
                      opacity: 1,
                      transform: "scale(1)",
                    },
                  }}
                >
                  {experience.image ? (
                    <>
                      <Image
                        className="logo-cover"
                        src={experience.image}
                        alt={experience.company}
                        fill
                        sizes="60px"
                        style={{ objectFit: "cover" }}
                      />
                      <Image
                        className="logo-full"
                        src={experience.image}
                        alt=""
                        fill
                        sizes="60px"
                        style={{ objectFit: "contain", padding: 3 }}
                      />
                    </>
                  ) : (
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{ width: "100%", height: "100%" }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: colors.base.dark,
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                      >
                        Baha'i
                      </Typography>
                    </Stack>
                  )}
                </Box>
                <Typography
                  variant="overline"
                  sx={{
                    color: colors.gold,
                    lineHeight: 1.1,
                    textShadow: "1px 1px 2px #000",
                  }}
                >
                  {`${experience.start} - ${experience.end}`}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: colors.chalk,
                    lineHeight: 1.15,
                    textShadow: "2px 2px 4px #000000",
                  }}
                >
                  {experience.duration}
                </Typography>
              </Stack>

              <Stack spacing={1.5}>
                <Stack spacing={0.35} sx={{ minWidth: 0 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: colors.chalk,
                      lineHeight: 1.15,
                      textShadow: "2px 2px 4px #000000",
                    }}
                  >
                    {experience.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: colors.base.lightest, opacity: 0.88 }}
                  >
                    {`${experience.company}, ${experience.location}`}
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  sx={{
                    color: colors.chalk,
                    lineHeight: 1.55,
                    textShadow: "1px 1px 2px #000000",
                  }}
                >
                  {experience.summary}
                </Typography>
              </Stack>

              <Stack
                spacing={1}
                alignItems={{ xs: "flex-start", md: "flex-end" }}
                sx={{
                  borderLeft: {
                    xs: "none",
                    md: `1px solid rgba(226, 241, 231, 0.18)`,
                  },
                  pl: { xs: 0, md: 3 },
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: colors.base.lightest,
                    lineHeight: 1.1,
                    opacity: 0.82,
                    textShadow: "1px 1px 2px #000",
                  }}
                >
                  Skills
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
                  justifyContent={{ xs: "flex-start", md: "flex-end" }}
                >
                  {experience.skills.length > 0 ? (
                    experience.skills.map((skill) => (
                      <Box
                        key={`${experience.company}-${skill}`}
                        sx={{
                          border: `1px solid rgba(226, 241, 231, 0.42)`,
                          backgroundColor: cardTone.skillBackground,
                          borderRadius: "999px",
                          px: 1.25,
                          py: 0.45,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: colors.chalk }}>
                          {skill}
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Box
                      sx={{
                        border: `1px dashed rgba(226, 241, 231, 0.5)`,
                        borderRadius: "999px",
                        px: 1.25,
                        py: 0.45,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{ color: colors.base.lightest, opacity: 0.78 }}
                      >
                        Skills to add
                      </Typography>
                    </Box>
                  )}
                </Stack>
              </Stack>
            </Box>
          );
        })}
      </Stack>

      <Box
        id="bahai-service"
        component="section"
        sx={{
          mt: { xs: 10, md: 14 },
          scrollMarginTop: { xs: "2rem", md: "4rem" },
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(90deg, rgba(214,184,104,0.42) 0%, rgba(98,149,132,0.2) 48%, rgba(0,212,255,0) 100%)",
            width: { xs: "100%", md: "50%" },
            paddingTop: "1rem",
            paddingLeft: { xs: "1.5rem", md: "2rem" },
            paddingBottom: "3.5rem",
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            variant="h3"
            sx={{ textShadow: "2px 2px 4px #000000", paddingTop: "1rem" }}
          >
            Voluntary experience
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingLeft: "1rem", textShadow: "2px 2px 4px #000000" }}
          >
            (in a nutshell)
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2.5}
          sx={{ px: { xs: 2, md: 8 } }}
        >
          {servicePrograms.map((program) => (
            <Box
              key={program.title}
              component="article"
              sx={{
                flex: 1,
                p: { xs: 2.25, md: 3 },
                backgroundColor: "rgba(45, 58, 62, 0.76)",
                border: "1px solid rgba(214, 184, 104, 0.58)",
                borderRadius: 2,
                boxShadow: "0 14px 34px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Stack spacing={1.5}>
                <Typography
                  variant="overline"
                  sx={{
                    color: colors.gold,
                    lineHeight: 1.1,
                    textShadow: "1px 1px 2px #000",
                  }}
                >
                  {program.timeframe}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.chalk,
                    lineHeight: 1.15,
                    textShadow: "2px 2px 4px #000000",
                  }}
                >
                  {program.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: colors.chalk,
                    lineHeight: 1.65,
                    textShadow: "1px 1px 2px #000000",
                  }}
                >
                  {program.description}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
