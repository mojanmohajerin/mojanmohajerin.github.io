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
  const pathname = usePathname();
  const normalizedHref = href.replace(/^\./, "") || "/";
  const isActive = pathname === normalizedHref;

  return (
    <Button
      component={Link}
      href={href}
      onClick={onClick}
      disableElevation
      sx={{
        position: "relative",
        overflow: "hidden",
        minWidth: "auto",
        px: { xs: 1.7, md: 2 },
        py: 0.85,
        borderRadius: "999px",
        color: colors.chalk,
        backgroundColor: isActive
          ? "rgba(98, 149, 132, 0.34)"
          : "rgba(226, 241, 231, 0.08)",
        border: `1px solid ${
          isActive ? "rgba(226, 241, 231, 0.62)" : "rgba(226, 241, 231, 0.18)"
        }`,
        boxShadow: isActive
          ? "0 8px 24px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(226, 241, 231, 0.2)"
          : "inset 0 1px 0 rgba(226, 241, 231, 0.12)",
        textTransform: "none",
        transition:
          "transform 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
        "&::after": {
          content: '""',
          position: "absolute",
          left: "18%",
          right: "18%",
          bottom: 5,
          height: 2,
          borderRadius: "999px",
          backgroundColor: isActive ? colors.gold : "rgba(189, 172, 106, 0)",
          transform: isActive ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "center",
          transition: "transform 180ms ease, background-color 180ms ease",
        },
        "&:hover": {
          transform: "translateY(-2px)",
          backgroundColor: isActive
            ? "rgba(98, 149, 132, 0.44)"
            : "rgba(226, 241, 231, 0.16)",
          borderColor: "rgba(226, 241, 231, 0.58)",
          boxShadow:
            "0 10px 28px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(226, 241, 231, 0.22)",
          "&::after": {
            backgroundColor: colors.gold,
            transform: "scaleX(1)",
          },
        },
        "&:active": {
          transform: "translateY(0)",
          backgroundColor: "rgba(98, 149, 132, 0.52)",
          borderColor: "rgba(189, 172, 106, 0.82)",
          boxShadow:
            "0 4px 14px rgba(0, 0, 0, 0.22), inset 0 2px 8px rgba(0, 0, 0, 0.18)",
        },
        "&:focus-visible": {
          outline: `2px solid ${colors.gold}`,
          outlineOffset: 3,
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          position: "relative",
          zIndex: 1,
          textTransform: "none",
          fontWeight: isActive ? 700 : 600,
          letterSpacing: 0,
          textShadow: "1px 1px 1px #000000",
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};
