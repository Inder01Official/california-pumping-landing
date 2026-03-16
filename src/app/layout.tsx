import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CPS | California Pumping & Sanitation - Septic Services",
  description: "Southern California's trusted septic service provider for over 35 years. 24/7 emergency septic pumping, grease trap cleaning, and hydro-jetting services. Licensed, bonded, and insured.",
  keywords: ["septic pumping", "grease trap cleaning", "hydro-jetting", "septic services", "California", "Los Angeles", "San Diego", "Orange County", "emergency septic", "septic tank"],
  authors: [{ name: "California Pumping & Sanitation" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "CPS | California Pumping & Sanitation",
    description: "Southern California's trusted septic service provider for over 35 years. 24/7 emergency service available.",
    url: "https://californiapumping.com",
    siteName: "California Pumping & Sanitation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPS | California Pumping & Sanitation",
    description: "Southern California's trusted septic service provider for over 35 years.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://californiapumping.com/wp-content/uploads/2022/12/LogoGADS2.png" />
        <link rel="apple-touch-icon" href="https://californiapumping.com/wp-content/uploads/2022/12/LogoGADS2.png" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}