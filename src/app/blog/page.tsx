import { organizationSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Web Development & Technical SEO Blog | CodeNClicks India",
  description: "Read practical guides on building custom SaaS MVPs, CRM architectures, ecommerce conversion funnels, and organic search visibility frameworks.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Web Development & Technical SEO Blog | CodeNClicks India",
    description: "Read practical guides on building custom SaaS MVPs, CRM architectures, ecommerce conversion funnels, and organic search visibility frameworks.",
    url: "https://codenclicksit.in/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & Technical SEO Blog | CodeNClicks India",
    description: "Read practical guides on building custom SaaS MVPs, CRM architectures, ecommerce conversion funnels, and organic search visibility frameworks.",
  },
};

export default function BlogPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
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
      <BlogClient />
    </>
  );
}
