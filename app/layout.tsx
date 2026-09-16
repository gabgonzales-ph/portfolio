import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { SwipeProvider } from "@/context/theme-swipe-context";
import BottomFade from "@/components/bottom-fade";
import TopScrollBlur from "@/components/top-scroll-blur";
import TestButton from "@/components/test";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <SwipeProvider>
          <TopScrollBlur />
          {children}
          <BottomFade />
          <Navbar />

        </SwipeProvider>
      </body>
    </html>
  );
}