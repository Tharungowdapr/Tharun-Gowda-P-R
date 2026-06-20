import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";

export const metadata: Metadata = {
  metadataBase: new URL("https://tharun-portfolio.vercel.app"),
  title: "Tharun Gowda P R — AI/ML Engineer",
  description:
    "Third-year AIML student at RVCE. Building LLM applications, RAG systems, and computer vision solutions. Seeking AI/ML engineering internships.",
  keywords: [
    "AI Engineer", "ML Engineer", "NLP", "LLM", "RAG", "FastAPI", "Next.js",
    "RVCE", "Bengaluru", "Tharun Gowda", "portfolio"
  ],
  authors: [{ name: "Tharun Gowda P R" }],
  openGraph: {
    title: "Tharun Gowda P R — AI/ML Engineer",
    description: "Building intelligent systems. LLMs, RAG, NLP, Computer Vision.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharun Gowda P R — AI/ML Engineer",
    description: "Building intelligent systems. LLMs, RAG, NLP, Computer Vision.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0d11",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased grain-overlay`}
      >
        <CursorSpotlight />
        <div className="ambient-glow" aria-hidden />
        {children}
      </body>
    </html>
  );
}
