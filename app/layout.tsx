import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AnalyticsInit } from "@/components/analytics-init";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
  weight: ["300", "400"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://devindays.com"),
  title: {
    default: "DevInDays - Build your MVP",
    template: "%s | DevInDays",
  },
  description:
    "We build apps for founders. Fast, affordable, and without wasting time. Get a fully functional cross-platform app in 2-3 weeks.",
  keywords: [
    "app development",
    "MVP development",
    "mobile app",
    "iOS app",
    "Android app",
    "founder",
    "startup",
    "app builder",
    "India",
    "Flutter development",
    "cross-platform app",
  ],
  authors: [{ name: "DevInDays", url: "https://devindays.com" }],
  creator: "DevInDays",
  publisher: "DevInDays",
  category: "technology",
  alternates: {
    canonical: "https://devindays.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://devindays.com",
    siteName: "DevInDays",
    title: "DevInDays - Build Your MVP in 2-3 Weeks",
    description:
      "Fast, affordable app development for founders. Get a fully functional cross-platform app. Clear scope, fixed timelines, full code ownership.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DevInDays - Build your MVP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevInDays - Build Your MVP in 2-3 Weeks",
    description:
      "Fast, affordable app development for founders. Get a fully functional cross-platform app.",
    images: ["/twitter-image"],
    creator: "@devindays",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "DevInDays",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link
          rel="preload"
          href="/fonts/geist-lcp.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-gray-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <StructuredData />
        {children}
        <AnalyticsInit />
      </body>
    </html>
  );
}
