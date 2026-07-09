import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { industries } from "@/data/industries";
import { blogPosts } from "@/data/blog";
import { landingPages } from "@/data/landingPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://codenclicksit.in";

  const staticUrls = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/industries",
    "/technologies",
    "/blog",
    "/pricing",
    "/reviews",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyUrls = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const industryUrls = industries.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const landingPageUrls = landingPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticUrls,
    ...serviceUrls,
    ...caseStudyUrls,
    ...industryUrls,
    ...blogUrls,
    ...landingPageUrls,
  ];
}
