import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { colors } from "@/styles/colors";

interface NavLinkProps {
  title: string;
  href: string;
}

export const NavLink = ({ title, href }: NavLinkProps) => {
  const params = usePathname();

  return (
    <Link href={href} passHref>
      <Button
        href={href}
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
            fontWeight: params === href ? "bold" : "normal",
            textShadow: "1px 1px 1px #000000",
          }}
        >
          {title}
        </Typography>
      </Button>
    </Link>
  );
};
