import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-head" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-code" });

const siteUrl = "https://gagandeep-msrit.vercel.app";
const siteDescription = "A portfolio of products and prototypes shaped by real-world problems, conversations, and hands-on engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gagan Deep — Product Portfolio",
  description: siteDescription,
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Gagan Deep — Product Portfolio",
    description: siteDescription,
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gagan Deep — Product Portfolio",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: 
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Gagan Deep",
          "jobTitle": "Product-minded Engineer",
          "url": siteUrl,
          "sameAs": [
            "https://github.com/gdeep01",
            "https://linkedin.com/in/gagan-deep-755130296"
          ],
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "MS Ramaiah Institute of Technology"
          }
        })}} />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
