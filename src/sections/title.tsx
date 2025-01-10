import { Box, Typography } from "@mui/material";

interface TitleProps {
  title: string;
  additionalText?: string;
}

export const Title = ({ title, additionalText }: TitleProps) => {
  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, rgba(98,149,132,0.6) 0%, rgba(0,212,255,0) 80%)`,
        width: "50%",
        zIndex: -1,
        paddingTop: "1rem",
        paddingLeft: "2rem",
        paddingBottom: "4rem",
        marginBottom: "10rem",
      }}
    >
      <Typography
        variant="h3"
        sx={{ textShadow: "2px 2px 4px #000000", paddingTop: "1rem" }}
      >
        {title}
      </Typography>
      {additionalText ? (
        <Typography
          variant="body1"
          sx={{ paddingLeft: "1rem", textShadow: "2px 2px 4px #000000" }}
        >
          {additionalText}
        </Typography>
      ) : null}
    </Box>
  );
};
