"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import { workExperience } from "@/data/workExperience";
import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { colors } from "@/styles/colors";

const servicePrograms = [
  {
    title: "Baha'i neighbourhood children's classes",
    titleJa: "バハイ近隣子どもクラス",
    timeframe: "2015 - Present",
    timeframeJa: "2015年 - 現在",
    description:
      "Classes that help children develop spiritual qualities such as kindness, truthfulness, generosity, and courage through stories, songs, prayer, memorisation, games, and acts of service.",
    descriptionJa:
      "物語、歌、祈り、暗唱、ゲーム、奉仕の実践を通して、親切、正直、寛大さ、勇気といった精神的な資質を子どもたちが育めるよう助けるクラスです。",
  },
  {
    title: "Junior Youth Spiritual Empowerment Program",
    titleJa: "ジュニアユース精神的エンパワーメントプログラム",
    timeframe: "2015 - Present",
    timeframeJa: "2015年 - 現在",
    description:
      "A community-building program for early adolescents that strengthens expression, moral reasoning, cooperation, and service-mindedness so participants can contribute to the wellbeing of their neighbourhoods.",
    descriptionJa:
      "思春期初期の若者を対象としたコミュニティづくりのプログラムで、表現力、道徳的な判断力、協力する力、奉仕の心を育み、参加者が地域の幸福に貢献できるよう支援します。",
  },
];

export const WorkExperience = () => {
  const { language } = useLanguage();
  const t = translations[language];

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
          {t.timeline.professionalTitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{ paddingLeft: "1rem", textShadow: "2px 2px 4px #000000" }}
        >
          {t.timeline.summary}
        </Typography>
      </Box>

      <Stack spacing={2.5} sx={{ px: { xs: 2, md: 8 } }}>
        {workExperience.map((experience) => {
          const isEducation = experience.type === "education";
          const isService = experience.type === "service";
          const company =
            language === "ja"
              ? experience.companyJa ?? experience.company
              : experience.company;
          const role =
            language === "ja" ? experience.roleJa ?? experience.role : experience.role;
          const location =
            language === "ja"
              ? experience.locationJa ?? experience.location
              : experience.location;
          const start =
            language === "ja" ? experience.startJa ?? experience.start : experience.start;
          const end =
            language === "ja" ? experience.endJa ?? experience.end : experience.end;
          const duration =
            language === "ja"
              ? experience.durationJa ?? experience.duration
              : experience.duration;
          const summary =
            language === "ja"
              ? experience.summaryJa ?? experience.summary
              : experience.summary;
          const skills =
            language === "ja" ? experience.skillsJa ?? experience.skills : experience.skills;
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
                    "& .logo-zoom": {
                      transform: "scale(1.65)",
                      transition: "transform 320ms ease",
                    },
                    "&:hover .logo-zoom": {
                      transform: "scale(1)",
                    },
                  }}
                >
                  {experience.image ? (
                    <Image
                      className="logo-zoom"
                      src={experience.image}
                      alt={company}
                      fill
                      sizes="60px"
                      style={{ objectFit: "contain", padding: 3 }}
                    />
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
                  {`${start} - ${end}`}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: colors.chalk,
                    lineHeight: 1.15,
                    textShadow: "2px 2px 4px #000000",
                  }}
                >
                  {duration}
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
                    {role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: colors.base.lightest, opacity: 0.88 }}
                  >
                    {`${company}, ${location}`}
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
                  {summary}
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
                  {t.timeline.skills}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
                  justifyContent={{ xs: "flex-start", md: "flex-end" }}
                >
                  {skills.length > 0 ? (
                    skills.map((skill) => (
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
                        {t.timeline.skillsToAdd}
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
            {language === "ja" ? "奉仕活動" : "Voluntary experience"}
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingLeft: "1rem", textShadow: "2px 2px 4px #000000" }}
          >
            {t.timeline.summary}
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
                  {language === "ja" ? program.timeframeJa : program.timeframe}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.chalk,
                    lineHeight: 1.15,
                    textShadow: "2px 2px 4px #000000",
                  }}
                >
                  {language === "ja" ? program.titleJa : program.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: colors.chalk,
                    lineHeight: 1.65,
                    textShadow: "1px 1px 2px #000000",
                  }}
                >
                  {language === "ja" ? program.descriptionJa : program.description}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
