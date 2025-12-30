import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Agape Labs Ltd | Spreading God's Love Through Tech",
  description: "Agape Labs Ltd is dedicated to spreading God's love through innovative technology solutions.",
  keywords: ["Agape Labs", "Christian tech", "tech with purpose", "love through technology"],
  authors: [{ name: "Agape Labs Team" }],
  creator: "Agape Labs Ltd",
  icons: {
    icon: '/images/agape-labs-logo.png',
    apple: '/images/agape-labs-logo.png',
  },
  openGraph: {
    title: "Agape Labs Ltd | Spreading God's Love Through Tech",
    description: "Agape Labs Ltd is dedicated to spreading God's love through innovative technology solutions.",
    url: "https://agapelabs.co.uk",
    siteName: "Agape Labs Ltd",
    images: [
      {
        url: '/images/twitter-card.png',
        width: 1200,
        height: 630,
        alt: 'Agape Labs - Spreading God\'s Love Through Tech',
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agape Labs Ltd | Spreading God's Love Through Tech",
    description: "Agape Labs Ltd is dedicated to spreading God's love through innovative technology solutions.",
    images: ['/images/twitter-card.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
