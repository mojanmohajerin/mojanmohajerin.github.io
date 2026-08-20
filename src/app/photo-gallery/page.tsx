"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import Coding from "@/assets/not-found-page/coding.png";
import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";

export default function PhotoGalleryPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={Coding} alt="" height={300} width={300} />
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ paddingTop: 5 }}
      >
        <Typography variant="h3" sx={{ textShadow: "2px 2px 4px #000000" }}>
          {t.notFound.title}
        </Typography>
        <Typography variant="body1" sx={{ textShadow: "2px 2px 4px #000000" }}>
          {t.notFound.body}
        </Typography>
      </Stack>
    </Box>
  );
}
