import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devindays.com"),
  title: {
    default: "DevInDays - Fast App Development for Founders",
    template: "%s | DevInDays",
  },
  description:
    "We build apps for founders. Fast, affordable, and without wasting time. Get a fully functional cross-platform app in 2–3 weeks starting at ₹40,000.",
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
    title: "DevInDays - Build Your MVP in 2–3 Weeks",
    description:
      "Fast, affordable app development for founders. Get a fully functional cross-platform app starting at ₹40,000. Clear scope, fixed timelines, full code ownership.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DevInDays - Fast App Development for Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevInDays - Build Your MVP in 2–3 Weeks",
    description:
      "Fast, affordable app development for founders. Get a fully functional cross-platform app starting at ₹40,000.",
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
  icons: {
    icon: [
      { url: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icons/icon-32.png"],
    other: [
      { rel: "mask-icon", url: "/logo.png", color: "#000000" },
    ],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "DevInDays",
    statusBarStyle: "default",
  },
  other: {
    "theme-color": "#000000",
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
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://app.posthog.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-gray-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <StructuredData />
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
