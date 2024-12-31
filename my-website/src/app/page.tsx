import { Box } from "@mui/material";
import { Header } from "@/home/header";
import { Body } from "@/home/body";
import { Footer } from "@/home/footer";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100svh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Body />
      <Footer />
    </Box>
  );
}
