import "@/index.css";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/shared/StickyCTA";
import ExitIntentPopup from "@/components/shared/ExitIntentPopup";
import { Metadata } from "next";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodeNClicks IT Solutions | Web Development Company in India",
  description: "CodeNClicks IT Solutions is a web development company in India building SEO-friendly websites, SaaS products, CRM systems, ecommerce stores, hotel software, UI/UX, and digital marketing campaigns.",
  metadataBase: new URL("https://codenclicksit.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CodeNClicks IT Solutions | Web Development Company in India",
    description: "CodeNClicks IT Solutions is a web development company in India building SEO-friendly websites, SaaS products, CRM systems, ecommerce stores, hotel software, UI/UX, and digital marketing campaigns.",
    url: "https://codenclicksit.in",
    siteName: "CodeNClicks IT Solutions",
    images: [
      {
        url: "/Codenclicks_white_bg_PNG.png",
        width: 1200,
        height: 630,
        alt: "CodeNClicks IT Solutions logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeNClicks IT Solutions | Web Development Company in India",
    description: "CodeNClicks IT Solutions is a web development company in India building SEO-friendly websites, SaaS products, CRM systems, ecommerce stores, hotel software, UI/UX, and digital marketing campaigns.",
    images: ["/Codenclicks_white_bg_PNG.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${manrope.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased font-sans">
        <Providers>
          <Navbar />
          <main className="flex-grow pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
          <StickyCTA />
          <ExitIntentPopup />
        </Providers>
      </body>
    </html>
  );
}
