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
    <Stack spacing={10}>
      <Title title={t.pages.contactTitle} />
      <Stack spacing={10} sx={{ padding: "5rem" }}>
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
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ color: colors.base.lightest, width: "100%" }}
        >
          <Typography variant="h5" sx={{ textShadow: "1px 1px 1px #000" }}>
            {t.contact.direct}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textShadow: "1px 1px 1px #000",
              textDecoration: "underline",
            }}
          >
            mojan.mohajerin@gmail.com
          </Typography>
          <Typography
            variant="h5"
            sx={{ textShadow: "1px 1px 1px #000", paddingTop: "1em" }}
          >
            {t.contact.feelFree}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
