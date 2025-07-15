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


// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.tangentweekly.com/"),
//   title: "Tangent Weekly | Politics, Business, Tech, Health, Science & Sports",
//   description:
//     "Get the latest updates and expert analysis on politics, business, technology, health, science, and sports from Tangent Weekly. Stay informed with global insights and breaking stories.",
//   keywords: [
//     "politics news",
//     "business analysis",
//     "technology trends",
//     "health updates",
//     "science discoveries",
//     "sports highlights",
//     "breaking news",
//     "global headlines",
//     "expert insights",
//     "market trends",
//     "tech innovations",
//     "medical research",
//     "scientific breakthroughs",
//     "sports events"
//   ],
//   openGraph: {
//     title: "Tangent Weekly | Politics, Business, Tech, Health, Science & Sports",
//     description:
//       "Get the latest updates and expert analysis on politics, business, technology, health, science, and sports from Tangent Weekly. Stay informed with global insights and breaking stories.",
//     url: "https://www.tangentweekly.com/",
//     siteName: "Tangent Weekly",
//     images: [
//       {
//         url: "https://www.tangentweekly.com/images/tangent-weekly-logo.webp",
//         width: 1024,
//         height: 1024,
//         alt: "tangentweekly Logo",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Business,Politics,Technology,Health,Science,Sports",
//     description:
//       "Stay informed with the latest breaking news, global business trends, financial strategies, investment opportunities, and expert market analysis.",
//     images:
//       "https://www.tangentweekly.com/images/tangent-weekly-logo.webp",
//   },
//   alternates: {
//     canonical: "https://www.tangentweekly.com/",
//     languages: {
//       en: "https://www.tangentweekly.com/",
//       "x-default": "https://www.tangentweekly.com/",
//     },
//   },
//   other: {
//     author: "cameron ellis",
//   },
//   icons: {
//     icon: "/favicon.ico",
//   },
// };



export const metadata: Metadata = {
  metadataBase: new URL("https://tangentweekly.com/"),
  
  // OPTIMIZED TITLE (50-60 characters) - More compelling and keyword-rich
  title: "Tangent Weekly - Breaking News, Politics & Business Analysis",
  
  // OPTIMIZED DESCRIPTION (140-155 characters) - More action-oriented and compelling
  description: "Breaking news and expert analysis on politics, business, tech, health, science & sports. Stay ahead with daily global insights and trending stories.",
  
  keywords: [
    "breaking news",
    "politics news", 
    "business analysis",
    "technology trends",
    "health updates",
    "science discoveries",
    "sports highlights",
    "global headlines",
    "expert insights",
    "market trends",
    "tech innovations",
    "medical research",
    "scientific breakthroughs",
    "sports events"
  ],
  
  openGraph: {
    title: "Tangent Weekly - Breaking News, Politics & Business Analysis",
    description: "Breaking news and expert analysis on politics, business, tech, health, science & sports. Stay ahead with daily global insights and trending stories.",
    url: "https://tangentweekly.com/",
    siteName: "Tangent Weekly",
    images: [
      {
        url: "https://tangentweekly.com/images/tangent-weekly-logo.webp",
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
    images: "https://tangentweekly.com/images/tangent-weekly-logo.webp",
  },
  
  alternates: {
    canonical: "https://tangentweekly.com/",
    languages: {
      en: "https://tangentweekly.com/",
      "x-default": "https://tangentweekly.com/",
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
