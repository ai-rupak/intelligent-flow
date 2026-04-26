import "./globals.css";
import type { Metadata } from "next";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageLoader } from "@/components/ui/PageLoader";
import { inter, jetBrainsMono, plusJakartaSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "CentricaSoft - Intelligence, Engineered.",
  description:
    "CentricaSoft builds AI Agents, GenAI platforms, and enterprise data infrastructure that scale without limits.",
  authors: [{ name: "CentricaSoft LLC" }],
  icons: {
    icon: "/assest/logo.webp",
    shortcut: "/assest/logo.webp",
    apple: "/assest/logo.webp",
  },
  openGraph: { type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700,800&display=swap"
        />
        <link rel="preload" href="/videos/hero-bg.mp4" as="video" type="video/mp4" />
      </head>
      <body>
        <SmoothScrollProvider>
          <PageLoader />
          <GrainOverlay />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
