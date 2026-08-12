import type { Metadata } from "next";

import { Box } from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/home/footer";
import { Header } from "@/home/header";
import { LanguageProvider } from "@/i18n/language";
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
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <LanguageProvider>
          <Box className="background-image" />
          <Header />
          <Box
            sx={{
              maxWidth: "1500px",
              marginInline: "auto",
              overflow: "hidden",
              width: "100%",
              flex: "1 0 auto",
            }}
          >
            <Box
              sx={{
                color: colors.chalk,
                padding: "5rem 0",
              }}
            >
              {children}
            </Box>
          </Box>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
