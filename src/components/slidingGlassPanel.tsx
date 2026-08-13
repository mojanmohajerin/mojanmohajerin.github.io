import { Box } from "@mui/material";

import { colors } from "@/styles/colors";

interface SlidingGlassPanelProps {
  offset: number;
  height: number;
  width: { xs: string; md: number };
  top?: number;
  yOffset?: number;
  rotate?: number;
  opacity?: number;
  accentSide?: "left" | "right" | "none";
  blur?: number;
}

export const SlidingGlassPanel = ({
  offset,
  height,
  width,
  top = -50,
  yOffset = 0,
  rotate = 0,
  opacity = 1,
  accentSide = "left",
  blur = 5,
}: SlidingGlassPanelProps) => (
  <Box
    sx={{
      position: "absolute",
      top,
      left: "50%",
      transform: `translate(calc(-50% + ${offset}px), ${yOffset}px) rotate(${rotate}deg)`,
      zIndex: 0,
      height,
      width,
      opacity,
      pointerEvents: "none",
      transition: "transform 0.1s",
      willChange: "transform",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(135deg, rgba(226, 241, 231, 0.24) 0%, rgba(98, 149, 132, 0.22) 46%, rgba(36, 54, 66, 0.2) 100%)",
        border: "1px solid rgba(226, 241, 231, 0.28)",
        boxShadow:
          "0 24px 70px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 254, 249, 0.2)",
        backdropFilter: `blur(${blur}px)`,
      }}
    />
    {accentSide === "none" ? null : (
      <Box
        sx={{
          position: "absolute",
          top: 18,
          bottom: 18,
          left: accentSide === "left" ? 18 : "auto",
          right: accentSide === "right" ? 18 : "auto",
          width: 3,
          borderRadius: "999px",
          background: `linear-gradient(180deg, rgba(189, 172, 106, 0) 0%, ${colors.gold} 18%, ${colors.gold} 82%, rgba(189, 172, 106, 0) 100%)`,
          boxShadow: `0 0 18px rgba(189, 172, 106, 0.38)`,
        }}
      />
    )}
    <Box
      sx={{
        position: "absolute",
        top: 18,
        left: "8%",
        right: "8%",
        height: 1,
        background:
          "linear-gradient(90deg, rgba(226, 241, 231, 0) 0%, rgba(226, 241, 231, 0.45) 50%, rgba(226, 241, 231, 0) 100%)",
      }}
    />
  </Box>
);
