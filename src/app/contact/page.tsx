import { Box, Stack, Typography } from "@mui/material";

import { ContactMe } from "@/sections/contactMe";
import { Title } from "@/sections/title";
import { colors } from "@/styles/colors";

export default function ContactPage() {
  return (
    <Stack spacing={10}>
      <Title title="Contact" />
      <Stack spacing={10} sx={{ padding: "5rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ContactMe />
        </Box>
        <Stack
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ color: colors.base.darkest }}
        >
          <Stack spacing={1} justifyContent="center" alignItems="center">
            <Typography variant="h5" sx={{ textShadow: "1px 1px 1px #000" }}>
              *Or you can contact me directly with one of the social media links
              below, or at:
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textShadow: "1px 1px 1px #000",
                textDecoration: "underline",
              }}
            >
              mojan.mohajerin@gmail.com
            </Typography>
          </Stack>
          <Typography variant="h5" sx={{ textShadow: "1px 1px 1px #000" }}>
            Feel free to reach out for any inquiries or just to say hi!
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
