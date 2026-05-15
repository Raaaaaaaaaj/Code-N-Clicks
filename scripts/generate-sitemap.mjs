import { writeFileSync } from "node:fs";

const siteUrl = "https://codenclicksit.in";
const lastmod = "2026-05-15";

const routes = [
  ["/", "weekly", "1.0", lastmod],
  ["/about", "monthly", "0.7", lastmod],
  ["/services", "weekly", "0.9", lastmod],
  ["/case-studies", "monthly", "0.7", lastmod],
  ["/reviews", "monthly", "0.6", lastmod],
  ["/technologies", "monthly", "0.6", lastmod],
  ["/industries", "weekly", "0.8", lastmod],
  ["/pricing", "monthly", "0.8", lastmod],
  ["/contact", "monthly", "0.9", lastmod],
  ["/blog", "weekly", "0.8", lastmod],
  ...[
    "web-development",
    "web-designing",
    "custom-software-development",
    "ecommerce-development",
    "crm-development",
    "digital-marketing",
    "seo",
    "google-meta-ads",
    "graphics-designing",
  ].map((slug) => [`/services/${slug}`, "monthly", "0.85", lastmod]),
  ...[
    "web-development-company-india",
    "website-development-for-startups",
    "saas-development-company",
    "crm-development-company",
    "ecommerce-website-development-company",
    "hotel-management-system-development-company",
    "react-development-company",
    "ui-ux-design-agency",
  ].map((slug) => [`/${slug}`, "weekly", "0.9", lastmod]),
  ...[
    "education",
    "hospitality",
    "corporate",
    "startups",
    "ecommerce",
    "healthcare",
    "agencies",
  ].map((slug) => [`/industries/${slug}`, "monthly", "0.7", lastmod]),
  ...[
    "anime-paradise-ecommerce-platform",
    "ritu-ivy-hotel-website",
    "chitralekha-boutique-resort-dehradun-hotel-website",
    "abhijit-realtors-real-estate-software",
    "kebun-nuts-packaging-design",
    "pranabananda-textiles-crm-system",
    "namita-textiles-sarees-ecommerce-platform",
  ].map((slug) => [`/case-studies/${slug}`, "monthly", "0.6", lastmod]),
  ["/blog/how-to-choose-web-development-company-india", "monthly", "0.75", "2026-05-01"],
  ["/blog/saas-mvp-development-checklist-for-startups", "monthly", "0.75", "2026-04-28"],
  ["/blog/custom-crm-vs-off-the-shelf-crm", "monthly", "0.75", "2026-04-22"],
  ["/blog/ecommerce-website-development-cost-india", "monthly", "0.75", "2026-04-15"],
  ["/blog/hotel-booking-engine-development-guide", "monthly", "0.7", "2026-04-10"],
  ["/blog/seo-friendly-website-redesign-checklist", "monthly", "0.7", "2026-04-03"],
];

const urls = routes
  .map(([path, changefreq, priority, modified]) => {
    return `  <url><loc>${siteUrl}${path}</loc><lastmod>${modified}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync("public/sitemap.xml", xml);
console.log(`Generated ${routes.length} sitemap URLs.`);
