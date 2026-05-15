import {
  Code2,
  Component,
  Hotel,
  LayoutDashboard,
  Palette,
  Rocket,
  ShoppingCart,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface LandingPageData {
  slug: string;
  title: string;
  eyebrow: string;
  h1: string;
  highlight: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  icon: LucideIcon;
  heroImage: string;
  stats: { value: string; label: string }[];
  painPoints: string[];
  benefits: string[];
  process: { title: string; description: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
}

export const landingPages: LandingPageData[] = [
  {
    slug: "web-development-company-india",
    title: "Web Development Company in India",
    eyebrow: "SEO-Friendly Web Development",
    h1: "Web Development Company in India for Fast, Lead-Ready Websites",
    highlight: "lead-ready websites",
    description:
      "CodeNClicks builds responsive business websites, custom web applications, and conversion-focused landing pages for Indian and global brands that need speed, clean UX, and measurable inquiries.",
    seoTitle: "Web Development Company in India | CodeNClicks IT Solutions",
    metaDescription:
      "Hire CodeNClicks for SEO-friendly web development in India. We build fast business websites, React apps, landing pages, and custom web platforms that convert visitors into leads.",
    primaryKeyword: "web development company in India",
    secondaryKeywords: [
      "best web development company",
      "affordable web development company",
      "business website development company",
      "SEO friendly website development",
      "fast website development services",
    ],
    icon: Code2,
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=620&fit=crop",
    stats: [
      { value: "7-20", label: "Days for most websites" },
      { value: "<2s", label: "Performance target" },
      { value: "50+", label: "Projects delivered" },
      { value: "24h", label: "Proposal response" },
    ],
    painPoints: [
      "Your current website looks fine but does not generate qualified leads.",
      "Pages load slowly on mobile and lose users before they contact you.",
      "Your service pages are not structured around the keywords buyers search.",
      "You need a professional site without enterprise-agency delays.",
    ],
    benefits: [
      "Clean React, WordPress, or custom stack based on your growth needs.",
      "SEO-ready page architecture with schema, internal links, and metadata.",
      "Conversion sections for trust, pricing clarity, FAQs, and lead capture.",
      "Mobile-first layouts tested for Indian and international users.",
    ],
    process: [
      { title: "Search and Market Mapping", description: "We map your offers to buyer keywords, service pages, and competitor gaps before design starts." },
      { title: "UX and Content Structure", description: "We plan sections that answer objections, prove credibility, and guide visitors toward a consultation." },
      { title: "Development and SEO Setup", description: "We build responsive pages with clean code, analytics readiness, schema, and performance checks." },
      { title: "Launch and Improve", description: "We deploy, monitor indexing, review form quality, and improve pages as data arrives." },
    ],
    deliverables: [
      "Responsive website or web app",
      "SEO metadata and sitemap inclusion",
      "Contact and WhatsApp lead paths",
      "Speed optimization",
      "Google Analytics and Search Console readiness",
      "30-day support window",
    ],
    faqs: [
      { q: "How fast can you build a business website?", a: "A focused 5-page website usually takes 7 to 10 working days. Larger business websites, ecommerce stores, and custom web apps need a scoped timeline after discovery." },
      { q: "Will the website be SEO-ready from launch?", a: "Yes. We include crawlable routes, page-specific metadata, schema, internal links, image alt text, sitemap inclusion, and basic performance optimization." },
      { q: "Do you work with clients outside India?", a: "Yes. CodeNClicks serves India, the United States, the United Kingdom, the UAE, and other global markets through remote-first delivery." },
    ],
    relatedLinks: [
      { label: "Web Development Service", href: "/services/web-development" },
      { label: "Website Pricing", href: "/pricing" },
      { label: "Startup Websites", href: "/website-development-for-startups" },
    ],
  },
  {
    slug: "website-development-for-startups",
    title: "Website Development for Startups",
    eyebrow: "Startup Websites and MVP Launches",
    h1: "Website Development for Startups That Need to Launch and Learn Fast",
    highlight: "launch and learn fast",
    description:
      "We help founders turn early-stage ideas into credible websites, landing pages, SaaS MVPs, and investor-ready digital products without bloated scope or slow agency cycles.",
    seoTitle: "Website Development for Startups | Fast Startup Websites",
    metaDescription:
      "Startup website development services for founders who need landing pages, SaaS MVPs, pitch-ready product sites, and SEO-friendly launch pages built quickly.",
    primaryKeyword: "website development for startups",
    secondaryKeywords: [
      "startup website development agency",
      "startup SaaS development agency",
      "MVP website development",
      "website for new business",
      "landing page development for startups",
    ],
    icon: Rocket,
    heroImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=620&fit=crop",
    stats: [
      { value: "7-14", label: "Days for launch pages" },
      { value: "MVP", label: "Scope-first delivery" },
      { value: "100%", label: "Source ownership" },
      { value: "Lean", label: "Founder-friendly process" },
    ],
    painPoints: [
      "You need a site that makes your startup look credible before you have a big brand.",
      "You are unsure which features belong in version one.",
      "You need to validate demand before spending heavily on engineering.",
      "You want copy, design, analytics, and development working together.",
    ],
    benefits: [
      "Launch-ready messaging for users, investors, and early customers.",
      "Lean MVP planning so you build the smallest useful version first.",
      "SaaS-ready architecture for authentication, dashboards, payments, and admin flows.",
      "Conversion tracking and content structure for early growth experiments.",
    ],
    process: [
      { title: "Founder Discovery", description: "We clarify the audience, offer, use case, and launch goal before writing or building." },
      { title: "Lean Scope", description: "We separate must-have launch features from later roadmap items to protect time and budget." },
      { title: "Design and Build", description: "We create a polished interface, fast frontend, and practical backend integrations." },
      { title: "Launch Feedback Loop", description: "We help you track signups, inquiries, objections, and early user behavior." },
    ],
    deliverables: [
      "Startup landing page or website",
      "Offer and CTA copy",
      "Lead form and analytics setup",
      "SaaS MVP planning",
      "Pitch-ready visuals",
      "Post-launch iteration support",
    ],
    faqs: [
      { q: "Can you build only a startup landing page first?", a: "Yes. Many founders start with a focused landing page to test positioning, collect leads, or support fundraising before investing in a full MVP." },
      { q: "Do you help define MVP features?", a: "Yes. We help prioritize features around user value, launch speed, budget, and what you need to validate first." },
      { q: "Can you build the full SaaS later?", a: "Yes. We can start with a landing page, then move into SaaS architecture, dashboards, billing, user roles, and integrations." },
    ],
    relatedLinks: [
      { label: "SaaS Development", href: "/saas-development-company" },
      { label: "Custom Software", href: "/services/custom-software-development" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "saas-development-company",
    title: "SaaS Development Company",
    eyebrow: "Custom SaaS Product Development",
    h1: "SaaS Development Company for Scalable, Subscription-Ready Products",
    highlight: "subscription-ready products",
    description:
      "We design and develop SaaS platforms with multi-user dashboards, subscriptions, secure access, analytics, integrations, and clean product UX for founders and growing teams.",
    seoTitle: "SaaS Development Company | Custom SaaS Product Development",
    metaDescription:
      "Build a secure, scalable SaaS product with CodeNClicks. MVP planning, multi-tenant architecture, dashboards, payments, analytics, and ongoing SaaS development support.",
    primaryKeyword: "SaaS development company",
    secondaryKeywords: [
      "custom SaaS development",
      "SaaS MVP development",
      "startup SaaS development agency",
      "multi tenant SaaS development",
      "B2B SaaS development company",
    ],
    icon: Component,
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=620&fit=crop",
    stats: [
      { value: "MVP", label: "First-version focus" },
      { value: "RBAC", label: "Role-based access" },
      { value: "API", label: "Integration-ready" },
      { value: "Cloud", label: "Scalable deployment" },
    ],
    painPoints: [
      "Your idea needs more than a static website but less than a bloated enterprise build.",
      "You need subscription billing, user roles, onboarding, and dashboards done correctly.",
      "Your users need a polished product experience, not an internal-looking tool.",
      "You need a technical partner who can explain tradeoffs clearly.",
    ],
    benefits: [
      "Architecture planned for accounts, users, roles, billing, and future modules.",
      "Product UX that helps users activate faster and understand value quickly.",
      "Secure authentication, admin controls, and API-first integration planning.",
      "Transparent milestones for founders, agencies, and product owners.",
    ],
    process: [
      { title: "Product Blueprint", description: "We define personas, workflows, modules, data model, integrations, and MVP boundaries." },
      { title: "Design System", description: "We design product screens that feel modern, usable, and easy to extend." },
      { title: "Agile Build", description: "We develop in milestones with demos, QA, and documentation as the platform grows." },
      { title: "Launch and Scale", description: "We deploy, monitor, and prepare the roadmap for billing, analytics, and growth features." },
    ],
    deliverables: [
      "SaaS MVP or full product build",
      "Admin and user dashboards",
      "Authentication and role management",
      "Subscription/payment integration",
      "API integrations",
      "Cloud deployment support",
    ],
    faqs: [
      { q: "How long does SaaS MVP development take?", a: "A focused SaaS MVP typically takes 4 to 8 weeks depending on modules, integrations, and feedback cycles. Larger SaaS platforms are estimated by milestone." },
      { q: "Can you build a multi-tenant SaaS product?", a: "Yes. We can plan multi-tenant account structures, role permissions, billing, usage limits, and admin tooling based on your business model." },
      { q: "Do you provide source code ownership?", a: "Yes. Project handover includes source code, deployment notes, and agreed documentation so you retain ownership and flexibility." },
    ],
    relatedLinks: [
      { label: "Custom Software Development", href: "/services/custom-software-development" },
      { label: "React Development", href: "/react-development-company" },
      { label: "Startup Websites", href: "/website-development-for-startups" },
    ],
  },
  {
    slug: "crm-development-company",
    title: "CRM Development Company",
    eyebrow: "Custom CRM and Sales Automation",
    h1: "CRM Development Company for Sales Teams That Need Better Follow-Up",
    highlight: "better follow-up",
    description:
      "We build custom CRM systems for lead management, sales pipelines, WhatsApp/email follow-ups, role-based dashboards, reporting, and business process automation.",
    seoTitle: "CRM Development Company | Custom CRM Software Development",
    metaDescription:
      "Need a custom CRM development company? CodeNClicks builds lead management, sales pipeline, WhatsApp follow-up, reports, dashboards, and CRM automation for growing teams.",
    primaryKeyword: "CRM development company",
    secondaryKeywords: [
      "custom CRM development company",
      "CRM development under 15 days",
      "lead management CRM software",
      "sales CRM development",
      "CRM software development India",
    ],
    icon: Users,
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=620&fit=crop",
    stats: [
      { value: "15+", label: "CRM workflows mapped" },
      { value: "3x", label: "Faster follow-up goal" },
      { value: "Role", label: "Team access controls" },
      { value: "Live", label: "Pipeline visibility" },
    ],
    painPoints: [
      "Leads are getting lost across WhatsApp, spreadsheets, calls, and email.",
      "Your sales team cannot see who needs follow-up today.",
      "Generic CRM tools are too expensive or do not match your workflow.",
      "You need reporting without forcing the team into complicated software.",
    ],
    benefits: [
      "Custom lead stages, reminders, and follow-up rules for your sales process.",
      "Dashboards for owners, managers, and sales teams with role-based access.",
      "Integrations with forms, WhatsApp, email, Google Sheets, and existing tools.",
      "Simple UX so your team actually uses the CRM every day.",
    ],
    process: [
      { title: "Sales Workflow Audit", description: "We map lead sources, stages, team roles, lost-lead reasons, and reporting needs." },
      { title: "CRM Blueprint", description: "We design dashboards, permissions, automation, and data structure around your operations." },
      { title: "Build and Integrate", description: "We develop the CRM, connect lead sources, and test daily sales workflows." },
      { title: "Train and Improve", description: "We help your team adopt the system and improve reports based on real usage." },
    ],
    deliverables: [
      "Lead management dashboard",
      "Sales pipeline tracking",
      "Follow-up reminders",
      "Role-based access",
      "Reports and analytics",
      "WhatsApp/email integrations",
    ],
    faqs: [
      { q: "Can you build a CRM in 15 days?", a: "A lean lead-management CRM can be delivered in about 15 working days when the scope is focused. Advanced automation, integrations, and reporting require a longer timeline." },
      { q: "Can the CRM match our exact sales process?", a: "Yes. That is the main reason to build custom CRM software. We model stages, fields, roles, and reports around your actual workflow." },
      { q: "Can we import spreadsheet data?", a: "Yes. We can migrate clean spreadsheet data into the CRM and help define the fields needed for future reporting." },
    ],
    relatedLinks: [
      { label: "CRM Service", href: "/services/crm-development" },
      { label: "Custom Software", href: "/services/custom-software-development" },
      { label: "Contact Sales", href: "/contact" },
    ],
  },
  {
    slug: "ecommerce-website-development-company",
    title: "Ecommerce Website Development Company",
    eyebrow: "Online Store Development",
    h1: "Ecommerce Website Development Company for Stores That Need More Sales",
    highlight: "more sales",
    description:
      "We build ecommerce websites with product catalogs, payments, checkout flows, inventory tools, SEO-ready category pages, and mobile shopping experiences for D2C and retail brands.",
    seoTitle: "Ecommerce Website Development Company | Online Store Development",
    metaDescription:
      "Launch a fast ecommerce website with CodeNClicks. Shopify, WooCommerce, custom ecommerce, payments, catalog, checkout, inventory, SEO, and conversion optimization.",
    primaryKeyword: "ecommerce website development company",
    secondaryKeywords: [
      "ecommerce development under 15 days",
      "custom ecommerce development company",
      "Shopify development agency India",
      "WooCommerce development company",
      "online store development India",
    ],
    icon: ShoppingCart,
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=620&fit=crop",
    stats: [
      { value: "UPI", label: "India payment ready" },
      { value: "Mobile", label: "Checkout-first UX" },
      { value: "SEO", label: "Category structure" },
      { value: "Store", label: "Admin-ready setup" },
    ],
    painPoints: [
      "Your store gets traffic but checkout friction kills conversions.",
      "Marketplaces take margin and limit customer ownership.",
      "You need product pages that can rank and convert.",
      "Your team needs an easy way to manage products, orders, and offers.",
    ],
    benefits: [
      "Shopify, WooCommerce, or custom ecommerce based on scale and budget.",
      "Fast product discovery, filters, carts, checkout, and payment gateway setup.",
      "SEO-ready product, collection, and category page structure.",
      "CRO improvements for trust, reviews, offers, and abandoned-cart reduction.",
    ],
    process: [
      { title: "Store Strategy", description: "We review products, margins, customer journey, platform needs, and conversion blockers." },
      { title: "Catalog and UX", description: "We plan category structure, product templates, search, filters, checkout, and trust signals." },
      { title: "Build and Integrate", description: "We configure payments, shipping, taxes, inventory, notifications, and analytics." },
      { title: "Launch and Optimize", description: "We test mobile checkout, speed, product pages, and post-launch sales signals." },
    ],
    deliverables: [
      "Ecommerce storefront",
      "Product and category setup",
      "Payment gateway integration",
      "Cart and checkout flow",
      "Admin/order dashboard",
      "SEO and analytics setup",
    ],
    faqs: [
      { q: "Can you build ecommerce under 15 days?", a: "A focused starter store with limited products can be launched in around 15 working days. Larger catalogs, custom features, or marketplace builds need more time." },
      { q: "Which platform should we use?", a: "We recommend Shopify for fast managed stores, WooCommerce for WordPress flexibility, and custom ecommerce when your workflows or scale need deeper control." },
      { q: "Do you optimize ecommerce pages for SEO?", a: "Yes. We plan category URLs, product metadata, internal links, schema readiness, page speed, and content sections for search visibility." },
    ],
    relatedLinks: [
      { label: "Ecommerce Service", href: "/services/ecommerce-development" },
      { label: "SEO Services", href: "/services/seo" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    slug: "hotel-management-system-development-company",
    title: "Hotel Management System Development Company",
    eyebrow: "Hospitality Software and Booking Engines",
    h1: "Hotel Management System Development Company for Direct Bookings",
    highlight: "direct bookings",
    description:
      "We build hotel websites, booking engines, PMS modules, guest communication tools, and hospitality dashboards that help hotels reduce manual work and increase direct reservations.",
    seoTitle: "Hotel Management System Development Company | Booking Engine",
    metaDescription:
      "CodeNClicks develops hotel management systems, booking engines, hotel websites, PMS modules, guest CRM, and hospitality dashboards for hotels, resorts, and stays.",
    primaryKeyword: "hotel management system development company",
    secondaryKeywords: [
      "hotel booking engine development",
      "hotel website development company",
      "hotel PMS software development",
      "hospitality software development",
      "booking system development for hotels",
    ],
    icon: Hotel,
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=620&fit=crop",
    stats: [
      { value: "Direct", label: "Booking focus" },
      { value: "PMS", label: "Workflow-ready" },
      { value: "OTA", label: "Integration planning" },
      { value: "Mobile", label: "Guest-first UX" },
    ],
    painPoints: [
      "Your hotel depends heavily on OTAs and loses margin on commissions.",
      "Booking, billing, guest communication, and room data are disconnected.",
      "Your website does not communicate trust or make booking easy on mobile.",
      "Manual operations create errors during peak occupancy.",
    ],
    benefits: [
      "Hotel websites with room pages, inquiry forms, offers, and booking CTAs.",
      "Booking engine workflows for availability, payments, guest details, and confirmations.",
      "PMS modules for reservations, room status, guests, billing, and reports.",
      "Hospitality SEO pages for location, rooms, amenities, and direct bookings.",
    ],
    process: [
      { title: "Operations Mapping", description: "We map booking sources, room types, guest journey, billing, staff tasks, and reporting needs." },
      { title: "Guest UX Design", description: "We design mobile-first booking and inquiry flows that reduce friction and build trust." },
      { title: "System Development", description: "We build PMS modules, booking workflows, admin tools, and integrations around your hotel operations." },
      { title: "Launch and Training", description: "We deploy, test booking scenarios, and train your team on daily workflows." },
    ],
    deliverables: [
      "Hotel website or portal",
      "Booking engine workflow",
      "Reservation dashboard",
      "Guest CRM and notifications",
      "Payment gateway setup",
      "Reports and admin access",
    ],
    faqs: [
      { q: "Can you build a hotel booking engine?", a: "Yes. We can build booking flows for room availability, date selection, guest details, payment, confirmation, and admin management." },
      { q: "Do you build full PMS software?", a: "Yes. We can develop focused PMS modules or a broader hotel management system depending on your workflows and budget." },
      { q: "Can this help reduce OTA dependency?", a: "A better direct booking website and booking engine can support OTA reduction, especially when combined with SEO, Google Hotel Ads, and direct guest communication." },
    ],
    relatedLinks: [
      { label: "Hospitality Industry", href: "/industries/hospitality" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
  {
    slug: "react-development-company",
    title: "React Development Company",
    eyebrow: "React and Frontend Engineering",
    h1: "React Development Company for Fast, Modern Web Applications",
    highlight: "modern web applications",
    description:
      "We build React websites, dashboards, SaaS frontends, ecommerce interfaces, and custom web apps with clean component architecture, responsive UX, and performance-focused delivery.",
    seoTitle: "React Development Company | React Web App Developers",
    metaDescription:
      "Hire a React development company for fast web apps, dashboards, SaaS frontends, ecommerce interfaces, TypeScript, Tailwind CSS, and API integrations.",
    primaryKeyword: "React development company",
    secondaryKeywords: [
      "React developers India",
      "React web application development",
      "frontend development agency",
      "full stack development agency",
      "TypeScript React development",
    ],
    icon: LayoutDashboard,
    heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&h=620&fit=crop",
    stats: [
      { value: "React", label: "Frontend focus" },
      { value: "TS", label: "Type-safe builds" },
      { value: "API", label: "Backend-ready" },
      { value: "UX", label: "Component systems" },
    ],
    painPoints: [
      "Your app needs a modern frontend that stays maintainable as features grow.",
      "Your current interface is slow, inconsistent, or hard to extend.",
      "You need dashboards, filters, charts, forms, and API states done cleanly.",
      "You want a frontend team that understands SEO, accessibility, and conversion.",
    ],
    benefits: [
      "Reusable React components aligned to your design system.",
      "Fast UI states for dashboards, forms, ecommerce, and SaaS workflows.",
      "API integration, validation, loading states, and error handling.",
      "Performance, accessibility, and responsive behavior built into delivery.",
    ],
    process: [
      { title: "Frontend Audit", description: "We review current UI, data flows, API needs, and component reuse opportunities." },
      { title: "Architecture", description: "We plan routes, components, state, forms, and reusable patterns." },
      { title: "Development", description: "We build React pages and flows with responsive styling, QA, and API integration." },
      { title: "Optimization", description: "We test performance, accessibility, responsiveness, and production readiness." },
    ],
    deliverables: [
      "React web app frontend",
      "Reusable component library",
      "Dashboard and forms",
      "API integration",
      "Responsive QA",
      "Performance optimization",
    ],
    faqs: [
      { q: "Do you work with existing React projects?", a: "Yes. We can improve an existing React codebase, add features, refactor components, optimize performance, or rebuild unstable parts." },
      { q: "Can you build full stack apps too?", a: "Yes. React frontend can be paired with Node.js, Laravel, Python, Firebase, Supabase, or other backend stacks based on the project." },
      { q: "Do you use TypeScript?", a: "Yes. We prefer TypeScript for scalable React applications because it improves maintainability and catches many errors earlier." },
    ],
    relatedLinks: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "SaaS Development", href: "/saas-development-company" },
      { label: "Technologies", href: "/technologies" },
    ],
  },
  {
    slug: "ui-ux-design-agency",
    title: "UI UX Design Agency",
    eyebrow: "Product and Website Design",
    h1: "UI UX Design Agency for Websites, SaaS Products, and Mobile Interfaces",
    highlight: "websites, SaaS products, and mobile interfaces",
    description:
      "We design premium user interfaces, website layouts, product dashboards, ecommerce flows, and Figma systems that feel trustworthy, modern, and easy to use.",
    seoTitle: "UI UX Design Agency | Website and SaaS Product Design",
    metaDescription:
      "CodeNClicks is a UI UX design agency for websites, SaaS dashboards, ecommerce UX, mobile interfaces, Figma design systems, and conversion-focused product design.",
    primaryKeyword: "UI UX design agency",
    secondaryKeywords: [
      "website design company India",
      "responsive website design company",
      "SaaS UI UX design",
      "Figma design agency",
      "website redesign services",
    ],
    icon: Palette,
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=620&fit=crop",
    stats: [
      { value: "Figma", label: "Design source" },
      { value: "CRO", label: "Conversion lens" },
      { value: "Mobile", label: "Responsive first" },
      { value: "System", label: "Reusable UI kit" },
    ],
    painPoints: [
      "Your website or product looks generic and does not build enough trust.",
      "Users struggle to understand where to click or what to do next.",
      "Your design is inconsistent across pages, forms, and dashboards.",
      "Developers need cleaner Figma files and component documentation.",
    ],
    benefits: [
      "Premium visual direction without losing usability or performance.",
      "Conversion-focused layouts for service pages, landing pages, and forms.",
      "Product UX for dashboards, onboarding, settings, reports, and workflows.",
      "Developer-ready Figma files with components, states, and responsive notes.",
    ],
    process: [
      { title: "UX Discovery", description: "We review audience intent, business goals, competitors, and friction points." },
      { title: "Wireframes", description: "We structure flows, content hierarchy, and CTA placement before polishing visuals." },
      { title: "Visual Design", description: "We create responsive Figma screens, components, and polished interaction states." },
      { title: "Handoff", description: "We prepare assets, design notes, and developer-ready files for smooth implementation." },
    ],
    deliverables: [
      "Website UI design",
      "SaaS dashboard design",
      "Figma source files",
      "Responsive layouts",
      "Design system basics",
      "Developer handoff",
    ],
    faqs: [
      { q: "Can you redesign an existing website?", a: "Yes. We can redesign pages while preserving your brand identity, improving content hierarchy, trust, and conversion paths." },
      { q: "Do you only design or also develop?", a: "We do both. You can hire us for Figma-only UI/UX work or complete design-to-development delivery." },
      { q: "Can you design SaaS dashboards?", a: "Yes. We design dashboards, tables, filters, onboarding, settings, billing, reports, and admin workflows for SaaS products." },
    ],
    relatedLinks: [
      { label: "Web Designing", href: "/services/web-designing" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
];

export const getLandingPageBySlug = (slug: string) => landingPages.find((page) => page.slug === slug);
