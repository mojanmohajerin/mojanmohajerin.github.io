import { BitAboutMe } from "@/sections/bitAboutMe";
import { Intro } from "@/sections/intro";
import { SomethingElse } from "@/sections/somethingElse";
import { Stack } from "@mui/material";

export const Body = () => {
  return (
    <Stack direction="column" spacing={30} sx={{ paddingBottom: 30 }}>
      <Intro />
      <BitAboutMe />
      <SomethingElse />
    </Stack>
  );
};
