import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yerrystouch.com"),
  title: "Yerry's Touch by Yeron Habtamu | Luxury Bridal & Editorial Makeup Addis Ababa",
  description:
    "Bespoke bridal, celebratory, and editorial artistry by certified MUA Yeron Habtamu in Gullele, Addis Ababa. Specializing in royal Ethiopian bridal ceremonies, Melse, and high-fashion glam.",
  keywords: [
    "Yerry's Touch",
    "Yeron Habtamu",
    "Ethiopian Makeup Artist",
    "Addis Ababa Makeup Artist",
    "Bridal Makeup Addis Ababa",
    "Ethiopian Wedding Melse",
    "Gullele Beauty Studio",
    "Certified MUA Addis Ababa",
    "Luxury Makeup Ethiopia",
  ],
  authors: [{ name: "Yeron Habtamu" }],
  openGraph: {
    title: "Yerry's Touch | Premier Bridal & Editorial Beauty Studio",
    description:
      "Nurturing Natural Beauty, Crafting Unforgettable Glamour. Bespoke bridal, Melse, and editorial artistry in Addis Ababa.",
    url: "https://yerrystouch.com",
    siteName: "Yerry's Touch",
    images: [
      {
        url: "/images/yerry.jpg",
        width: 1200,
        height: 630,
        alt: "Yerry's Touch Luxury Makeup Studio in Gullele, Addis Ababa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-ivory text-espresso font-sans selection:bg-gold-200 selection:text-espresso">
        {children}
      </body>
    </html>
  );
}
