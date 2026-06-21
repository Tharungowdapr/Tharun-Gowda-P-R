import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";

export const metadata: Metadata = {
  metadataBase: new URL("https://tharun-gowda-pr.vercel.app"),
  title: "Tharun Gowda P R — AI/ML Engineer",
  verification: { google: "7W9h8MG2f1QqoqrsRbxoV9_pdbrRwlBcFOdtnJrMHZE" },
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
  alternates: {
    canonical: "https://tharun-gowda-pr.vercel.app",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0d11",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tharun Gowda P R",
    givenName: "Tharun",
    familyName: "Gowda P R",
    jobTitle: "AI/ML Engineer",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "RV College of Engineering",
      address: { addressLocality: "Bengaluru", addressCountry: "IN" },
    },
    url: "https://tharun-gowda-pr.vercel.app",
    sameAs: [
      "https://github.com/tharungowdapr",
      "https://www.linkedin.com/in/tharun-gowda-p-r-836696382",
    ],
    email: "tharungowdapr@gmail.com",
    telephone: "+91 7411504315",
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Retrieval-Augmented Generation",
      "Multi-Agent Systems",
      "Deep Learning",
      "FastAPI",
      "Next.js",
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased grain-overlay`}
      >
        <CursorSpotlight />
        <div className="ambient-glow" aria-hidden />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
