import type { Metadata } from "next";

import { Box } from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/home/footer";
import { Header } from "@/home/header";
import { colors } from "@/styles/colors";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mo",
  description: "Mojan Mohajerin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Box sx={{ height: "100%", position: "relative" }}>
          <Box className="background-image" />
          <Header />
          <Box
            sx={{
              color: colors.chalk,
              padding: "5rem",
            }}
          >
            {children}
          </Box>
          <Footer />
        </Box>
      </body>
    </html>
  );
}
