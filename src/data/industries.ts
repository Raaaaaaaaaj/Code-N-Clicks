import { GraduationCap, Hotel, Building2, Rocket, ShoppingBag, Heart, Briefcase, type LucideIcon } from "lucide-react";

export interface IndustryData {
  slug: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  challenges: string[];
  solutions: string[];
  relevantServices: string[];
  ctaText?: string;
}

export const industries: IndustryData[] = [
  {
    slug: "education",
    title: "Schools & Education",
    tagline: "Digitize admissions, student records, fees, attendance, academics, and parent communication in one connected platform.",
    icon: GraduationCap,
    challenges: [
      "Outdated learning management systems that frustrate students and faculty",
      "Low engagement with online and hybrid learning models",
      "Difficulty managing admissions, fees, and student records digitally",
      "Lack of data-driven insights into student performance",
    ],
    solutions: [
      "Custom LMS platforms with interactive content, live classes, and progress tracking",
      "Student portals with self-service enrollment, fee payment, and grade access",
      "AI-powered learning path recommendations and early intervention alerts",
      "Mobile-first design for on-the-go learning and parent communication",
    ],
    relevantServices: ["School ERP Development", "LMS Development", "Custom Software Development"],
    ctaText: "Explore Education Solutions →",
  },
  {
    slug: "hospitality",
    title: "Hotels & Hospitality",
    tagline: "Connect reservations, front-desk operations, housekeeping, billing, direct bookings, and OTA workflows through purpose-built hospitality software.",
    icon: Hotel,
    challenges: [
      "Over-reliance on OTAs eating into profit margins",
      "Disconnected booking, PMS, and guest communication systems",
      "Inability to showcase the premium nature of the property online",
      "Poor mobile booking experience losing potential guests",
    ],
    solutions: [
      "Direct booking platforms with dynamic pricing and virtual room tours",
      "Integrated PMS with automated guest communication and upselling",
      "Cinematic web experiences that convey luxury and drive bookings",
      "Mobile-optimized booking flows with one-tap reservation",
    ],
    relevantServices: ["Hotel Management Software", "Booking Engine Development", "Hospitality CRM"],
    ctaText: "Explore Hospitality Solutions →",
  },
  {
    slug: "corporate",
    title: "Corporate & Enterprise",
    tagline: "Replace disconnected tools with custom CRM, workflow automation, internal portals, dashboards, and systems that connect your business operations.",
    icon: Building2,
    challenges: [
      "Legacy systems creating operational bottlenecks",
      "Siloed data across departments hindering decision-making",
      "Outdated corporate websites that don't reflect brand positioning",
      "Complex internal tools with poor user adoption rates",
    ],
    solutions: [
      "Enterprise web portals and intranet solutions",
      "Custom dashboards unifying data from multiple sources",
      "Premium corporate websites with investor relations and career portals",
      "Intuitive internal tools designed for high adoption and productivity",
    ],
    relevantServices: ["Enterprise Software", "CRM Development", "Workflow Automation"],
    ctaText: "Explore Enterprise Solutions →",
  },
  {
    slug: "startups",
    title: "Startups & SaaS",
    tagline: "Turn validated ideas into scalable MVPs, SaaS platforms, customer portals, and production-ready products without overbuilding the first release.",
    icon: Rocket,
    challenges: [
      "Limited budget requiring maximum ROI on every dollar",
      "Need to validate ideas quickly with an MVP",
      "Competing against established players with bigger teams",
      "Scaling infrastructure as user base grows rapidly",
    ],
    solutions: [
      "Lean MVP development with rapid iteration cycles",
      "Growth marketing strategies that acquire users cost-effectively",
      "Scalable architecture that grows with your user base",
      "Pitch-ready designs that impress investors and early adopters",
    ],
    relevantServices: ["SaaS Development", "MVP Development", "Product Development"],
    ctaText: "Explore Startup Solutions →",
  },
  {
    slug: "ecommerce",
    title: "E-commerce & Retail",
    tagline: "Build high-converting storefronts connected to payments, inventory, order management, analytics, marketplaces, and existing business systems.",
    icon: ShoppingBag,
    challenges: [
      "Low conversion rates despite high traffic volumes",
      "Cart abandonment rates exceeding industry averages",
      "Difficulty competing on price with marketplace giants",
      "Managing inventory across multiple sales channels",
    ],
    solutions: [
      "Conversion-optimized storefronts with A/B tested checkout flows",
      "AI-powered product recommendations and personalization",
      "Multi-channel inventory sync and order management",
      "Performance marketing campaigns with measurable ROAS",
    ],
    relevantServices: ["E-commerce Development", "Conversion Optimization", "API Integrations"],
    ctaText: "Explore E-commerce Solutions →",
  },
  {
    slug: "healthcare",
    title: "Healthcare & HealthTech",
    tagline: "Build secure digital healthcare experiences for appointments, patient records, portals, provider workflows, and healthcare integrations.",
    icon: Heart,
    challenges: [
      "Strict data privacy and security requirements",
      "Paper-based processes slowing down patient care",
      "Poor patient engagement and follow-up communication",
      "Fragmented systems for scheduling, billing, and records",
    ],
    solutions: [
      "Secure patient portals with telemedicine capabilities",
      "Electronic health record systems with intuitive interfaces",
      "Automated appointment reminders and patient communication",
      "Unified platforms integrating scheduling, billing, and clinical data",
    ],
    relevantServices: ["Healthcare Software", "Patient Portal Development", "Healthcare CRM"],
    ctaText: "Explore Healthcare Solutions →",
  },
  {
    slug: "agencies",
    title: "Digital Agencies",
    tagline: "Scale client delivery with white-label websites, client portals, reporting dashboards, reusable systems, and custom platforms built around your agency workflow.",
    icon: Briefcase,
    challenges: [
      "Need for white-label solutions to offer clients under their brand",
      "Scaling development capacity without hiring overhead",
      "Maintaining quality across multiple client projects simultaneously",
      "Keeping up with rapidly evolving tech stacks and frameworks",
    ],
    solutions: [
      "White-label development partnerships with your branding",
      "Dedicated development teams that integrate with your workflow",
      "Standardized quality assurance and project management processes",
      "Access to specialists across all modern technologies and platforms",
    ],
    relevantServices: ["White-label Development", "Client Portal Development", "Custom Software"],
    ctaText: "Explore Agency Solutions →",
  },
];

export const getIndustryBySlug = (slug: string) => industries.find(i => i.slug === slug);

export interface IndustryFAQ {
  q: string;
  a: string;
}

export const industriesFaqs: IndustryFAQ[] = [
  {
    q: "What is industry-specific software development?",
    a: "Industry-specific software development means building software around the workflows, data requirements, user roles, integrations and operational needs of a particular business sector instead of forcing the business to adapt to a generic tool.",
  },
  {
    q: "Can you build software for an industry not listed on this page?",
    a: "Yes. The industries shown here represent our current focus areas, but we can evaluate other business domains based on their workflows, technical requirements, integrations and project scope.",
  },
  {
    q: "What types of industry-specific software can Code N Clicks build?",
    a: "We build custom business software, CRM systems, SaaS platforms, booking systems, ecommerce platforms, customer portals, workflow automation tools and industry-specific management systems.",
  },
  {
    q: "Can you integrate our existing CRM, ERP or other software?",
    a: "Yes. Where APIs, webhooks or supported integration methods are available, we can connect existing systems with custom software and business workflows.",
  },
  {
    q: "Do you build custom software for startups?",
    a: "Yes. We can help startups validate an idea with an MVP and design the architecture so the product can evolve into a scalable SaaS or business platform.",
  },
  {
    q: "Can you build multi-tenant SaaS software?",
    a: "Yes. We can design multi-tenant SaaS architecture with organization-level data isolation, role-based access, dashboards, subscriptions and integrations based on project requirements.",
  },
  {
    q: "Can you build software around our existing business process?",
    a: "Yes. That is one of the main advantages of custom software. We begin by understanding the current workflow, bottlenecks, users and system requirements before designing the solution.",
  },
];

