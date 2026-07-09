import { Code, Palette, Cpu, ShoppingCart, Users, Megaphone, Search, Target, PenTool, type LucideIcon } from "lucide-react";

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
  icon: LucideIcon;
  process: { step: string; title: string; description: string }[];
  benefits: string[];
  plans: ServicePlan[];
}

export const services: ServiceData[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Fast, SEO-friendly websites and [React development company](/react-development-company) applications built to generate leads.",
    description: "We build responsive business websites, [startup website development](/website-development-for-startups) solutions, React web apps, and [custom software development](/services/custom-software-development) platforms with clean code, [topical search technologies](/technologies) structure, fast loading, and conversion-focused [case studies](/case-studies) user journeys.",
    icon: Code,
    process: [
      { step: "01", title: "Discovery & SEO Strategy", description: "We define your audience, offer, competitors, target keywords, conversion goals, and technical roadmap." },
      { step: "02", title: "UX & Architecture", description: "We plan page hierarchy, user flows, tech stack, CMS needs, integrations, and scalable component structure." },
      { step: "03", title: "Development & QA", description: "We build responsive pages with clean code, form handling, analytics readiness, accessibility, and testing." },
      { step: "04", title: "Launch & Optimization", description: "We deploy, check indexing assets, optimize speed, and support improvements after launch." },
    ],
    benefits: ["SEO-ready structure", "Sub-2-second performance target", "Mobile-first responsive UX", "Lead forms and WhatsApp paths", "Analytics and tracking readiness", "Scalable maintenance support"],
    plans: [
      {
        name: "Landing Page",
        price: "From INR 3999 /-",
        description: "Perfect for marketing campaigns, ads, or single product promotions. A high-converting, fast, and mobile-responsive landing page designed to generate leads and sales.",
        features: [
          "1 High-Converting Landing Page",
          "Mobile Responsive Design",
          "Lead/Contact Form Integration",
          "Basic On-Page SEO",
          "Fast Loading Speed",
          "WhatsApp Chat Integration",
          "SSL Certificate Setup",
          "1 Month Free Support"
        ]
      },

      {
        name: "Starter Website",
        price: "From INR 7999 /-",
        description: "Ideal for small businesses and startups who want a professional online presence. Includes essential pages, contact form, mobile responsive design, and basic SEO setup.",
        features: [
          "Up to 5 Pages Website",
          "Mobile Responsive Design",
          "Contact Form Integration",
          "WhatsApp Chat Integration",
          "Basic On-Page SEO",
          "Google Map Integration",
          "SSL Certificate Setup",
          "Basic Speed Optimization",
          "7-10 Days Delivery",
          "1 Month Free Support"
        ]
      },

      {
        name: "Business Website",
        price: "From INR 19999 /-",
        description: "Best for growing businesses that want more leads and customers. Comes with custom design, multiple pages, blog setup, speed optimization, and SEO-ready structure.",
        features: [
          "Up to 10-12 Pages Website",
          "Custom UI Design",
          "Blog/News Section",
          "Lead Generation Forms",
          "Advanced On-Page SEO Setup",
          "Speed Optimization",
          "Google Analytics Integration",
          "CMS/Admin Panel",
          "Social Media Integration",
          "15-20 Days Delivery",
          "2 Months Frees Support"
        ],
        popular: true,
      },

      {
        name: "Custom Solution",
        price: "From INR 35999 /-",
        description: "For businesses that need advanced features, custom functionality, or web applications. We design and develop fully custom solutions based on your business needs.",
        features: [
          "Custom Design & Development",
          "Custom Features & Functionality",
          "Ecommerce / Booking / Portal / Web App",
          "Custom Admin Panel / Dashboard",
          "API & Third-Party Integrations",
          "Advanced SEO & Performance Optimization",
          "Scalable Architecture",
          "Priority Support",
          "45-60 Days Delivery",
          "12 Months Frees Premium Support"
        ]
      },
    ],
  },
  {
  slug: "web-designing",
  title: "Web Designing",
  tagline: "Premium website UI/UX that builds trust and guides action.",
  description: "We design modern, responsive websites, landing pages, and product interfaces that communicate value clearly, reduce friction, and help visitors move confidently toward contact, purchase, or signup.",
  icon: Palette,

  process: [
    { step: "01", title: "Brand Discovery", description: "We understand your brand, target audience, and design goals." },
    { step: "02", title: "Wireframing", description: "We create wireframes to plan layout, user flow, and structure." },
    { step: "03", title: "UI Design", description: "We design modern, high-quality website UI with responsive layouts." },
    { step: "04", title: "Prototype & Handoff", description: "We deliver Figma files, prototype, and developer-ready design." },
  ],

  benefits: [
    "Modern UI/UX Design",
    "Conversion-Focused Layouts",
    "Mobile-First Design",
    "Figma Source Files",
    "Interactive Prototypes",
    "User-Friendly Navigation",
    "Brand Consistent Design",
    "Developer-Friendly Files"
  ],

  plans: [
    {
      name: "Landing Page Design",
      price: "From INR 3999 /-",
      description: "Perfect for ad campaigns, product pages, and lead generation landing pages.",
      features: [
        "1 Landing Page Design",
        "Mobile Responsive Layout",
        "Figma Design File",
        "Basic UI Components",
        "1 Revision Round",
        "2-3 Days Delivery"
      ]
    },

    {
      name: "Starter Website Design",
      price: "From INR 7999 /-",
      description: "Clean and professional design for small businesses and startups.",
      features: [
        "Up to 5 Page Designs",
        "Mobile Responsive Design",
        "Figma Design File",
        "Brand Color & Font Setup",
        "2 Revision Rounds",
        "5-7 Days Delivery"
      ]
    },

    {
      name: "Business Website Design",
      price: "From INR 14999 /-",
      description: "Advanced UI/UX design for growing businesses and brands.",
      features: [
        "Up to 10-12 Page Designs",
        "Custom UI Design",
        "Interactive Prototype",
        "Design System / UI Kit",
        "3 Revision Rounds",
        "Developer Handoff",
        "10-14 Days Delivery"
      ],
      popular: true
    },

    {
      name: "Custom / Premium Design",
      price: "From INR 24999 /-",
      description: "Premium custom UI/UX design for brands, ecommerce, and web applications.",
      features: [
        "Custom UI/UX Design",
        "Web App / Ecommerce Design",
        "Advanced Components & Layouts",
        "Full Design System",
        "Interactive Prototype",
        "Priority Support",
        "Unlimited Revisions",
        "15-25 Days Delivery"
      ]
    }
  ]
},
  {
  slug: "custom-software-development",
  title: "Custom Software Development",
  tagline: "Custom software built around your workflow, not the other way around.",
  description: "We build secure business software, dashboards, portals, SaaS platforms, automation tools, and internal systems tailored to how your team actually works.",

  icon: Cpu,

  process: [
    { step: "01", title: "Requirement Discovery", description: "We understand your business process, goals, and pain points in detail." },
    { step: "02", title: "Planning & Architecture", description: "We design system flow, database structure, and scalable architecture." },
    { step: "03", title: "Development & Testing", description: "Agile development with regular updates, testing, and improvements." },
    { step: "04", title: "Launch & Support", description: "Smooth deployment, team training, and ongoing support for your software." },
  ],

  benefits: [
    "Custom CRM / ERP / Dashboard Solutions",
    "Business Process Automation",
    "Scalable & Secure Architecture",
    "API & Third-Party Integrations",
    "Cloud-Based Access (Anytime, Anywhere)",
    "Full Source Code Ownership",
    "Future-Ready & Expandable",
    "Ongoing Support & Maintenance"
  ],

  plans: [
    {
      name: "Starter MVP",
      price: "From INR 24999 /-",
      description: "Perfect for startups and ideas - build a basic software or MVP to validate your concept quickly.",
      features: [
        "Basic Custom Software / MVP",
        "Core Features Development",
        "Single User Role System",
        "Basic Admin Panel",
        "Database Setup",
        "Basic UI Design",
        "Deployment Assistance",
        "2-4 Weeks Delivery",
        "1 Month Free Support"
      ]
    },

    {
      name: "Business Solution",
      price: "From INR 59999 /-",
      description: "Ideal for businesses looking to automate operations, manage data, and improve efficiency.",
      features: [
        "Custom CRM / Dashboard System",
        "Multi-User Roles & Permissions",
        "Advanced Admin Panel",
        "API Integrations",
        "Reporting & Analytics",
        "Secure Authentication System",
        "Responsive UI",
        "Performance Optimization",
        "4-8 Weeks Delivery",
        "2 Months Frees Support"
      ],
      popular: true
    },

    {
      name: "Advanced System",
      price: "From INR 129999 /-",
      description: "Advanced software for scaling businesses with complex workflows and integrations.",
      features: [
        "Custom Web Application / SaaS",
        "Complex Workflows & Automation",
        "Payment Gateway Integration",
        "Third-Party Integrations",
        "Advanced Security Setup",
        "Scalable Backend Architecture",
        "Cloud Deployment",
        "Real-Time Features (if required)",
        "6-12 Weeks Delivery",
        "3 Months Frees Support"
      ]
    },

    {
      name: "Enterprise Solution",
      price: "From INR 249999+ /-",
      description: "Fully customized enterprise-grade software built for high performance, security, and scalability.",
      features: [
        "End-to-End Custom Software",
        "High-Level Architecture Design",
        "Microservices (if required)",
        "DevOps & CI/CD Setup",
        "Load Handling & Scalability",
        "Advanced Security & Data Protection",
        "Dedicated Development Support",
        "Priority Delivery & Support",
        "Ongoing Maintenance Available"
      ]
    }
  ]
},
  {
  slug: "ecommerce-development",
  title: "E-commerce Development",
  tagline: "Ecommerce websites designed for smoother shopping and more sales.",
  description: "We build Shopify, WooCommerce, and custom ecommerce stores with mobile-first product discovery, secure payments, fast checkout, SEO-ready category pages, and easy order management.",

  icon: ShoppingCart,

  process: [
    { step: "01", title: "Requirement & Planning", description: "We understand your products, business model, and target customers." },
    { step: "02", title: "Platform Selection", description: "Shopify, WooCommerce, or Custom Ecommerce based on your needs and budget." },
    { step: "03", title: "Design & Development", description: "We build a modern, mobile-friendly, and high-converting ecommerce store." },
    { step: "04", title: "Launch & Training", description: "Payment setup, shipping setup, and training so you can manage orders easily." },
  ],

  benefits: [
    "Sell Products Online 24/7",
    "Easy Product & Order Management",
    "Payment Gateway Integration",
    "Mobile-Friendly Shopping Experience",
    "SEO Optimized Store",
    "Admin Panel to Manage Store",
    "Discount & Coupon System",
    "Analytics & Sales Reports"
  ],

  plans: [
    {
      name: "Starter Store",
      price: "From INR 29999 /-",
      description: "Perfect for small businesses who want to start selling online.",
      features: [
        "Up to 50 Products",
        "Payment Gateway Integration",
        "Order Management System",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Admin Panel Access",
        "WhatsApp Order Notification",
        "20-25 Days Delivery",
        "1 Month Support"
      ]
    },

    {
      name: "Business Store",
      price: "From INR 45999 /-",
      description: "Best for growing businesses that want a scalable ecommerce website.",
      features: [
        "Up to 200 Products",
        "Custom UI Design",
        "Cart, Wishlist & Reviews",
        "Coupon & Discount System",
        "Shipping & Tax Setup",
        "Advanced SEO Setup",
        "Analytics Dashboard",
        "Inventory Management",
        "30-45 Days Delivery",
        "2 Months Support"
      ],
      popular: true
    },

    {
      name: "Advanced Ecommerce",
      price: "From INR 65999 /-",
      description: "Advanced ecommerce features for scaling and automation.",
      features: [
        "Unlimited Products",
        "Custom Features",
        "Razorpay / Stripe Integration",
        "Email & SMS Notifications",
        "Advanced Filters & Search",
        "Multi-Category & Attributes",
        "Performance Optimization",
        "Admin Dashboard",
        "60-80 Days Delivery",
        "3 Months Support"
      ]
    },

    {
      name: "Custom / Multi-Vendor",
      price: "From INR 149999+ /-",
      description: "Custom ecommerce platform or multi-vendor marketplace like Amazon/Flipkart.",
      features: [
        "Multi-Vendor System",
        "Vendor Dashboard",
        "Commission System",
        "Custom Admin Panel",
        "API Integrations",
        "Mobile App API Ready",
        "High Performance Architecture",
        "Advanced Security",
        "Priority Support",
        "Ongoing Maintenance Available"
      ]
    }
  ]
},
  {
  slug: "crm-development",
  title: "CRM Development",
  tagline: "Custom CRM systems that support [SaaS development](/saas-development-company) structures to help teams follow up faster and close more.",
  description: "We build lead management systems, sales pipelines, and integrations built on [custom software](/services/custom-software-development) and [web development](/services/web-development) architectures for [proven sales success case studies](/case-studies).",

  icon: Users,

  process: [
    { step: "01", title: "Workflow Analysis", description: "We understand your sales process, lead flow, and team structure." },
    { step: "02", title: "CRM Planning", description: "We design dashboards, pipelines, and automation based on your business." },
    { step: "03", title: "Development & Integration", description: "We build your CRM and integrate tools like email, WhatsApp, and analytics." },
    { step: "04", title: "Launch & Training", description: "We deploy the system and train your team to use it efficiently." },
  ],

  benefits: [
    "Lead Management System",
    "Sales Pipeline Tracking",
    "Automated Follow-Ups",
    "Custom Dashboard & Reports",
    "Multi-User Access & Roles",
    "WhatsApp & Email Integration",
    "Data Management & Security",
    "Business Process Automation"
  ],

  plans: [
    {
      name: "Starter CRM",
      price: "From INR 19999 /-",
      description: "Perfect for small businesses to manage leads and basic sales pipeline.",
      features: [
        "Lead Management System",
        "Basic Sales Pipeline",
        "Contact & Data Management",
        "Simple Dashboard",
        "Up to 3 User Roles",
        "Email Integration",
        "Basic Reports",
        "2-3 Weeks Delivery",
        "1 Month Support"
      ]
    },

    {
      name: "Business CRM",
      price: "From INR 49999 /-",
      description: "Ideal for growing teams that want automation and better sales tracking.",
      features: [
        "Advanced Sales Pipeline",
        "Lead Tracking & Status Management",
        "Automated Follow-Ups",
        "Custom Dashboard",
        "Role-Based Access Control",
        "WhatsApp Integration",
        "Reports & Analytics",
        "API Integrations",
        "4-6 Weeks Delivery",
        "2 Months Support"
      ]
    },

    {
      name: "Advanced CRM",
      price: "From INR 99999 /-",
      description: "Advanced CRM system with automation, integrations, and performance tracking.",
      features: [
        "Custom CRM System",
        "Sales & Marketing Automation",
        "Multi-Team Management",
        "Advanced Reports & Insights",
        "Third-Party Integrations",
        "Secure Authentication System",
        "Cloud-Based Access",
        "Scalable Architecture",
        "6-10 Weeks Delivery",
        "3 Months Support"
      ],
      popular: true
    },

    {
      name: "Enterprise CRM",
      price: "From INR 199999+ /-",
      description: "Fully customized enterprise CRM for large teams and complex workflows.",
      features: [
        "End-to-End CRM Solution",
        "Custom Workflows & Automation",
        "Multi-Department System",
        "ERP / Software Integrations",
        "High-Level Security Setup",
        "Dedicated Development Support",
        "Priority Delivery",
        "Ongoing Maintenance Available"
      ]
    }
  ]
},
  {
  slug: "digital-marketing",
  title: "Digital Marketing",
  tagline: "Digital marketing focused on qualified traffic, leads, and revenue.",
  description: "We help businesses grow with SEO, content strategy, social media, Google Ads, Meta Ads, landing pages, and conversion tracking built around measurable pipeline goals.",

  icon: Megaphone,

  process: [
    { step: "01", title: "Audit & Research", description: "We analyze your business, competitors, and current online presence." },
    { step: "02", title: "Strategy Planning", description: "We create a marketing plan based on your goals - leads, traffic, or sales." },
    { step: "03", title: "Execution", description: "We run SEO, social media, and paid ads campaigns." },
    { step: "04", title: "Reporting & Improvement", description: "Monthly reports, analytics, and continuous improvement." },
  ],

  benefits: [
    "Increase Website Traffic",
    "Generate More Leads",
    "Social Media Growth",
    "Google & Meta Ads Management",
    "SEO to Rank Higher on Google",
    "Content & Creative Strategy",
    "Monthly Performance Reports",
    "Brand Awareness & Online Presence"
  ],

  plans: [
    {
      name: "Starter Marketing",
      price: "From INR 6999 /month",
      description: "Perfect for small businesses who want to start digital marketing.",
      features: [
        "Social Media Management (2 Platforms)",
        "8 Posts Per Month",
        "Basic SEO Setup",
        "Content Calendar",
        "Basic Ads Guidance",
        "Monthly Report"
      ]
    },

    {
      name: "Growth Marketing",
      price: "From INR 14999 /month",
      description: "Best for businesses who want leads and consistent growth.",
      features: [
        "Social Media Management (3-4 Platforms)",
        "16 Posts Per Month",
        "SEO Optimization",
        "Google Ads Management",
        "Meta Ads Management",
        "Landing Page Suggestions",
        "Monthly Performance Report"
      ]
    },

    {
      name: "Performance Marketing",
      price: "From INR 29999 /month",
      description: "For businesses that want aggressive growth and lead generation.",
      features: [
        "Full SEO Services",
        "Google Ads + Meta Ads Management",
        "Conversion Tracking Setup",
        "Remarketing Ads",
        "Landing Page Optimization",
        "Content & Creative Strategy",
        "Bi-Weekly Reports",
        "Lead Generation Campaigns"
      ],
      popular: true
    },

    {
      name: "Full Digital Marketing",
      price: "From INR 49999 /month",
      description: "Complete digital marketing solution for serious businesses.",
      features: [
        "SEO + Social Media + Paid Ads",
        "Content Marketing",
        "Email Marketing",
        "Conversion Optimization",
        "Marketing Strategy & Planning",
        "Competitor Analysis",
        "Weekly Reports",
        "Dedicated Manager"
      ]
    }
  ]
},
  {
  slug: "seo",
  title: "SEO Services",
  tagline: "Technical SEO, content strategy, and local SEO for compounding leads.",
  description: "We improve organic visibility through technical audits, keyword mapping, on-page optimization, service-page structure, content clusters, local SEO, and reporting focused on business inquiries.",

  icon: Search,

  process: [
    { step: "01", title: "SEO Audit", description: "We audit your website for technical issues, speed, and SEO problems." },
    { step: "02", title: "Keyword Research", description: "We find the best keywords your customers are searching for." },
    { step: "03", title: "On-Page SEO", description: "We optimize your website pages, content, and structure." },
    { step: "04", title: "Off-Page SEO", description: "We build backlinks and improve your website authority." },
  ],

  benefits: [
    "Rank Higher on Google",
    "Increase Website Traffic",
    "Get More Leads & Calls",
    "Local SEO Optimization",
    "On-Page & Technical SEO",
    "Backlink Building",
    "Monthly SEO Reports",
    "Long-Term Organic Growth"
  ],

  plans: [
    {
      name: "Local SEO",
      price: "From INR 4999 /month",
      description: "Perfect for local businesses who want more calls and local leads.",
      features: [
        "Google Business Profile Optimization",
        "Local Keyword Targeting",
        "On-Page SEO",
        "5 Keywords Target",
        "Local Citations",
        "Monthly Report"
      ]
    },

    {
      name: "Regional SEO",
      price: "From INR 9999 /month",
      description: "Best for businesses targeting a city or region.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO Fixes",
        "10-15 Keywords Target",
        "Content Optimization",
        "Basic Backlinks",
        "Monthly Report"
      ],
      popular: true
    },

    {
      name: "National SEO",
      price: "From INR 19999 /month",
      description: "For businesses targeting the whole country.",
      features: [
        "Advanced Keyword Strategy",
        "Technical SEO",
        "Content Creation",
        "High-Quality Backlinks",
        "20-30 Keywords Target",
        "Competitor Analysis",
        "Bi-Weekly Reports"
      ]
    },

    {
      name: "Enterprise SEO",
      price: "From INR 39999 /month",
      description: "For high-competition businesses and large websites.",
      features: [
        "Complete SEO Management",
        "Technical SEO + Content + Backlinks",
        "Unlimited Keywords",
        "Authority Link Building",
        "Weekly Reports",
        "Dedicated SEO Manager",
        "SEO Strategy & Consulting"
      ]
    }
  ]
},
  {
  slug: "google-meta-ads",
  title: "Google & Meta Ads Management",
  tagline: "Paid campaigns built to reduce wasted spend and improve lead quality.",
  description: "We plan, launch, and optimize Google Ads and Meta Ads campaigns with conversion tracking, landing page feedback, retargeting, creative testing, and ROI-focused reporting.",

  icon: Target,

  process: [
    { step: "01", title: "Account Audit & Research", description: "We analyze your business, competitors, and target audience." },
    { step: "02", title: "Campaign Setup", description: "We set up campaigns, ad groups, keywords, audiences, and conversion tracking." },
    { step: "03", title: "Optimization", description: "We optimize ads, creatives, keywords, and targeting regularly." },
    { step: "04", title: "Reporting", description: "We send performance reports and improve campaigns every month." },
  ],

  benefits: [
    "Google Search Ads",
    "Google Display Ads",
    "Facebook & Instagram Ads",
    "Retargeting Ads",
    "Conversion Tracking Setup",
    "Landing Page Suggestions",
    "Lead Generation Campaigns",
    "Monthly Performance Reports"
  ],

  plans: [
    {
      name: "Starter Ads",
      price: "From INR 5999 /month",
      description: "Perfect for small businesses starting with ads.",
      features: [
        "1 Platform (Google or Meta)",
        "Campaign Setup",
        "Keyword & Audience Research",
        "2-3 Ads Creatives",
        "Conversion Tracking Setup",
        "Monthly Report"
      ]
    },

    {
      name: "Growth Ads",
      price: "From INR 11999 /month",
      description: "Best for businesses who want consistent leads.",
      features: [
        "Google Ads + Meta Ads",
        "Campaign Setup & Management",
        "A/B Testing",
        "Retargeting Ads",
        "Landing Page Suggestions",
        "Bi-Weekly Optimization",
        "Monthly Report"
      ],
      popular: true
    },

    {
      name: "Performance Ads",
      price: "From INR 21999 /month",
      description: "For businesses that want aggressive lead generation and scaling.",
      features: [
        "All Ads Platforms",
        "Advanced Audience Targeting",
        "Retargeting & Funnel Setup",
        "Ad Copy & Creative Strategy",
        "Conversion Rate Optimization",
        "Weekly Optimization",
        "Detailed Reports"
      ]
    },

    {
      name: "Scale & Dominate",
      price: "From INR 39999 /month",
      description: "Complete ad management and scaling for serious businesses.",
      features: [
        "Complete Ads Management",
        "Sales Funnel Strategy",
        "Landing Page Optimization",
        "Creative Strategy & Planning",
        "Competitor Ads Analysis",
        "Weekly Reports & Strategy Call",
        "Dedicated Ads Manager"
      ]
    }
  ]
},
  {
  slug: "graphics-designing",
  title: "Graphics Designing",
  tagline: "Brand and marketing creatives that look polished and sell clearly.",
  description: "We design logos, brand identity, social media creatives, ad visuals, pitch assets, and marketing materials that make your business look consistent, credible, and conversion-ready.",

  icon: PenTool,

  process: [
    { step: "01", title: "Requirement Discussion", description: "We understand your brand, audience, and design requirements." },
    { step: "02", title: "Concept Creation", description: "We create design concepts based on your brand style." },
    { step: "03", title: "Design Finalization", description: "We refine and finalize the design based on your feedback." },
    { step: "04", title: "Delivery", description: "We deliver all files in high-quality formats for print and digital use." },
  ],

  benefits: [
    "Professional Brand Identity",
    "Social Media Post Designs",
    "Marketing Materials Design",
    "Print & Digital Designs",
    "Unlimited Revisions (in higher plans)",
    "Fast Delivery",
    "All Source Files Included",
    "Creative & Modern Designs"
  ],

  plans: [
    {
      name: "Starter Design",
      price: "From INR 2999",
      description: "Perfect for small design needs.",
      features: [
        "Logo Design",
        "Business Card Design",
        "2 Design Concepts",
        "2 Revisions",
        "High-Quality Files",
        "Source Files"
      ]
    },

    {
      name: "Business Design",
      price: "From INR 7999",
      description: "Complete design package for businesses.",
      features: [
        "Logo + Brand Identity",
        "Business Card + Letterhead",
        "Social Media Kit",
        "5-6 Design Creatives",
        "Unlimited Revisions",
        "All Source Files"
      ],
      popular: true
    },

    {
      name: "Marketing Design",
      price: "From INR 14999",
      description: "Best for businesses that need regular marketing creatives.",
      features: [
        "Social Media Post Designs",
        "Ad Creatives",
        "Banner & Poster Design",
        "Email Template Design",
        "Presentation Design",
        "Priority Support"
      ]
    },

    {
      name: "Design Retainer",
      price: "From INR 24999 /month",
      description: "Monthly graphic design support for your business.",
      features: [
        "Monthly Social Media Creatives",
        "Ad Creatives",
        "Website Graphics",
        "Unlimited Design Requests",
        "Fast Delivery",
        "Dedicated Designer"
      ]
    }
  ]
}
];

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
