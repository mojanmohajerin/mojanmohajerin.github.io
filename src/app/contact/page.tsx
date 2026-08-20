"use client";

import { Box, Stack, Typography } from "@mui/material";

import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { ContactMe } from "@/sections/contactMe";
import { Title } from "@/sections/title";
import { colors } from "@/styles/colors";

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Stack spacing={8}>
      <Title title={t.pages.contactTitle} />
      <Stack spacing={5} sx={{ px: { xs: 2, md: "5rem" }, pb: { xs: 6, md: 10 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ContactMe />
        </Box>
        <Stack
          spacing={1.25}
          justifyContent="center"
          alignItems="center"
          sx={{
            alignSelf: "center",
            color: colors.base.lightest,
            width: "min(100%, 720px)",
            px: { xs: 2, md: 3 },
            py: 2.25,
            borderRadius: 2,
            border: "1px solid rgba(226, 241, 231, 0.16)",
            background:
              "linear-gradient(135deg, rgba(36, 54, 66, 0.52), rgba(56, 116, 120, 0.24))",
            boxShadow:
              "0 14px 34px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 254, 249, 0.1)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Typography
            variant="body1"
            sx={{ textAlign: "center", textShadow: "1px 1px 1px #000" }}
          >
            {t.contact.direct}
          </Typography>
          <Box
            component="a"
            href="mailto:mojan.mohajerin@gmail.com"
            sx={{
              color: colors.gold,
              fontSize: { xs: "1rem", md: "1.18rem" },
              fontWeight: 700,
              textDecoration: "underline",
              textUnderlineOffset: 4,
              textShadow: "1px 1px 2px #000",
              transition: "color 180ms ease",
              "&:hover": {
                color: colors.chalk,
              },
            }}
          >
            mojan.mohajerin@gmail.com
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: colors.chalk,
              opacity: 0.88,
              textAlign: "center",
              textShadow: "1px 1px 1px #000",
              pt: 0.5,
            }}
          >
            {t.contact.feelFree}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
