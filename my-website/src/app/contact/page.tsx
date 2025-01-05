import { Box, Stack, Typography } from "@mui/material";

export default function ContactPage() {
  return (
    <Stack
      direction="column"
      spacing={35}
      sx={{ minHeight: "100vh", position: "relative" }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          transition: "left 0.1s",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -20,
            left: -80,
            height: 150,
            width: 500,
            background: `linear-gradient(90deg, rgba(98,149,132,1) 0%, rgba(0,212,255,0) 100%)`,
            opacity: 0.6,
            zIndex: -1,
          }}
        />
        <Typography
          variant="h3"
          sx={{ textShadow: "2px 2px 4px #000000", paddingTop: "1rem" }}
        >
          Contact Details
        </Typography>
      </Box>
      <Box>
        <Stack spacing={4} sx={{ paddingLeft: "25%", paddingTop: 5 }}>
          <Stack direction="row" spacing={1} sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: -2,
                left: -2,
                height: "100%",
                width: "50%",
                background: `linear-gradient(90deg, rgba(98,149,132,0) 0%, rgba(98,149,132,1) 50%, rgba(0,212,255,0) 100%)`,
                opacity: 0.6,
                padding: 3,
                zIndex: -1,
              }}
            />
            <Typography variant="h4" sx={{ textShadow: "1px 1px 2px #000000" }}>
              Email:
            </Typography>
            <Typography
              variant="h4"
              sx={{
                textShadow: "1px 1px 2px #000000",
                textDecoration: "underline",
              }}
            >
              mojan.mohajerin@gmail.com
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: -2,
                left: -2,
                height: "100%",
                width: "50%",
                background: `linear-gradient(90deg, rgba(98,149,132,0) 0%, rgba(98,149,132,1) 50%, rgba(0,212,255,0) 100%)`,
                opacity: 0.6,
                padding: 3,
                zIndex: -1,
              }}
            />
            <Typography variant="h4" sx={{ textShadow: "1px 1px 2px #000000" }}>
              Location:
            </Typography>
            <Typography variant="h4" sx={{ textShadow: "1px 1px 2px #000000" }}>
              Fukuoka, Japan
            </Typography>
          </Stack>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", paddingTop: 15 }}
        >
          <Typography variant="h4" sx={{ textShadow: "1px 1px 2px #000000" }}>
            Feel free to reach out to me for any inquiries or just to say hi!
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
