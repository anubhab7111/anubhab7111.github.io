
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = GeistSans;

const siteUrl = 'https://anubhab7111.github.io/';
const profileImageUrl = `${siteUrl}images/anubhab.jpg`; // This will be used for schema.org but not for openGraph/twitter

export const metadata: Metadata = {
  title: 'Anubhab Das',
  keywords: [
    'Anubhab Das',
    'Portfolio',
    'Deep Learning',
    'Computer Vision',
    'Machine Learning',
    'AI',
    'Artificial Intelligence',
    'Researcher',
    'Undergraduate',
    'NIT Rourkela',
    'Python',
    'PyTorch',
    'Next.js Developer',
    'Software Developer',
    'Tech Portfolio',
    'Personal Showcase',
  ],
  authors: [{ name: 'Anubhab Das', url: siteUrl }],
  creator: 'Anubhab Das',
  publisher: 'Anubhab Das',

  openGraph: {
    title: 'Anubhab Das',
    url: siteUrl,
    siteName: 'Anubhab Das',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Anubhab Das',
    creator: '@forreal_anubhab',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false, 
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: { 
    icon: '/favicon.ico', 
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anubhab Das",
    "url": siteUrl,
    "image": profileImageUrl, // Schema.org can still use an image if desired
    "jobTitle": "Deep Learning Enthusiast",
    "worksFor": {
      "@type": "Organization",
      "name": "National Institute of Technology, Rourkela"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "National Institute of Technology, Rourkela"
    },
    "sameAs": [
      "https://www.linkedin.com/in/anubhab-das-498155287/",
      "https://github.com/anubhab7111",
      "https://x.com/forreal_anubhab"
    ],
    "knowsAbout": ["Deep Learning", "Computer Vision", "Machine Learning", "Artificial Intelligence", "Python", "PyTorch", "Next.js", "Web Development"]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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
