import { Box, Typography } from "@mui/material";

import { colors } from "@/styles/colors";

interface TitleProps {
  title: string;
  additionalText?: string;
  bottomSpacing?: string | { xs?: string; md?: string };
}

export const Title = ({
  title,
  additionalText,
  bottomSpacing = "10rem",
}: TitleProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "calc(100% - 2rem)", md: "min(760px, 58%)" },
        ml: { xs: 1.5, md: 0 },
        pl: { xs: 2.25, md: 3.5 },
        pr: { xs: 2.25, md: 6 },
        pt: { xs: 2.25, md: 2.75 },
        pb: { xs: 2.75, md: 3.25 },
        marginBottom: bottomSpacing,
        overflow: "hidden",
        borderRadius: "0 12px 12px 0",
        background: "transparent",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 16,
          bottom: 16,
          left: 0,
          width: 4,
          zIndex: 1,
          borderRadius: "0 999px 999px 0",
          background: `linear-gradient(180deg, rgba(189, 172, 106, 0) 0%, ${colors.gold} 20%, ${colors.gold} 80%, rgba(189, 172, 106, 0) 100%)`,
          boxShadow: `0 0 20px rgba(189, 172, 106, 0.42)`,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: 0,
          border: `1px solid rgba(226, 241, 231, 0.14)`,
          borderLeft: "none",
          borderRadius: "0 12px 12px 0",
          background:
            "radial-gradient(circle at 16% 28%, rgba(226, 241, 231, 0.22) 0%, rgba(226, 241, 231, 0.08) 24%, transparent 48%), radial-gradient(circle at 70% 62%, rgba(98, 149, 132, 0.24) 0%, rgba(98, 149, 132, 0.08) 26%, transparent 54%), radial-gradient(circle at 38% 100%, rgba(189, 172, 106, 0.16) 0%, transparent 42%), linear-gradient(135deg, rgba(36, 54, 66, 0.68) 0%, rgba(56, 116, 120, 0.44) 46%, rgba(36, 54, 66, 0.08) 100%)",
          boxShadow:
            "0 18px 46px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 254, 249, 0.12)",
          backdropFilter: "blur(10px)",
          maskImage:
            "linear-gradient(90deg, black 0%, black 58%, transparent 100%), linear-gradient(180deg, transparent 0%, black 18%, black 82%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskImage:
            "linear-gradient(90deg, black 0%, black 58%, transparent 100%), linear-gradient(180deg, transparent 0%, black 18%, black 82%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "10%",
          right: "16%",
          bottom: 18,
          height: 1,
          zIndex: 1,
          background:
            "linear-gradient(90deg, rgba(226, 241, 231, 0) 0%, rgba(226, 241, 231, 0.3) 45%, rgba(226, 241, 231, 0) 100%)",
        }}
      />
      <Typography
        variant="h3"
        sx={{
          position: "relative",
          zIndex: 2,
          lineHeight: 1.05,
          textShadow: "2px 2px 5px #000000",
        }}
      >
        {title}
      </Typography>
      {additionalText ? (
        <Typography
          variant="body1"
          sx={{
            position: "relative",
            zIndex: 2,
            mt: 0.75,
            paddingLeft: "1rem",
            color: colors.base.lightest,
            textShadow: "1px 1px 3px #000000",
          }}
        >
          {additionalText}
        </Typography>
      ) : null}
    </Box>
  );
};
