import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = GeistSans;
const geistMono = GeistMono;

const siteUrl = "https://anubhab7111.github.io/";
const profileImageUrl = `${siteUrl}images/anubhab.jpg`; // This will be used for schema.org but not for openGraph/twitter

const siteTitle = "Anubhab Das – AI Engineer, RAG & LLM Systems";
const siteDescription =
  "AI engineer building RAG and LLM systems: LawWeb (legal RAG for Indian law), a Snowflake gateway at Bank of New York, and a paper at IEEE InGARSS 2026.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Anubhab Das",
    "AI Engineer",
    "RAG",
    "LLM",
    "Retrieval-Augmented Generation",
    "LangGraph",
    "FastAPI",
    "Machine Learning",
    "Computer Vision",
    "NIT Rourkela",
  ],
  authors: [{ name: "Anubhab Das", url: siteUrl }],
  creator: "Anubhab Das",
  publisher: "Anubhab Das",

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Anubhab Das",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@forreal_anubhab",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anubhab Das",
    url: siteUrl,
    image: profileImageUrl, // Schema.org can still use an image if desired
    jobTitle: "AI Engineer",
    description: siteDescription,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National Institute of Technology, Rourkela",
    },
    sameAs: [
      "https://www.linkedin.com/in/anubhab-das-498155287/",
      "https://github.com/anubhab7111",
      "https://x.com/forreal_anubhab",
    ],
    knowsAbout: [
      "Retrieval-Augmented Generation",
      "Large Language Models",
      "Information Retrieval",
      "Backend Engineering",
      "Deep Learning",
      "Computer Vision",
      "Python",
      "PyTorch",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
