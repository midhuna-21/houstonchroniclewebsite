import type { Metadata } from "next";
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
  title: "TangentWeekly | Breaking News, Politics, Tech, and Science",
  description: "Tangent Weekly brings you in-depth, fact-driven journalism on U.S. politics",
  keywords: ["TangentWeekly", "best political news", "tech news", "science journalism", "independent media"],
  openGraph: {
    title: "TangentWeekly | The Best U.S. Politics & Tech News Source",
    description: "Get the latest, most reliable reporting from TangentWeekly on U.S. politics, technology, science, and more.",
    url: "https://www.tangentweekly.com",
    siteName: "TangentWeekly",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
