export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  challenge: string;
  solution: string;
  techUsed: string[];
  results: { metric: string; value: string }[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  status: "completed" | "in-development";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "anime-paradise-ecommerce-platform",
    title: "Anime Paradise - Anime Product Ecommerce Platform",
    client: "Anime Paradise",
    industry: "Ecommerce",
    category: "E-commerce Development",
    challenge: "Anime Paradise needed a fast platform using [ecommerce development services](/services/ecommerce-development) for anime merchandise with product discovery, inventory management, secure checkout, and a mobile-first shopping experience.",
    solution: "We built a product-led ecommerce experience with structured categories, fast search, secure payments, streamlined checkout, and an admin workflow for catalog and order management.",
    techUsed: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Stripe", "Algolia"],
    results: [
      { metric: "Lead Generation", value: "+340%" },
      { metric: "Page Load Time", value: "0.8s" },
      { metric: "Bounce Rate", value: "-62%" },
      { metric: "Monthly Visitors", value: "180K+" },
    ],
    testimonial: "CodeNClicks transformed our digital presence completely. The new platform generates more qualified leads in a week than our old site did in a month.",
    testimonialAuthor: "Anime Paradise Team",
    testimonialRole: "Founders, Anime Paradise",
    status: "completed",
  },
  {
    slug: "ritu-ivy-hotel-website",
    title: "Ritu Ivy Hotel - Hotel Website",
    client: "Ritu Ivy Hotel",
    industry: "Hospitality",
    category: "Web Development",
    challenge: "Ritu Ivy Hotel needed a polished hotel website that could showcase rooms, amenities, local trust signals, and direct booking paths built on [hotel management software](/hotel-management-system-development-company) guidelines.",
    solution: "We created a responsive hotel website with room presentation, inquiry flow, local SEO foundations, Google Maps integration, and conversion-focused calls to action.",
    techUsed: ["React", "Node.js", "MongoDB", "Stripe", "Google Maps API"],
    results: [
      { metric: "Online Bookings", value: "+150%" },
      { metric: "User Engagement", value: "+120%" },
      { metric: "Conversion Rate", value: "+85%" },
      { metric: "Mobile Traffic", value: "60%" },
    ],
    testimonial: "The new website has significantly improved our online presence and booking conversions. It is exactly what we needed to attract more guests.",
    testimonialAuthor: "Ritu Ivy Hotel Team",
    testimonialRole: "Management, Ritu Ivy Hotel",
    status: "completed",
  },
  {
    slug: "chitralekha-boutique-resort-dehradun-hotel-website",
    title: "Chitralekha Boutique Resort - Dehradun Hotel Website",
    client: "Chitralekha Boutique Resort",
    industry: "Hospitality",
    category: "Web Development",
    challenge: "The resort needed a modern website that communicated its boutique positioning, improved mobile browsing, and created a clearer path for direct inquiries.",
    solution: "We built a visual hospitality website with room sections, amenity highlights, inquiry CTAs, location cues, and a mobile-first layout designed for travelers researching quickly.",
    techUsed: ["React", "Node.js", "MongoDB", "Stripe", "Google Maps API"],
    results: [
      { metric: "Online Inquiries", value: "+150%" },
      { metric: "User Engagement", value: "+120%" },
      { metric: "Conversion Rate", value: "+85%" },
      { metric: "Mobile Traffic", value: "60%" },
    ],
    testimonial: "The website now reflects the resort experience much better and makes it easier for guests to reach us directly.",
    testimonialAuthor: "Chitralekha Resort Team",
    testimonialRole: "Management, Chitralekha Boutique Resort",
    status: "completed",
  },
  {
    slug: "abhijit-realtors-real-estate-software",
    title: "Abhijit Realtors - Real Estate Software",
    client: "Abhijit Realtors",
    industry: "Real Estate",
    category: "Custom Software",
    challenge: "Abhijit Realtors needed a system to organize property listings, client inquiries, agent workflows, and transaction visibility in one place.",
    solution: "We designed and developed a real estate management platform with property filters, listing workflows, lead tracking, client communication, and admin reporting.",
    techUsed: ["Angular", "Node.js", "MongoDB", "Stripe", "Google Maps API"],
    results: [
      { metric: "Admin Efficiency", value: "+200%" },
      { metric: "Lead Handling", value: "+85%" },
      { metric: "Search Speed", value: "2x" },
      { metric: "Team Adoption", value: "4.9/5" },
    ],
    testimonial: "The platform has made property management and client follow-up much easier for our team.",
    testimonialAuthor: "Abhijit Realtors Team",
    testimonialRole: "Management, Abhijit Realtors",
    status: "completed",
  },
  {
    slug: "kebun-nuts-packaging-design",
    title: "Kebun Nuts - Nut Butter SKU",
    client: "Kebun Nuts",
    industry: "Food & Beverage",
    category: "Branding & Packaging",
    challenge: "Kebun Nuts needed packaging and brand visuals that could stand out in a competitive health-food category while communicating product quality quickly.",
    solution: "We developed a cohesive visual system with packaging concepts, product-focused messaging, and marketing-ready design assets for online and retail use.",
    techUsed: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma", "3D Mockup Software"],
    results: [
      { metric: "Brand Recall", value: "+210%" },
      { metric: "Shelf Appeal", value: "+45%" },
      { metric: "Revision Time", value: "-30%" },
      { metric: "Asset Formats", value: "12+" },
    ],
    testimonial: "The packaging system made our product line feel more premium and much easier to present to buyers.",
    testimonialAuthor: "Kebun Nuts Team",
    testimonialRole: "Founders, Kebun Nuts",
    status: "completed",
  },
  {
    slug: "pranabananda-textiles-crm-system",
    title: "Pranabananda Textiles - CRM System",
    client: "Pranabananda Textiles",
    industry: "Textiles",
    category: "CRM Development",
    challenge: "Pranabananda Textiles needed a CRM to manage lead stages, customer interactions, sales follow-ups, and business reporting for a growing textile operation.",
    solution: "We developed a custom CRM with lead management, sales pipeline tracking, role-based access, reports, and a dashboard tailored to textile sales workflows.",
    techUsed: ["React", "Node.js", "PostgreSQL", "SendGrid", "Chart.js"],
    results: [
      { metric: "Sales Cycle", value: "-40%" },
      { metric: "Lead Conversion", value: "+65%" },
      { metric: "Team Productivity", value: "+150%" },
      { metric: "Follow-up Speed", value: "3x" },
    ],
    testimonial: "This CRM has made our sales process more organized and helped the team follow up faster.",
    testimonialAuthor: "Pranabananda Textiles Team",
    testimonialRole: "Management, Pranabananda Textiles",
    status: "completed",
  },
  {
    slug: "namita-textiles-sarees-ecommerce-platform",
    title: "Namita Textiles - Sarees E-commerce Platform",
    client: "Namita Textiles",
    industry: "Textiles",
    category: "E-commerce Development",
    challenge: "Namita Textiles needed an ecommerce platform to showcase sarees, simplify browsing, accept secure payments, and manage online orders.",
    solution: "We built a responsive ecommerce website with product categories, secure payment processing, admin controls, inventory workflows, and mobile-first product pages.",
    techUsed: ["React", "Node.js", "MongoDB", "Stripe API", "Cloudinary"],
    results: [
      { metric: "Conversion Rate", value: "+55%" },
      { metric: "Average Order Value", value: "+30%" },
      { metric: "Customer Retention", value: "+40%" },
      { metric: "Sales Growth", value: "+180%" },
    ],
    testimonial: "The ecommerce platform has made online sales easier to manage and improved the shopping experience for our customers.",
    testimonialAuthor: "Namita Textiles Team",
    testimonialRole: "Management, Namita Textiles",
    status: "completed",
  },
];

export const getCaseStudyBySlug = (slug: string) => caseStudies.find(cs => cs.slug === slug);
