import type { Metadata } from "next";
import { Geist, Geist_Mono, Satisfy } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bernadette Energy",
  description: "Bernadette Energy",
};

import Navbar from "@/components/common/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${satisfy.variable} h-full antialiased`}
    >
      <body className="min-h-full  flex flex-col ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
