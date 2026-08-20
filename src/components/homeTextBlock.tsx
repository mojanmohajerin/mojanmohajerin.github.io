import { Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

import { colors } from "@/styles/colors";

interface HomeTextBlockProps {
  title?: ReactNode;
  children: ReactNode;
}

export const HomeTextBlock = ({ title, children }: HomeTextBlockProps) => (
  <Stack
    spacing={{ xs: 2, md: 3 }}
    sx={{
      zIndex: 1,
      maxWidth: "62rem",
      pl: { xs: 2.25, md: 3 },
      borderLeft: `3px solid ${colors.gold}`,
      boxShadow: `inset 8px 0 18px -18px ${colors.gold}`,
    }}
  >
    {title ? (
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "3.15rem", sm: "3.8rem", md: "3.75rem" },
          lineHeight: 1.04,
          textShadow: "2px 2px 5px #000000",
        }}
      >
        {title}
      </Typography>
    ) : null}
    <Stack spacing={{ xs: 1.5, md: 2.25 }}>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <Typography
            key={index}
            variant="h4"
            sx={{
              fontSize: { xs: "1.65rem", sm: "1.95rem", md: "2.125rem" },
              lineHeight: 1.32,
              textShadow: "2px 2px 5px #000000",
              overflowWrap: "anywhere",
            }}
          >
            {child}
          </Typography>
        ))
      ) : (
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.65rem", sm: "1.95rem", md: "2.125rem" },
            lineHeight: 1.32,
            textShadow: "2px 2px 5px #000000",
            overflowWrap: "anywhere",
          }}
        >
          {children}
        </Typography>
      )}
    </Stack>
  </Stack>
);
