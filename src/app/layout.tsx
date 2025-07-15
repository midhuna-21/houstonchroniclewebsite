import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.tangentweekly.com/"),
  title: "Politics,Business,Technology,Health,Science,Sports",
  description: "Stay informed with the latest updates in politics, business, technology, health, science, and sports — from global news and innovations to expert analysis and breaking stories.",
  keywords: "politics news, business analysis, technology trends, health updates, science discoveries, sports highlights, breaking news, global headlines, expert insights, market trends, tech innovations, medical research, scientific breakthroughs, sports events",
  openGraph: {
    title: "Politics,Business,Technology,Health,Science,Sports",
    description:
      "Stay informed with the latest breaking news, global business trends, financial strategies, investment opportunities, and expert market analysis.",
    url: "https://www.tangentweekly.com/",
    siteName: "tangentweekly",
    images: [
      {
        url: "https://www.tangentweekly.com/images/tangent-weekly-logo.webp",
        width: 1024,
        height: 1024,
        alt: "tangentweekly Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business,Politics,Technology,Health,Science,Sports",
    description:
      "Stay informed with the latest breaking news, global business trends, financial strategies, investment opportunities, and expert market analysis.",
    images:
      "https://www.tangentweekly.com/images/tangent-weekly-logo.webp",
  },
  alternates: {
    canonical: "https://www.tangentweekly.com/",
    languages: {
      en: "https://www.tangentweekly.com/",
      "x-default": "https://www.tangentweekly.com/",
    },
  },
  other: {
    author: "cameron ellis",
  },
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
                  url: "https://www.tangentweekly.com/images/tangent-weekly-logo.webp",
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
      </body>
    </html>
  );
}
