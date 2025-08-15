import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://www.tangentweekly.com/"),
  title: "Tangent Weekly - Breaking News, Politics & Business Analysis",
  description: "Breaking news and expert analysis on politics, business, tech, health, science & sports. Stay ahead with daily global insights and trending stories.",
  keywords:
    "social media liability laws 2025, Brazil Supreme Court tech rulings, platform accountability regulations, Uber Waymo robotaxi launch Atlanta, self-driving cars in Georgia, Cooper Flagg NBA draft 2025, top NBA prospects after LeBron, youth mental health and smartphone addiction, screen time vs addictive app use, cervical cancer screening with self-sample kits, mailed HPV test effectiveness, political targeting case, Puerto Rico politics and legal system",
  openGraph: {
    title: "Tangent Weekly - Breaking News, Politics & Business Analysis",
    description: "Breaking news and expert analysis on politics, business, tech, health, science & sports. Stay ahead with daily global insights and trending stories.",
    url: "https://www.tangentweekly.com/",
    siteName: "Tangent Weekly",
    images: [
      {
        url: "https://www.tangentweekly.com/images/tangent-logo.webp",
        width: 1200,
        height: 630,
        alt: "Tangent Weekly Logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Breaking News, Politics & Business Analysis - Tangent Weekly",
    description: "Stay ahead with breaking news and expert analysis on politics, business, technology, health, science & sports.",
    images: "https://www.tangentweekly.com/images/tangent-logo.webp",
  },

  alternates: {
    canonical: "https://www.tangentweekly.com/",
    languages: {
      en: "https://www.tangentweekly.com/",
      "x-default": "https://www.tangentweekly.com/",
    },
  },

  authors: [{ name: "Cameron Ellis" }],

  icons: {
    icon: "/favicon.ico",
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
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
        <link
          rel="preload"
          as="image"
          href="https://www.tangentweekly.com/images/wanda-vazquez-political-targeting.webp"
          fetchPriority="high"
          type="image/webp"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
        <Script
          id="structured-data-newsmediaorganization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "NewsMediaOrganization",
                "@id": "https://www.tangentweekly.com/#organization",
                name: "Tangent Weekly",
                url: "https://www.tangentweekly.com/",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.tangentweekly.com/images/tangent-logo.webp",
                  width: 1024,
                  height: 1024,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "Customer Service",
                  areaServed: "US",
                  availableLanguage: ["English"],
                },

                sameAs: ["https://www.tangentweekly.com/"],
              },
              null,
              2
            ),
          }}
        />

        <Script
          id="structured-data-site-navigation"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                name: [
                  "Home",
                  "Business",
                  "Politics",
                  "Technology",
                  "Science",
                  "Sports",
                  "Health"
                ],
                url: [
                  "https://www.tangentweekly.com/",
                  "https://www.tangentweekly.com/business/",
                  "https://www.tangentweekly.com/technology/",
                  "https://www.tangentweekly.com/politics/",
                  "https://www.tangentweekly.com/health/",
                  "https://www.tangentweekly.com/science/",
                  "https://www.tangentweekly.com/sports",

                ],
              },
              null,
              2
            ),
          }}
        />
      </body>
    </html>
  );
}
