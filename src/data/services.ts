import { Code, Palette, Cpu, ShoppingCart, Users, Megaphone, Search, Target, PenTool } from "lucide-react";

export interface ServicePlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  process: { step: string; title: string; description: string }[];
  benefits: string[];
  plans: ServicePlan[];
}

export const services: ServiceData[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Scalable, high-performance web applications built to convert.",
    description: "We engineer lightning-fast, secure, and scalable web applications using cutting-edge frameworks. From progressive web apps to enterprise platforms, every line of code is crafted for performance, accessibility, and business impact.",
    icon: Code,
    process: [
      { step: "01", title: "Discovery & Strategy", description: "Deep-dive into your business goals, audience, and competitive landscape to define the technical roadmap." },
      { step: "02", title: "Architecture & Design", description: "Blueprint the system architecture, select the optimal tech stack, and design intuitive user flows." },
      { step: "03", title: "Agile Development", description: "Sprint-based development with continuous integration, testing, and stakeholder reviews." },
      { step: "04", title: "Launch & Optimize", description: "Rigorous QA, performance optimization, and seamless deployment with ongoing support." },
    ],
    benefits: ["99.9% uptime guarantee", "Sub-2-second load times", "SEO-optimized architecture", "WCAG 2.1 accessibility", "Scalable cloud infrastructure", "24/7 monitoring & support"],
    plans: [
      { name: "Starter", price: "$2,999", description: "Perfect for small businesses launching online", features: ["Up to 10 pages", "Responsive design", "Basic SEO setup", "Contact form integration", "3 months support", "SSL certificate"] },
      { name: "Professional", price: "$7,999", description: "For growing businesses that need more power", features: ["Up to 30 pages", "Custom animations", "Advanced SEO", "CMS integration", "API integrations", "6 months support", "Performance optimization"], popular: true },
      { name: "Enterprise", price: "$18,999+", description: "Full-scale web applications for enterprises", features: ["Unlimited pages", "Custom architecture", "Microservices", "CI/CD pipeline", "Load balancing", "12 months support", "Dedicated team", "SLA guarantee"] },
    ],
  },
  {
    slug: "web-designing",
    title: "Web Designing",
    tagline: "Award-worthy designs that captivate and convert.",
    description: "Our design team creates visually stunning, conversion-optimized websites that reflect your brand's premium positioning. Every pixel is intentional, every interaction is delightful.",
    icon: Palette,
    process: [
      { step: "01", title: "Brand Immersion", description: "Understand your brand DNA, audience personas, and design aspirations." },
      { step: "02", title: "Wireframing", description: "Low-fidelity wireframes to map user journeys and page structures." },
      { step: "03", title: "Visual Design", description: "High-fidelity mockups with motion design, micro-interactions, and responsive layouts." },
      { step: "04", title: "Handoff & QA", description: "Pixel-perfect developer handoff with interactive prototypes and design system documentation." },
    ],
    benefits: ["Conversion-focused layouts", "Brand-consistent design systems", "Mobile-first approach", "Interactive prototypes", "Accessibility compliance", "Design system documentation"],
    plans: [
      { name: "Essential", price: "$1,999", description: "Clean, professional design for startups", features: ["5 page designs", "Mobile responsive", "2 revision rounds", "Brand color guide", "Stock imagery", "Figma files"] },
      { name: "Premium", price: "$4,999", description: "Elevated design with custom illustrations", features: ["15 page designs", "Custom illustrations", "Micro-interactions", "4 revision rounds", "Icon design", "Design system", "Prototype"], popular: true },
      { name: "Bespoke", price: "$12,999+", description: "Awwwards-level design experience", features: ["Unlimited pages", "3D elements", "Custom animations", "Motion design", "Unlimited revisions", "Brand guidelines", "Video integration", "Art direction"] },
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    tagline: "Bespoke solutions engineered for your unique challenges.",
    description: "Off-the-shelf software limits your potential. We build custom solutions tailored to your workflows, integrations, and growth trajectory — from internal tools to customer-facing platforms.",
    icon: Cpu,
    process: [
      { step: "01", title: "Requirements Analysis", description: "Comprehensive stakeholder interviews and workflow mapping." },
      { step: "02", title: "System Design", description: "Architecture design, database modeling, and integration planning." },
      { step: "03", title: "Iterative Development", description: "Agile sprints with regular demos, feedback loops, and adaptive planning." },
      { step: "04", title: "Deployment & Training", description: "Staged rollout, user training, and knowledge transfer." },
    ],
    benefits: ["Tailored to your workflows", "Full ownership of code", "Scalable architecture", "Third-party integrations", "Ongoing maintenance", "Data security compliance"],
    plans: [
      { name: "MVP", price: "$9,999", description: "Validate your idea with a minimum viable product", features: ["Core features only", "Single platform", "Basic integrations", "3 months development", "Bug fixes included", "Source code delivery"] },
      { name: "Growth", price: "$29,999", description: "Full-featured solution for scaling businesses", features: ["Full feature set", "Multi-platform", "API development", "6 months development", "Admin dashboard", "Analytics", "1 year support"], popular: true },
      { name: "Enterprise", price: "$79,999+", description: "Mission-critical enterprise software", features: ["Complex workflows", "Microservices", "CI/CD", "Security audits", "Load testing", "24/7 support", "Dedicated team", "SLA"] },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    tagline: "Online stores that sell while you sleep.",
    description: "We build high-converting e-commerce experiences — from Shopify stores to fully custom platforms. Our solutions are optimized for speed, SEO, and seamless checkout experiences.",
    icon: ShoppingCart,
    process: [
      { step: "01", title: "Market Research", description: "Analyze your market, competitors, and customer buying behavior." },
      { step: "02", title: "Platform Selection", description: "Choose the right platform based on scale, budget, and feature needs." },
      { step: "03", title: "Design & Development", description: "Build a conversion-optimized store with seamless UX and fast checkout." },
      { step: "04", title: "Launch & Growth", description: "SEO optimization, payment integration, and marketing automation setup." },
    ],
    benefits: ["Optimized checkout flows", "Multi-currency support", "Inventory management", "Payment gateway integration", "Mobile commerce ready", "Analytics & reporting"],
    plans: [
      { name: "Starter Store", price: "$3,999", description: "Get selling online quickly", features: ["Up to 100 products", "Payment integration", "Responsive design", "Basic SEO", "Order management", "Email notifications"] },
      { name: "Growth Store", price: "$9,999", description: "Scale your online revenue", features: ["Unlimited products", "Multi-currency", "Advanced filters", "Wishlist & reviews", "Email marketing", "Inventory sync", "Analytics dashboard"], popular: true },
      { name: "Enterprise Store", price: "$24,999+", description: "Enterprise-grade commerce platform", features: ["Custom platform", "Multi-vendor", "ERP integration", "AI recommendations", "Subscription billing", "B2B portal", "Dedicated support", "Custom APIs"] },
    ],
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    tagline: "Manage relationships. Maximize revenue.",
    description: "Custom CRM solutions that streamline your sales pipeline, automate follow-ups, and give you 360° visibility into every customer interaction.",
    icon: Users,
    process: [
      { step: "01", title: "Process Mapping", description: "Map your current sales, marketing, and support workflows." },
      { step: "02", title: "CRM Design", description: "Design intuitive dashboards, pipelines, and automation rules." },
      { step: "03", title: "Development & Integration", description: "Build and integrate with your existing tools — email, calendar, analytics." },
      { step: "04", title: "Training & Adoption", description: "Team training, data migration, and adoption support." },
    ],
    benefits: ["360° customer view", "Automated follow-ups", "Pipeline management", "Custom reporting", "Third-party integrations", "Role-based access"],
    plans: [
      { name: "Basic CRM", price: "$5,999", description: "Essential CRM for small teams", features: ["Contact management", "Deal pipeline", "Email integration", "Basic reports", "Mobile access", "5 user seats"] },
      { name: "Advanced CRM", price: "$14,999", description: "Full-featured CRM for growing teams", features: ["Advanced pipeline", "Marketing automation", "Custom fields", "API access", "Analytics", "15 user seats", "Support portal"], popular: true },
      { name: "Enterprise CRM", price: "$39,999+", description: "Enterprise-scale relationship management", features: ["AI lead scoring", "Multi-department", "Custom workflows", "ERP integration", "Unlimited seats", "Dedicated support", "Data migration", "SLA"] },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Data-driven strategies that deliver measurable growth.",
    description: "We combine creative storytelling with performance marketing to drive qualified traffic, generate leads, and maximize your ROI across every digital channel.",
    icon: Megaphone,
    process: [
      { step: "01", title: "Audit & Analysis", description: "Comprehensive audit of current marketing efforts and competitor landscape." },
      { step: "02", title: "Strategy Development", description: "Data-backed marketing strategy aligned with business objectives." },
      { step: "03", title: "Campaign Execution", description: "Multi-channel campaign launch with A/B testing and optimization." },
      { step: "04", title: "Reporting & Scaling", description: "Performance analytics, insights, and scaling winning strategies." },
    ],
    benefits: ["Multi-channel strategy", "Data-driven decisions", "Content marketing", "Social media management", "Email campaigns", "Conversion optimization"],
    plans: [
      { name: "Starter", price: "$1,499/mo", description: "Essential marketing for startups", features: ["2 social platforms", "8 posts/month", "Basic analytics", "Monthly report", "Email newsletter", "Content calendar"] },
      { name: "Growth", price: "$3,999/mo", description: "Accelerate your digital presence", features: ["4 social platforms", "20 posts/month", "Paid ads management", "A/B testing", "Landing pages", "Bi-weekly reports", "Content creation"], popular: true },
      { name: "Scale", price: "$8,999/mo", description: "Full-scale marketing department", features: ["All platforms", "Daily posting", "Influencer outreach", "Video content", "PR campaigns", "Weekly reports", "Dedicated strategist", "Marketing automation"] },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    tagline: "Dominate search. Own your market.",
    description: "Our SEO strategies go beyond keywords. We engineer technical excellence, create authoritative content, and build sustainable organic growth that compounds over time.",
    icon: Search,
    process: [
      { step: "01", title: "Technical Audit", description: "Deep crawl analysis, site speed, Core Web Vitals, and indexability review." },
      { step: "02", title: "Keyword Strategy", description: "Intent-based keyword mapping and content gap analysis." },
      { step: "03", title: "On-Page & Content", description: "Optimize existing content and create new, authoritative pages." },
      { step: "04", title: "Link Building & PR", description: "Earn high-authority backlinks through digital PR and outreach." },
    ],
    benefits: ["Technical SEO excellence", "Content strategy", "Local SEO optimization", "Link building", "Core Web Vitals", "Rank tracking & reporting"],
    plans: [
      { name: "Local SEO", price: "$999/mo", description: "Dominate local search results", features: ["Google Business optimization", "5 target keywords", "Local citations", "Monthly reporting", "On-page optimization", "Review management"] },
      { name: "National SEO", price: "$2,499/mo", description: "Compete nationally for high-value terms", features: ["20 target keywords", "Technical SEO", "Content creation", "Link building", "Bi-weekly reporting", "Competitor analysis", "Schema markup"], popular: true },
      { name: "Enterprise SEO", price: "$5,999/mo", description: "Large-scale SEO for enterprise sites", features: ["Unlimited keywords", "International SEO", "Migration support", "Custom dashboards", "Weekly reporting", "Dedicated SEO team", "API integrations", "Training"] },
    ],
  },
  {
    slug: "google-meta-ads",
    title: "Google & Meta Ads",
    tagline: "Maximum ROI from every ad dollar spent.",
    description: "Precision-targeted advertising on Google and Meta platforms. We create, optimize, and scale campaigns that deliver qualified leads at the lowest cost per acquisition.",
    icon: Target,
    process: [
      { step: "01", title: "Account Audit", description: "Review existing campaigns, identify waste, and find quick wins." },
      { step: "02", title: "Campaign Architecture", description: "Build structured campaigns with precise targeting and compelling creatives." },
      { step: "03", title: "Launch & Optimize", description: "A/B test ads, refine audiences, and optimize bidding strategies." },
      { step: "04", title: "Scale & Report", description: "Scale winners, pause underperformers, and deliver transparent ROI reports." },
    ],
    benefits: ["Google Search & Display", "Meta (Facebook & Instagram)", "Retargeting campaigns", "Landing page optimization", "Conversion tracking", "Transparent reporting"],
    plans: [
      { name: "Starter Ads", price: "$999/mo", description: "Get started with paid advertising", features: ["1 platform", "Up to $2K ad spend", "Campaign setup", "Monthly optimization", "Basic reporting", "Conversion tracking"] },
      { name: "Performance Ads", price: "$2,499/mo", description: "Maximize your ad performance", features: ["2 platforms", "Up to $10K ad spend", "A/B testing", "Retargeting", "Landing pages", "Bi-weekly optimization", "Custom audiences"], popular: true },
      { name: "Scale Ads", price: "$5,999/mo", description: "Enterprise-level paid media management", features: ["All platforms", "Unlimited ad spend", "Dynamic creatives", "Multi-funnel", "Weekly optimization", "Custom dashboards", "Dedicated manager", "Attribution modeling"] },
    ],
  },
  {
    slug: "graphics-designing",
    title: "Graphics Designing",
    tagline: "Visual storytelling that builds brands.",
    description: "From brand identities to marketing collateral, our design team creates visuals that communicate your brand's values, capture attention, and drive engagement.",
    icon: PenTool,
    process: [
      { step: "01", title: "Creative Brief", description: "Understand your brand, audience, and design objectives." },
      { step: "02", title: "Concept Development", description: "Explore multiple creative directions and present concepts." },
      { step: "03", title: "Design Execution", description: "Refine the selected direction with meticulous attention to detail." },
      { step: "04", title: "Delivery & Guidelines", description: "Deliver print-ready and digital-ready files with usage guidelines." },
    ],
    benefits: ["Brand identity design", "Marketing collateral", "Social media graphics", "Presentation design", "Packaging design", "Print & digital formats"],
    plans: [
      { name: "Essential", price: "$999", description: "Core brand design package", features: ["Logo design", "Business card", "Letterhead", "3 concepts", "2 revisions", "Source files"] },
      { name: "Professional", price: "$3,499", description: "Complete brand identity system", features: ["Logo & variations", "Brand guidelines", "Social media kit", "Email template", "Presentation template", "Unlimited revisions", "Print collateral"], popular: true },
      { name: "Agency", price: "$7,999+", description: "Full-service design retainer", features: ["Complete brand system", "Packaging design", "Annual report", "Environmental design", "Motion graphics", "Brand photography direction", "Style guide", "Ongoing support"] },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
