export const SITE_URL = "https://codenclicksit.in";
export const SITE_NAME = "CodeNClicks IT Solutions";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/Codenclicks_white_bg_PNG.png`;
export const DEFAULT_PHONE = "+91 99039 60407";
export const DEFAULT_EMAIL = "info@codenclicksit.in";

export type JsonLd = Record<string, unknown>;

export interface SEOConfig {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  keywords?: string[];
  noindex?: boolean;
  jsonLd?: JsonLd | JsonLd[];
}

const normalizePath = (path = "/") => {
  if (path === "/") return "/";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return cleanPath.endsWith("/") ? cleanPath.slice(0, -1) : cleanPath;
};

export const absoluteUrl = (path = "/") => `${SITE_URL}${normalizePath(path)}`;


export const organizationSchema = (): JsonLd => ({
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  email: DEFAULT_EMAIL,
  telephone: DEFAULT_PHONE,
  sameAs: [
    "https://www.linkedin.com/company/codenclicks-it-solutions",
    "https://www.instagram.com/codenclicks",
  ],
  areaServed: ["IN", "US", "GB", "CA", "AU", "AE"],
  serviceType: [
    "Web Development",
    "Website Designing",
    "Custom Software Development",
    "SaaS Development",
    "CRM Development",
    "Ecommerce Development",
    "Digital Marketing",
  ],
});

export const localBusinessSchema = (): JsonLd => ({
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  image: DEFAULT_OG_IMAGE,
  url: SITE_URL,
  email: DEFAULT_EMAIL,
  telephone: DEFAULT_PHONE,
  priceRange: "INR 3,999+",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "West Bengal",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
});

export const websiteSchema = (): JsonLd => ({
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: DEFAULT_OG_IMAGE,
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?search={search_term_string}`
    },
    "query-input": "required name=search_term_string",
  },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]): JsonLd => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]): JsonLd => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
});

export const serviceSchema = ({
  name,
  description,
  path,
  areaServed = ["India", "United States", "United Kingdom", "Global"],
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: string[];
}): JsonLd => ({
  "@type": "Service",
  "@id": `${absoluteUrl(path)}#service`,
  name,
  description,
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: DEFAULT_OG_IMAGE,
    },
  },
  url: absoluteUrl(path),
  areaServed: areaServed.map((name) => ({ "@type": "Place", name })),
});

export const articleSchema = ({
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
  author,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}): JsonLd => ({
  "@type": "BlogPosting",
  "@id": `${absoluteUrl(path)}#article`,
  headline: title,
  description,
  image,
  datePublished,
  dateModified: dateModified || datePublished,
  author: {
    "@type": "Person",
    name: author,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: DEFAULT_OG_IMAGE,
    },
  },
  mainEntityOfPage: absoluteUrl(path),
});

export function stripMarkdown(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}
