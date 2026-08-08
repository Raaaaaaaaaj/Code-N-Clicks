import "@/index.css";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/shared/StickyCTA";
import ExitIntentPopup from "@/components/shared/ExitIntentPopup";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";
import ScrollProgressIndicator from "@/components/shared/ScrollProgressIndicator";
import CustomCursor from "@/components/shared/CustomCursor";
import { Metadata } from "next";
import Script from "next/script";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";
import AnalyticsTracker from "@/components/shared/AnalyticsTracker";
import { Toaster } from "sonner";

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
  title: "CodeNClicks IT Solutions | Custom Software Development Company in India",
  description: "CodeNClicks IT Solutions is a custom software development company in India building AI-enabled software, SaaS products, CRM systems, enterprise applications, ecommerce solutions, and high-performance websites.",
  metadataBase: new URL("https://codenclicksit.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "CodeNClicks IT Solutions | Custom Software Development Company in India",
    description: "CodeNClicks IT Solutions is a custom software development company in India building AI-enabled software, SaaS products, CRM systems, enterprise applications, ecommerce solutions, and high-performance websites.",
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
    title: "CodeNClicks IT Solutions | Custom Software Development Company in India",
    description: "CodeNClicks IT Solutions is a custom software development company in India building AI-enabled software, SaaS products, CRM systems, enterprise applications, ecommerce solutions, and high-performance websites.",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-91TCRZX1F9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-91TCRZX1F9');
      `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-91TCRZX1F9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-91TCRZX1F9');
          `}
        </Script>

        <Providers>
          <SmoothScrollProvider>
            <AnalyticsTracker />
            <ConditionalLayout>
              {children}
            </ConditionalLayout>
            <Toaster position="top-center" richColors />
          </SmoothScrollProvider>
        </Providers>
      </body>
    </html>
  );
}
