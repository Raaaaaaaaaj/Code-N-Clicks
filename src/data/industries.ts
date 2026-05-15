import { GraduationCap, Hotel, Building2, Rocket, ShoppingBag, Heart, Briefcase, type LucideIcon } from "lucide-react";

export interface IndustryData {
  slug: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  challenges: string[];
  solutions: string[];
  relevantServices: string[];
}

export const industries: IndustryData[] = [
  {
    slug: "education",
    title: "Schools & Education",
    tagline: "Empowering the next generation of learning through technology.",
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
    relevantServices: ["Web Development", "Custom Software Development", "Web Designing"],
  },
  {
    slug: "hospitality",
    title: "Hotels & Hospitality",
    tagline: "Creating unforgettable digital guest experiences.",
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
    relevantServices: ["Web Development", "E-commerce Development", "Digital Marketing"],
  },
  {
    slug: "corporate",
    title: "Corporate Firms",
    tagline: "Digital transformation for enterprise excellence.",
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
    relevantServices: ["Custom Software Development", "CRM Development", "Web Designing"],
  },
  {
    slug: "startups",
    title: "Startups",
    tagline: "From zero to launch at startup speed.",
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
    relevantServices: ["Web Development", "Digital Marketing", "Graphics Designing"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce Businesses",
    tagline: "Online stores engineered for maximum revenue.",
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
    relevantServices: ["E-commerce Development", "SEO", "Google & Meta Ads"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    tagline: "HIPAA-compliant solutions for modern healthcare.",
    icon: Heart,
    challenges: [
      "Strict regulatory compliance requirements (HIPAA, GDPR)",
      "Paper-based processes slowing down patient care",
      "Poor patient engagement and follow-up communication",
      "Fragmented systems for scheduling, billing, and records",
    ],
    solutions: [
      "HIPAA-compliant patient portals with telemedicine capabilities",
      "Electronic health record systems with intuitive interfaces",
      "Automated appointment reminders and patient communication",
      "Unified platforms integrating scheduling, billing, and clinical data",
    ],
    relevantServices: ["Custom Software Development", "Web Development", "CRM Development"],
  },
  {
    slug: "agencies",
    title: "Agencies",
    tagline: "White-label solutions for ambitious agencies.",
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
    relevantServices: ["Web Development", "Web Designing", "Custom Software Development"],
  },
];

export const getIndustryBySlug = (slug: string) => industries.find(i => i.slug === slug);
