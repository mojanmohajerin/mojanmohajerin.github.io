"use client";

import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { Title } from "@/sections/title";

export const ExperiencePageTitle = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Title
      title={t.pages.timelineTitle}
      additionalText={t.pages.timelineSubtitle}
      bottomSpacing="0"
    />
  );
};
