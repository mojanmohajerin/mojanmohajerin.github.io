import { colors } from "@/styles/colors";
import { Typography } from "@mui/material";
import Link from "next/link";

interface NavLinkProps {
  title: string;
  href: string;
}

export const NavLink = ({ title, href }: NavLinkProps) => {
  return (
    <Link href={href}>
      <Typography
        variant="h6"
        sx={{ color: colors.chalk, textDecoration: "underline" }}
      >
        {title}
      </Typography>
    </Link>
  );
};
