import { Drawer, Stack, Typography } from "@mui/material";

import { LanguageButton } from "@/components/language-button";
import { NavLink } from "@/components/nav-link";
import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { paths } from "@/paths";
import { colors } from "@/styles/colors";

interface NavDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const NavDrawer = ({ open, setOpen }: NavDrawerProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
          width: "200px",
        },
      }}
    >
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        sx={{ paddingTop: "3em" }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textDecoration: "underline",
            textShadow: "1px 1px 1px #000000",
            color: colors.base.lightest,
          }}
        >
          {t.nav.navigation}
        </Typography>
        <Stack
          className="drawer-background"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%", paddingTop: "2em" }}
        >
          <LanguageButton />
          <NavLink title={t.nav.home} href={paths.home} onClick={handleClose} />
          <NavLink
            title={t.nav.timeline}
            href={paths.experience}
            onClick={handleClose}
          />
          <NavLink
            title={t.nav.projects}
            href={paths.projects}
            onClick={handleClose}
          />
          <NavLink
            title={t.nav.photoGallery}
            href={paths.photo_gallery}
            onClick={handleClose}
          />
          <NavLink
            title={t.nav.contact}
            href={paths.contact}
            onClick={handleClose}
          />
        </Stack>
      </Stack>
    </Drawer>
  );
};
