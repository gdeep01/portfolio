import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Gagan Deep | Full-Stack Developer",
  description: "Final-year EIE student at MSRIT. I build full-stack products that real people use.",
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
    title: "Gagan Deep | Full-Stack Developer",
    description: "Final-year EIE student at MSRIT. I build full-stack products that real people use.",
    url: "https://gagandeep.dev",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gagan Deep | Full-Stack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: 
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Gagan Deep",
          "jobTitle": "Full-Stack Developer",
          "email": "gdeepg19@gmail.com",
          "url": "https://gagandeep.dev",
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} bg-black text-white selection:bg-accent selection:text-black`}>
        <div className="scanlines" />
        <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
        <main className="relative z-10" role="main">
          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
