import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevInDays - Fast App Development for Founders",
  description: "We build apps for founders. Fast, affordable, and without wasting time. Get a fully functional cross-platform app in 2–3 weeks starting at ₹40,000.",
  keywords: ["app development", "MVP development", "mobile app", "iOS app", "Android app", "founder", "startup", "app builder", "India"],
  authors: [{ name: "DevInDays" }],
  creator: "DevInDays",
  publisher: "DevInDays",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://devindays.com",
    siteName: "DevInDays",
    title: "DevInDays - Fast App Development for Founders",
    description: "Build your MVP in 2–3 weeks starting at ₹40,000. Fast, affordable app development for founders.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevInDays - Fast App Development for Founders",
    description: "Build your MVP in 2–3 weeks starting at ₹40,000. Fast, affordable app development for founders.",
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
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
