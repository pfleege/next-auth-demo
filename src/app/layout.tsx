import type { Metadata } from "next";
import { Geist, Roboto, Rubik_Glitch, Special_Elite } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footnote from "./components/Footnote";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
});

const rubicGlitch = Rubik_Glitch({
  variable: "--font-rubik-glitch",
  subsets: ["latin"],
  weight: "400",
});

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-special-elite",
});

export const metadata: Metadata = {
  title: "NextAuth Demo",
  description: "Demo of NextAuth using OAuth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${roboto.variable} ${rubicGlitch.variable} ${specialElite.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footnote />
      </body>
    </html>
  );
}
