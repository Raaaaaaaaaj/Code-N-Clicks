import { useEffect } from "react";

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

const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

export const useSEO = ({
  title,
  description,
  path = "/",
  type = "website",
  image = DEFAULT_OG_IMAGE,
  keywords = [],
  noindex = false,
  jsonLd,
}: SEOConfig) => {
  const hasKeywords = keywords.length > 0;
  const hasJsonLd = Boolean(jsonLd);
  const keywordsContent = keywords.join(", ");
  const jsonLdContent = jsonLd ? JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : "";

  useEffect(() => {
    const canonical = absoluteUrl(path);
    const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

    document.title = title;
    document.documentElement.setAttribute("lang", "en-IN");

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    setMeta('meta[name="theme-color"]', "name", "theme-color", "#0b7cff");

    if (hasKeywords) {
      setMeta('meta[name="keywords"]', "name", "keywords", keywordsContent);
    }

    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);
    setMeta('meta[property="og:image"]', "property", "og:image", imageUrl);
    setMeta('meta[property="og:locale"]', "property", "og:locale", "en_IN");

    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);

    setLink("canonical", canonical);

    const scriptId = "codenclicks-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (hasJsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": JSON.parse(jsonLdContent) });
    } else if (script) {
      script.remove();
    }
  }, [title, description, path, type, image, hasKeywords, keywordsContent, noindex, hasJsonLd, jsonLdContent]);
};

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
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?search={search_term_string}`,
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
  provider: { "@id": `${SITE_URL}/#organization` },
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
  publisher: { "@id": `${SITE_URL}/#organization` },
  mainEntityOfPage: absoluteUrl(path),
});
