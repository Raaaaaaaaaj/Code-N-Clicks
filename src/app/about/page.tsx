import { organizationSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About CodeNClicks IT Solutions | Custom Web & Software Agency",
  description: "Learn about CodeNClicks - our dorm room origins, transparency values, and expert team engineering scalable custom software and web applications globally.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About CodeNClicks IT Solutions | Custom Web & Software Agency",
    description: "Learn about CodeNClicks - our dorm room origins, transparency values, and expert team engineering scalable custom software and web applications globally.",
    url: "https://codenclicksit.in/about",
    type: "website",
    siteName: "CodeNClicks IT Solutions",
    images: [
      {
        url: "https://codenclicksit.in/Codenclicks_white_bg_PNG.png",
        width: 1200,
        height: 630,
        alt: "CodeNClicks IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CodeNClicks IT Solutions | Custom Web & Software Agency",
    description: "Learn about CodeNClicks - our dorm room origins, transparency values, and expert team engineering scalable custom software and web applications globally.",
    images: ["https://codenclicksit.in/Codenclicks_white_bg_PNG.png"],
  },
};

export default function AboutPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ]
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <AboutClient />
    </>
  );
}
