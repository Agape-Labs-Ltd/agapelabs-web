import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agape Labs — Tools for the Church, made with love",
  description: "A small studio building thoughtful, reverent technology for believers worldwide. Spreading God's love through tech.",
  keywords: ["Agape Labs", "Christian tech", "tech with purpose", "love through technology"],
  authors: [{ name: "Agape Labs Team" }],
  creator: "Agape Labs Ltd",
  icons: {
    icon: '/images/agape-labs-logo.svg',
    apple: '/images/agape-labs-logo.svg',
  },
  openGraph: {
    title: "Agape Labs — Tools for the Church, made with love",
    description: "A small studio building thoughtful, reverent technology for believers worldwide.",
    url: "https://agapelabs.co.uk",
    siteName: "Agape Labs",
    images: [{ url: '/images/twitter-card.png', width: 1200, height: 630, alt: "Agape Labs" }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agape Labs — Tools for the Church, made with love",
    description: "Spreading God's love through technology.",
    images: ['/images/twitter-card.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;450;500;600&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
