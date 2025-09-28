import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/section/Header";
import { Toaster } from "sonner";
import Footer from "@/components/section/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Willy Octavianus",
  description:
    "Transforming businesses through strategic technology consulting and Industry 4.0 solutions, specializing in bridging complex technology with measurable business outcomes across international markets.", //descripiton
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Toaster richColors position="top-center" /> {/* <- WAJIB */}
        <Footer />
      </body>
    </html>
  );
}
