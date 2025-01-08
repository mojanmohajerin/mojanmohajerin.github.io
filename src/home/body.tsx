import { BitAboutMe } from "@/sections/bitAboutMe";
import { Intro } from "@/sections/intro";
import { SomethingElse } from "@/sections/somethingElse";
import { Stack } from "@mui/material";

export const Body = () => {
  return (
    <Stack spacing={30} sx={{ paddingBottom: "15rem" }}>
      <Intro />
      <BitAboutMe />
      <SomethingElse />
    </Stack>
  );
};
