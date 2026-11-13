import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-head" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-code" });

const siteUrl = "https://portfolio-gdeeps-projects.vercel.app";
const siteName = "Gagan Deep";
const siteTitle = "Gagan Deep | Product Builder & Engineer";
const siteDescription = "I build digital products from real-world problems, combining product thinking, design and engineering to turn ideas into working experiences.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteName,
      url: siteUrl,
      sameAs: [
        "https://github.com/gdeep01",
        "https://linkedin.com/in/gagan-deep-755130296",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "MS Ramaiah Institute of Technology",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/favicon/site.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    type: "website",
    siteName,
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
