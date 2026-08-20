import { BitAboutMe } from "@/sections/bitAboutMe";
import { Intro } from "@/sections/intro";
import { SomethingElse } from "@/sections/somethingElse";
import { Stack } from "@mui/material";

export const Body = () => {
  return (
    <Stack spacing={{ xs: 14, md: 30 }} sx={{ paddingBottom: { xs: "8rem", md: "15rem" } }}>
      <Intro />
      <BitAboutMe />
      <SomethingElse />
    </Stack>
  );
};
