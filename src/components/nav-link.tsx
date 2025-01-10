import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { colors } from "@/styles/colors";

interface NavLinkProps {
  title: string;
  href: string;
  onClick?: () => void;
}

export const NavLink = ({ title, href, onClick }: NavLinkProps) => {
  const params = usePathname();

  return (
    <Button
      component={Link}
      href={href}
      onClick={onClick}
      sx={{
        transition: "transform 0.3s",
        borderRadius: "50%",
        color: colors.chalk,
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textTransform: "capitalize",
          fontWeight: params === href.slice(1) ? "bold" : "normal",
          textShadow: "1px 1px 1px #000000",
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};
