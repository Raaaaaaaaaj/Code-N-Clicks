import { organizationSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Web Development & custom software services | CodeNClicks",
  description: "Explore our professional IT services catalog: custom web applications, React frontends, SaaS products, CRM systems, e-commerce stores, and digital marketing.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Development & custom software services | CodeNClicks",
    description: "Explore our professional IT services catalog: custom web applications, React frontends, SaaS products, CRM systems, e-commerce stores, and digital marketing.",
    url: "https://codenclicksit.in/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & custom software services | CodeNClicks",
    description: "Explore our professional IT services catalog: custom web applications, React frontends, SaaS products, CRM systems, e-commerce stores, and digital marketing.",
  },
};

export default function ServicesPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
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
      <ServicesClient />
    </>
  );
}
