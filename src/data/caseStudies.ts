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
    slug: "luxe-realty-platform",
    title: "Luxe Realty — Property Marketplace Platform",
    client: "Luxe Realty Group",
    industry: "Real Estate",
    category: "Web Development",
    challenge: "Luxe Realty's outdated website was losing leads to competitors. Property search was slow, mobile experience was broken, and lead capture was non-existent. They needed a platform that could handle 50K+ listings and convert visitors into qualified leads.",
    solution: "We built a lightning-fast property marketplace with advanced search filters, virtual tour integration, mortgage calculators, and an intelligent lead scoring system. The platform was designed for speed, with server-side rendering and edge caching for sub-second load times.",
    techUsed: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Mapbox", "Elasticsearch"],
    results: [
      { metric: "Lead Generation", value: "+340%" },
      { metric: "Page Load Time", value: "0.8s" },
      { metric: "Bounce Rate", value: "-62%" },
      { metric: "Monthly Visitors", value: "180K+" },
    ],
    testimonial: "CodeNClicks transformed our digital presence completely. The new platform generates more qualified leads in a week than our old site did in a month.",
    testimonialAuthor: "James Morrison",
    testimonialRole: "CEO, Luxe Realty Group",
    status: "completed",
  },
  {
    slug: "mediflow-health-platform",
    title: "MediFlow — Healthcare Management System",
    client: "MediFlow Health",
    industry: "Healthcare",
    category: "Custom Software",
    challenge: "MediFlow needed a HIPAA-compliant patient management system that could handle appointment scheduling, telemedicine, electronic health records, and billing — all in one unified platform.",
    solution: "We designed and developed a comprehensive healthcare management platform with role-based access, real-time video consultations, AI-assisted diagnosis suggestions, and automated billing. The system integrates with major insurance providers and lab systems.",
    techUsed: ["React", "Node.js", "MongoDB", "WebRTC", "Docker", "Kubernetes"],
    results: [
      { metric: "Patient Wait Time", value: "-75%" },
      { metric: "Admin Efficiency", value: "+200%" },
      { metric: "Revenue Growth", value: "+85%" },
      { metric: "Patient Satisfaction", value: "4.9/5" },
    ],
    testimonial: "The platform has revolutionized how we serve our patients. The telemedicine feature alone has been a game-changer for our practice.",
    testimonialAuthor: "Dr. Sarah Chen",
    testimonialRole: "Medical Director, MediFlow Health",
    status: "completed",
  },
  {
    slug: "nova-fashion-ecommerce",
    title: "Nova Fashion — Premium E-commerce Store",
    client: "Nova Fashion Inc.",
    industry: "E-commerce",
    category: "E-commerce Development",
    challenge: "Nova Fashion's Shopify store couldn't handle their rapid growth. They needed a custom platform with AI-powered recommendations, virtual try-on, and multi-currency support for their global expansion.",
    solution: "We built a headless commerce platform using Shopify Plus as the backend with a custom Next.js storefront. AI-powered product recommendations increased average order value by 45%, and the virtual try-on feature reduced returns by 30%.",
    techUsed: ["Next.js", "Shopify Plus", "TensorFlow.js", "Stripe", "Algolia", "Cloudflare"],
    results: [
      { metric: "Revenue Growth", value: "+210%" },
      { metric: "Avg Order Value", value: "+45%" },
      { metric: "Return Rate", value: "-30%" },
      { metric: "Global Markets", value: "12 Countries" },
    ],
    testimonial: "Our online revenue has more than tripled since launching the new platform. The AI recommendations are incredibly effective.",
    testimonialAuthor: "Elena Vasquez",
    testimonialRole: "COO, Nova Fashion Inc.",
    status: "completed",
  },
  {
    slug: "greenfield-edu-platform",
    title: "Greenfield — EdTech Learning Platform",
    client: "Greenfield Academy",
    industry: "Education",
    category: "Web Development",
    challenge: "Greenfield Academy needed a modern LMS that could deliver interactive courses, track student progress, support live classes, and handle 10,000+ concurrent users during peak hours.",
    solution: "We developed a feature-rich learning management system with interactive video lessons, real-time quizzes, peer collaboration tools, and AI-powered learning path recommendations. The platform scales automatically during peak usage.",
    techUsed: ["React", "Python", "FastAPI", "Redis", "AWS", "WebSocket"],
    results: [
      { metric: "Student Engagement", value: "+180%" },
      { metric: "Course Completion", value: "+92%" },
      { metric: "Concurrent Users", value: "15K+" },
      { metric: "NPS Score", value: "82" },
    ],
    testimonial: "The platform has made online learning feel as engaging as being in a classroom. Our students love it.",
    testimonialAuthor: "Prof. Michael Torres",
    testimonialRole: "Dean, Greenfield Academy",
    status: "completed",
  },
  {
    slug: "apex-crm-system",
    title: "Apex CRM — Sales Intelligence Platform",
    client: "Apex Solutions",
    industry: "Corporate",
    category: "CRM Development",
    challenge: "Apex Solutions was using 5 different tools to manage their sales pipeline. They needed a unified CRM with AI-powered lead scoring, automated follow-ups, and custom reporting dashboards.",
    solution: "We built a custom CRM that consolidated all their sales tools into one platform. AI-powered lead scoring prioritizes high-value prospects, automated email sequences nurture leads, and real-time dashboards give leadership instant visibility.",
    techUsed: ["React", "Node.js", "PostgreSQL", "OpenAI API", "SendGrid", "Chart.js"],
    results: [
      { metric: "Sales Cycle", value: "-40%" },
      { metric: "Lead Conversion", value: "+65%" },
      { metric: "Team Productivity", value: "+150%" },
      { metric: "Revenue Impact", value: "+$2.4M" },
    ],
    testimonial: "This CRM has completely transformed our sales process. The AI lead scoring alone has paid for the entire project ten times over.",
    testimonialAuthor: "David Kim",
    testimonialRole: "VP Sales, Apex Solutions",
    status: "completed",
  },
  {
    slug: "zenith-marketing-dashboard",
    title: "Zenith — Marketing Analytics Dashboard",
    client: "Zenith Digital Agency",
    industry: "Agency",
    category: "Digital Marketing",
    challenge: "Zenith needed a unified dashboard to track marketing performance across Google Ads, Meta Ads, email campaigns, and organic search — eliminating the need for manual spreadsheet reporting.",
    solution: "We built a real-time marketing intelligence dashboard that aggregates data from 12+ marketing platforms. Custom widgets, automated reporting, and anomaly detection alerts keep the team informed and proactive.",
    techUsed: ["React", "D3.js", "Python", "BigQuery", "Google APIs", "Meta APIs"],
    results: [
      { metric: "Reporting Time", value: "-90%" },
      { metric: "Campaign ROI", value: "+55%" },
      { metric: "Data Sources", value: "12+" },
      { metric: "Client Retention", value: "+40%" },
    ],
    testimonial: "We used to spend 20 hours a week on reporting. Now it's automated and our clients love the real-time dashboards.",
    testimonialAuthor: "Lisa Park",
    testimonialRole: "Managing Director, Zenith Digital",
    status: "completed",
  },
  {
    slug: "atlas-hospitality-booking",
    title: "Atlas — Hotel Booking Platform",
    client: "Atlas Hospitality Group",
    industry: "Hospitality",
    category: "Web Development",
    challenge: "Atlas Hospitality needed a direct booking platform to reduce OTA dependency, offer dynamic pricing, and provide a luxury booking experience that matched their premium brand positioning.",
    solution: "We created an immersive booking experience with cinematic imagery, virtual room tours, dynamic pricing engine, and seamless payment processing. Direct bookings increased by 200% in the first quarter.",
    techUsed: ["Next.js", "Stripe", "Sanity CMS", "Three.js", "Node.js", "Redis"],
    results: [
      { metric: "Direct Bookings", value: "+200%" },
      { metric: "OTA Dependency", value: "-55%" },
      { metric: "Revenue Per Room", value: "+35%" },
      { metric: "Guest Satisfaction", value: "4.8/5" },
    ],
    testimonial: "Our direct booking revenue has skyrocketed. The virtual tours alone have significantly increased conversion rates.",
    testimonialAuthor: "Robert Chang",
    testimonialRole: "CEO, Atlas Hospitality Group",
    status: "completed",
  },
  {
    slug: "quantum-ai-saas",
    title: "Quantum AI — SaaS Analytics Platform",
    client: "Quantum Technologies",
    industry: "Technology",
    category: "Custom Software",
    challenge: "Quantum Technologies is building a next-generation AI analytics platform for enterprise clients. The project demands real-time data processing, natural language querying, and enterprise-grade security.",
    solution: "We're developing a sophisticated SaaS platform with real-time data pipelines, an NLQ interface powered by GPT-4, and a modular dashboard system. The platform will process 10M+ events per day.",
    techUsed: ["React", "Go", "Apache Kafka", "ClickHouse", "OpenAI", "Kubernetes"],
    results: [
      { metric: "Status", value: "Phase 2" },
      { metric: "Target Launch", value: "Q2 2026" },
      { metric: "Beta Users", value: "50+" },
      { metric: "Events/Day", value: "10M+" },
    ],
    testimonial: "CodeNClicks has been an exceptional development partner. Their technical expertise is unmatched.",
    testimonialAuthor: "Raj Patel",
    testimonialRole: "CTO, Quantum Technologies",
    status: "in-development",
  },
];

export const getCaseStudyBySlug = (slug: string) => caseStudies.find(cs => cs.slug === slug);
