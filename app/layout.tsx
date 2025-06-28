import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevInDays - Fast App Development for Founders",
  description:
    "We build apps for founders. Fast, affordable, and without wasting time. Get a fully functional cross-platform app in 2–3 weeks starting at $799.",
  keywords: "app development, mobile app, startup, MVP, cross-platform, React Native, Flutter",
  authors: [{ name: "DevInDays" }],
  creator: "DevInDays",
  publisher: "DevInDays",
  icons: {
    icon: "/devindays-logo-final.png",
    shortcut: "/devindays-logo-final.png",
    apple: "/devindays-logo-final.png",
  },
  openGraph: {
    title: "DevInDays - Fast App Development for Founders",
    description: "We build apps for founders. Fast, affordable, and without wasting time.",
    url: "https://devindays.com",
    siteName: "DevInDays",
    images: [
      {
        url: "/devindays-logo-final.png",
        width: 1200,
        height: 630,
        alt: "DevInDays Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevInDays - Fast App Development for Founders",
    description: "We build apps for founders. Fast, affordable, and without wasting time.",
    images: ["/devindays-logo-final.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/devindays-logo-final.png" sizes="any" />
        <link rel="apple-touch-icon" href="/devindays-logo-final.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
