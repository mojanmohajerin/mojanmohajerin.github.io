import { Drawer, Stack, Typography } from "@mui/material";

import { NavLink } from "@/components/nav-link";
import { paths } from "@/paths";
import { colors } from "@/styles/colors";

interface NavDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const NavDrawer = ({ open, setOpen }: NavDrawerProps) => {
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
          Navigation
        </Typography>
        <Stack
          className="drawer-background"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%", paddingTop: "2em" }}
        >
          <NavLink title="Home" href={paths.home} onClick={handleClose} />
          <NavLink
            title="Timeline"
            href={paths.experience}
            onClick={handleClose}
          />
          <NavLink
            title="Projects"
            href={paths.projects}
            onClick={handleClose}
          />
          <NavLink
            title="Photo Gallery"
            href={paths.photo_gallery}
            onClick={handleClose}
          />
          <NavLink title="Contact" href={paths.contact} onClick={handleClose} />
        </Stack>
      </Stack>
    </Drawer>
  );
};
