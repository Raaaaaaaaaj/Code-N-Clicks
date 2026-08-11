import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Star,
  Zap,
  Shield,
  Clock,
  Headphones,
  Award,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";
import { getServiceBySlug, services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { testimonials } from "@/data/testimonials";
import {
  organizationSchema,
  websiteSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  stripMarkdown,
} from "@/lib/seo";
import { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";
import { renderTextWithLinks } from "@/lib/linkRenderer";
import SolutionExplorer from "@/components/services/custom-software/SolutionExplorer";
import DecisionPath from "@/components/services/custom-software/DecisionPath";
import CustomVsOffTheShelf from "@/components/services/custom-software/CustomVsOffTheShelf";
import ServiceJourney from "@/components/services/custom-software/ServiceJourney";
import TechStackVisualization from "@/components/services/custom-software/TechStackVisualization";
import WorkflowDiagram from "@/components/services/custom-software/WorkflowDiagram";
import SecurityDashboard from "@/components/services/custom-software/SecurityDashboard";
import LocationSection from "@/components/services/custom-software/LocationSection";
import MiniCaseStudies from "@/components/shared/MiniCaseStudies";

// Case Studies data for the service page
const caseStudiesStories = [
  {
    title: "Custom Hotel Management & Booking Platform",
    category: "Hospitality",
    challenge:
      "The business needed a centralized system to manage hotel bookings, room availability, guest information, and day-to-day operations instead of relying on disconnected tools and manual processes.",
    built:
      "A custom hotel management platform with centralized booking management, room and availability tracking, guest records, operational workflows, and an integrated dashboard for managing day-to-day hotel activities.",
    techStack: "Angular • .Net • PostgreSQL • Websocket • Meta API • AWS",
    objective:
      "Centralize hotel operations, reduce manual work, improve booking management, and give the business complete control over its operational data.",
    impact:
      "Streamlined daily operations, reduced dependency on spreadsheets and disconnected tools, and provided a centralized platform for managing bookings, rooms, guests, and operational workflows.",
  },
  {
    title: "Custom CRM & Lead Management Platform",
    category: "Business Operations",
    challenge:
      "The business was managing leads and customer information across spreadsheets, messaging platforms, and multiple disconnected workflows, making follow-ups difficult and creating unnecessary manual work.",
    built:
      "A custom CRM platform with centralized lead management, customer records, follow-up tracking, sales pipeline management, role-based access, and automated workflow features tailored to the company's internal processes.",
    techStack: "React.js • Node.js • Express.js • PostgreSQL • AWS",
    objective:
      "Centralize customer data, improve lead visibility, reduce repetitive administrative work, and create a structured sales management workflow.",
    impact:
      "Created a single source of truth for customer and lead data, improved follow-up visibility, reduced manual coordination, and gave the business a scalable CRM platform without recurring per-user SaaS licensing dependency.",
  },
];

// Local image maps
const serviceImages: Record<
  string,
  { hero: string; secondary: string; tertiary: string }
> = {
  "web-development": {
    hero: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    tertiary:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  },
  "web-designing": {
    hero: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    tertiary:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&h=400&fit=crop",
  },
  "custom-software-development": {
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
    tertiary:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
  "ecommerce-development": {
    hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    tertiary:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
  },
  "crm-development": {
    hero: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
    tertiary:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
  },
  "digital-marketing": {
    hero: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=500&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    tertiary:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  seo: {
    hero: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=500&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop",
    tertiary:
      "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=600&h=400&fit=crop",
  },
  "google-meta-ads": {
    hero: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=500&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    tertiary:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
  },
  "graphics-designing": {
    hero: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
    tertiary:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop",
  },
};

const serviceExtras: Record<
  string,
  {
    whyTitle: string;
    whyDesc: string;
    stats: { value: string; label: string }[];
    faqs: { q: string; a: string }[];
  }
> = {
  "web-development": {
    whyTitle: "Why Choose Us for Web Development?",
    whyDesc:
      "We don't just build websites - we engineer digital experiences that load fast, rank high, and convert visitors into paying customers. Our team writes clean, maintainable code that your future developers will thank us for.",
    stats: [
      { value: "<2s", label: "Avg Load Time" },
      { value: "99.9%", label: "Uptime Guarantee" },
      { value: "100+", label: "Websites Shipped" },
      { value: "A+", label: "Security Rating" },
    ],
    faqs: [
      {
        q: "What frameworks do you use?",
        a: "We primarily use React, Next.js, and Vue.js for frontend, with Node.js and Python for backend. We select the best stack based on your project's requirements.",
      },
      {
        q: "Do you provide hosting?",
        a: "Yes! We can deploy to AWS, Vercel, or your preferred cloud provider with full CI/CD pipelines.",
      },
      {
        q: "Can you migrate my existing website?",
        a: "Absolutely. We handle full migrations with zero downtime, including content, SEO rankings, and redirects.",
      },
    ],
  },
  "web-designing": {
    whyTitle: "Why Choose Us for Web Design?",
    whyDesc:
      "Our designs aren't just pretty - they're strategic. Every color, layout, and interaction is backed by UX research and conversion data. We create designs that your users love and your business benefits from.",
    stats: [
      { value: "40%", label: "Avg Conversion Lift" },
      { value: "500+", label: "Pages Designed" },
      { value: "3x", label: "User Engagement" },
      { value: "100%", label: "Mobile Responsive" },
    ],
    faqs: [
      {
        q: "What design tools do you use?",
        a: "We work in Figma for all our design projects, making it easy for you to review, comment, and collaborate in real-time.",
      },
      {
        q: "Do you handle development too?",
        a: "Yes! We offer end-to-end design-to-development services ensuring pixel-perfect implementation.",
      },
      {
        q: "How many revision rounds are included?",
        a: "Depends on the plan, but our Professional plan includes 4 revision rounds. We iterate until you're thrilled.",
      },
    ],
  },
  "custom-software-development": {
    whyTitle: "Why Choose CodeNClicks for Custom Software?",
    whyDesc:
      "We don't just build features—we understand your workflow, design the right architecture, and build software that can adapt as your business grows.",
    stats: [
      { value: "12+", label: "Custom Solutions Delivered" },
      { value: "7 step", label: "Development Process" },
      { value: "100%", label: "Customizable Workflows" },
      { value: "99.9%", label: "Uptime Target" },

    ],
    faqs: [
      {
        q: "What is custom software development?",
        a: "Custom software development is the process of designing and building software around a business's specific workflows, requirements, users, and integrations instead of adapting to a ready-made product.",
      },
      {
        q: "How much does custom software development cost in India?",
        a: "The cost depends on features, complexity, integrations, users, technology, and development time. Simple applications cost less, while CRM, ERP, SaaS, and enterprise systems require a larger investment.",
      },
      {
        q: "How long does it take to build custom software?",
        a: "A project can take a few weeks to several months depending on its scope. An MVP is usually faster, while complex CRM, ERP, SaaS, and enterprise applications require more planning and development.",
      },
      {
        q: "What types of custom software do you develop?",
        a: "We develop custom business software, CRM and ERP systems, SaaS platforms, web applications, internal tools, dashboards, customer portals, workflow automation systems, and API integrations.",
      },
      {
        q: "Can you integrate custom software with our existing systems?",
        a: "Yes. Custom software can integrate with CRMs, ERPs, payment gateways, accounting tools, communication platforms, internal systems, and third-party APIs.",
      },
      {
        q: "Will I own the software after development?",
        a: "Project ownership and intellectual property terms are defined in the development agreement. We provide the agreed source code, documentation, and project deliverables according to those terms.",
      },
      {
        q: "Can custom software replace Excel and manual processes?",
        a: "Yes. Businesses often use custom software to centralize data, automate repetitive tasks, manage approvals, create dashboards, and replace spreadsheet-based workflows.",
      },
      {
        q: "Is custom software better than off-the-shelf software?",
        a: "Not always. Custom software is useful when existing products cannot support your workflows, integrations, scalability, or business requirements. If a ready-made product already solves the problem well, it may be the better choice.",
      },
      {
        q: "Do you provide software maintenance and support after launch?",
        a: "NYes. We can provide ongoing maintenance, technical support, performance improvements, security updates, integrations, and new feature development after launch.",
      },
      {
        q: "Do you develop custom software for startups and small businesses?",
        a: "Yes. We work with startups, SMEs, and established businesses, from MVPs and internal tools to larger SaaS, CRM, ERP, and business software platforms.",
      },
    ],
  },
  "ecommerce-development": {
    whyTitle: "Why Choose Us for E-commerce?",
    whyDesc:
      "We've generated millions in revenue for our e-commerce clients. From checkout optimization to inventory management, we build stores that sell - and keep selling while you sleep.",
    stats: [
      { value: "$5M+", label: "Revenue Generated" },
      { value: "35%", label: "Avg Cart Increase" },
      { value: "2x", label: "Conversion Rate" },
      { value: "60+", label: "Stores Launched" },
    ],
    faqs: [
      {
        q: "Shopify, WooCommerce, or custom?",
        a: "We'll recommend the best platform based on your scale, budget, and feature needs. We work with all major platforms plus custom builds.",
      },
      {
        q: "Can you handle payment integration?",
        a: "Yes - Stripe, PayPal, Razorpay, and many more. We also handle multi-currency and tax compliance.",
      },
      {
        q: "Do you provide ongoing store management?",
        a: "We offer monthly maintenance plans that include product updates, performance monitoring, and security patches.",
      },
    ],
  },
  "crm-development": {
    whyTitle: "Why Choose Us for CRM Development?",
    whyDesc:
      "Generic CRMs are clunky and expensive. We build lean, powerful CRM systems tailored to your sales process - so your team actually enjoys using them and closes more deals.",
    stats: [
      { value: "45%", label: "Sales Efficiency Gain" },
      { value: "3x", label: "Lead Follow-up Speed" },
      { value: "360-degree", label: "Customer View" },
      { value: "100%", label: "Team Adoption" },
    ],
    faqs: [
      {
        q: "Can you migrate from Salesforce/HubSpot?",
        a: "Yes. We handle full data migration with mapping, cleaning, and validation to ensure nothing is lost.",
      },
      {
        q: "Is mobile access included?",
        a: "All our CRM solutions are fully responsive, so your sales team can access it from any device.",
      },
      {
        q: "Can it integrate with our email and calendar?",
        a: "Absolutely - Gmail, Outlook, Google Calendar, and more. We make sure your CRM fits into your existing workflow.",
      },
    ],
  },
  "digital-marketing": {
    whyTitle: "Why Choose Us for Digital Marketing?",
    whyDesc:
      "We don't do 'spray and pray' marketing. Every campaign is data-driven, performance-tracked, and optimized relentlessly. We treat your ad budget like it's our own money.",
    stats: [
      { value: "5x", label: "Avg ROI" },
      { value: "300%", label: "Traffic Growth" },
      { value: "10M+", label: "Impressions Managed" },
      { value: "50+", label: "Campaigns Launched" },
    ],
    faqs: [
      {
        q: "What channels do you cover?",
        a: "Google, Meta (Facebook/Instagram), LinkedIn, Twitter, TikTok, email marketing, and content marketing.",
      },
      {
        q: "How soon will I see results?",
        a: "Paid campaigns show results within days. Organic strategies like SEO typically need 3-6 months to show significant impact.",
      },
      {
        q: "Do you create the content?",
        a: "Yes - we have in-house copywriters, designers, and video editors. Full-service content creation is included in Growth and Scale plans.",
      },
    ],
  },
  seo: {
    whyTitle: "Why Choose Us for SEO?",
    whyDesc:
      "Our SEO strategies are built on technical excellence and content authority - not black-hat tricks. We build sustainable organic traffic that compounds over time and makes your competitors nervous.",
    stats: [
      { value: "#1", label: "Rankings Achieved" },
      { value: "500%", label: "Avg Traffic Growth" },
      { value: "200+", label: "Keywords Ranked" },
      { value: "50+", label: "Clients Ranked" },
    ],
    faqs: [
      {
        q: "How long does SEO take to show results?",
        a: "SEO is a long-term game. You'll see initial improvements in 2-3 months, with significant results in 6-12 months.",
      },
      {
        q: "Do you guarantee first page rankings?",
        a: "We don't promise specific rankings (anyone who does is lying), but we guarantee measurable improvement in traffic and leads.",
      },
      {
        q: "Do you handle local SEO?",
        a: "Yes! Local SEO is our specialty. We optimize Google Business, local citations, and location-specific content.",
      },
    ],
  },
  "google-meta-ads": {
    whyTitle: "Why Choose Us for Paid Ads?",
    whyDesc:
      "We've managed hundreds of thousands in ad spend and know how to squeeze every rupee and dollar for maximum returns. No wasted budget, no vanity metrics - just qualified leads.",
    stats: [
      { value: "3.5x", label: "Avg ROAS" },
      { value: "-40%", label: "Cost Per Lead" },
      { value: "$500K+", label: "Ad Spend Managed" },
      { value: "200+", label: "Campaigns Run" },
    ],
    faqs: [
      {
        q: "What's the minimum ad budget?",
        a: "We recommend at least $1,000/month for meaningful results, but we can work with smaller budgets for testing.",
      },
      {
        q: "Do you create the ad creatives?",
        a: "Yes - our team handles copywriting, image design, and video ads. Everything is A/B tested for performance.",
      },
      {
        q: "How do you report results?",
        a: "You get a custom dashboard with real-time data plus bi-weekly reports with insights and recommendations.",
      },
    ],
  },
  "graphics-designing": {
    whyTitle: "Why Choose Us for Graphic Design?",
    whyDesc:
      "Great design isn't about decoration - it's about communication. Our designers create visuals that tell your brand story, build trust, and make your audience feel something.",
    stats: [
      { value: "500+", label: "Designs Created" },
      { value: "100+", label: "Brands Designed" },
      { value: "48hr", label: "Turnaround Time" },
      { value: "Unlimited", label: "Creativity" },
    ],
    faqs: [
      {
        q: "What file formats do you deliver?",
        a: "All common formats - AI, PSD, SVG, PNG, PDF, JPEG. Source files are always included.",
      },
      {
        q: "Can you match our existing brand guidelines?",
        a: "Absolutely. We work within your brand guidelines or help create new ones from scratch.",
      },
      {
        q: "Do you do motion graphics/video?",
        a: "Yes! Our Agency plan includes motion graphics and video editing. We can create social videos, explainers, and animated logos.",
      },
    ],
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static routes at build time for speed & crawlability
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

const serviceMetaTitles: Record<string, string> = {
  "web-development": "Web Development Services | CodeNClicks Solutions",
  "web-designing": "Professional Web Designing | CodeNClicks Solutions",
  "custom-software-development":
    "Custom Software Development Company in India | CodeNClicks",
  "ecommerce-development":
    "Ecommerce Website Development | CodeNClicks Solutions",
  "crm-development": "Custom CRM Development Services | CodeNClicks Solutions",
  "digital-marketing":
    "Digital Marketing & Growth Agency | CodeNClicks Solutions",
  "seo": "SEO & Search Engine Optimization | CodeNClicks Solutions",
  "google-meta-ads": "Google & Meta Ads Management | CodeNClicks Solutions",
  "graphics-designing":
    "Graphics & Brand Design Services | CodeNClicks Solutions",
};

// Dynamic Metadata generator
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const images =
    serviceImages[service.slug] || serviceImages["web-development"];
  const cleanDescription = stripMarkdown(service.description);
  const titleText =
    serviceMetaTitles[service.slug] ||
    `${service.title} Services | CodeNClicks`;

  return {
    title: titleText,
    description: cleanDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: titleText,
      description: cleanDescription,
      images: [{ url: images.hero }],
      url: `https://codenclicksit.in/services/${service.slug}`,
      type: "website",
      siteName: "CodeNClicks IT Solutions",
    },
    twitter: {
      card: "summary_large_image",
      title: titleText,
      description: cleanDescription,
      images: [images.hero],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const images =
    serviceImages[service.slug] || serviceImages["web-development"];
  const extras =
    serviceExtras[service.slug] || serviceExtras["web-development"];
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);
  const relevantTestimonials = testimonials.slice(0, 3);
  const path = `/services/${service.slug}`;

  const serviceIndustriesMap: Record<
    string,
    { title: string; slug: string }[]
  > = {
    "web-development": [
      { title: "Hotels & Hospitality", slug: "hospitality" },
      { title: "Schools & Education", slug: "education" },
      { title: "Corporate Businesses", slug: "corporate" },
      { title: "E-commerce & Retail", slug: "ecommerce" },
      { title: "Healthcare & Wellness", slug: "healthcare" },
    ],
    "web-designing": [
      { title: "Hotels & Hospitality", slug: "hospitality" },
      { title: "Schools & Education", slug: "education" },
      { title: "Corporate Businesses", slug: "corporate" },
    ],
    "custom-software-development": [
      { title: "Hotels & Hospitality", slug: "hospitality" },
      { title: "Schools & Education", slug: "education" },
      { title: "Corporate Businesses", slug: "corporate" },
      { title: "Healthcare & Wellness", slug: "healthcare" },
    ],
    "ecommerce-development": [
      { title: "E-commerce & Retail", slug: "ecommerce" },
      { title: "Startups & VCs", slug: "startups" },
    ],
    "crm-development": [
      { title: "Corporate Businesses", slug: "corporate" },
      { title: "Agencies & Partners", slug: "agencies" },
      { title: "Startups & VCs", slug: "startups" },
    ],
    "digital-marketing": [
      { title: "E-commerce & Retail", slug: "ecommerce" },
      { title: "Hotels & Hospitality", slug: "hospitality" },
    ],
    seo: [
      { title: "E-commerce & Retail", slug: "ecommerce" },
      { title: "Hotels & Hospitality", slug: "hospitality" },
    ],
    "google-meta-ads": [
      { title: "E-commerce & Retail", slug: "ecommerce" },
      { title: "Hotels & Hospitality", slug: "hospitality" },
    ],
    "graphics-designing": [
      { title: "E-commerce & Retail", slug: "ecommerce" },
      { title: "Hotels & Hospitality", slug: "hospitality" },
    ],
  };

  const displayIndustries = serviceIndustriesMap[service.slug] || [
    { title: "Hotels & Hospitality", slug: "hospitality" },
    { title: "Schools & Education", slug: "education" },
  ];

  // JSON-LD dynamic schema pre-rendered on the server
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      serviceSchema({
        name: `${service.title} Services`,
        description: service.description,
        path,
      }),
      faqSchema(extras.faqs),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.title, path },
      ]),
    ],
  };

  return (
    <div className="bg-white text-brand-graphite">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <section className="relative py-20 lg:py-32 border-b-2 border-brand-graphite bg-brand-graphite overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="w-16 h-16 rounded-xl bg-white/5 border-2 border-white/20 flex items-center justify-center animate-in fade-in zoom-in duration-500">
                <Icon className="w-8 h-8 text-brand-lime" />
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
                {service.title}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed font-sans pt-2 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                {renderTextWithLinks(service.tagline)}
              </p>
              <p className="text-sm text-white/60 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                {renderTextWithLinks(service.description)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-lime text-brand-graphite font-extrabold rounded-full hover:bg-brand-lime/90 hover:scale-105 transition-all text-sm shadow-flat"
                >
                  Start Your Project → <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white hover:text-brand-graphite transition-all text-sm"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden border border-white/10 bg-[#1e1e1e] shadow-2xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Browser Top Bar */}
                <div className="h-10 bg-[#2d2d2d] border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                {/* Image Content */}
                <div className="relative aspect-[4/3]">
                  <img
                    src={images.hero}
                    alt={`${service.title} - Custom Software & Web App Development Services by CodeNClicks India`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flat Service Stats Bar */}
      <section className="bg-brand-blue py-12 text-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {extras.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-5xl font-heading font-extrabold text-brand-lime leading-none">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-white/70 uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.slug === "custom-software-development" && (
        <>
          <SolutionExplorer />
          <DecisionPath />
        </>
      )}

      {/* Why Choose Us */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">
                WHY CODENCLICKS
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-graphite leading-none">
                {extras.whyTitle}
              </h2>
              <p className="text-brand-graphite/70 leading-relaxed font-sans">
                {renderTextWithLinks(extras.whyDesc)}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  {
                    icon: Zap,
                    title: "Built Around Your Workflow",
                    desc: "We design software around your processes, users, and business requirements—not the other way around.",
                  },
                  {
                    icon: Shield,
                    title: "Engineering You Can Trust",
                    desc: "Clean architecture, rigorous testing, code reviews, and security practices built into every project.",
                  },
                  {
                    icon: Headphones,
                    title: "Support Beyond Launch",
                    desc: "From deployment to improvements and maintenance, our team stays available as your software evolves.",
                  },
                  {
                    icon: Award,
                    title: "Proven Delivery",
                    desc: "A growing track record of delivering websites, business software, and digital solutions for real-world needs.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-mist border border-brand-graphite flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-coral" />
                    </div>
                    <div>
                      <h3 className="text-sm font-heading font-bold text-brand-graphite">
                        {item.title}
                      </h3>
                      <p className="text-xs text-brand-graphite/60 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src={images.secondary}
                  alt={`${service.title} Engineering Process - Agile Sprint Planning and Design Session by CodeNClicks`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {service.slug === "custom-software-development" && (
        <>
          <CustomVsOffTheShelf />
          <ServiceJourney />
        </>
      )}

      {/* Process Accordion Section */}
      {service.slug === "custom-software-development" && (
        <>
          <TechStackVisualization />
          <WorkflowDiagram />
        </>
      )}

      {/* Benefits */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src={images.tertiary}
                  alt={`${service.title} Project Outcomes - Scalable Systems, Fast Page Loading, and SEO Foundations by CodeNClicks`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">
                BUSINESS BENEFITS
              </span>
              <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">
                Why It Matters
              </h2>
              <div className="grid grid-cols-1 gap-3 pt-4">
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 p-4 bg-brand-mist border border-brand-graphite rounded-xl"
                  >
                    <div className="w-7 h-7 rounded bg-white border border-brand-graphite flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-brand-coral" />
                    </div>
                    <span className="text-l font-heading font-bold text-brand-graphite">
                      {renderTextWithLinks(benefit)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {service.slug === "custom-software-development" && <SecurityDashboard />}

      {/* Pricing Tables - Flat Outlines */}
      {/* <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">
              Pricing
            </span>
            <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">
              Transparent Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {service.plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-8 rounded-[32px] flex flex-col justify-between min-h-[500px] relative border-4 border-brand-graphite bg-white ${
                  plan.popular ? "shadow-flat-blue" : "shadow-premium"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-6 px-4 py-1.5 bg-brand-lime text-brand-graphite text-xs font-mono font-bold border-2 border-brand-graphite uppercase rounded">
                    Popular
                  </span>
                )}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-brand-graphite mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-brand-graphite/60 leading-relaxed mb-6">
                    {plan.description}
                  </p>
                  <div className="text-3xl font-heading font-extrabold text-brand-blue mb-8">
                    {plan.price}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-xs font-mono text-brand-graphite/70"
                      >
                        <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />{" "}
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-full font-bold text-sm transition-colors ${
                      plan.popular
                        ? "bg-brand-blue text-white hover:bg-brand-blue/90"
                        : "bg-brand-mist border-2 border-brand-graphite text-brand-graphite hover:bg-brand-graphite hover:text-white"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section> */}

      {service.slug === "custom-software-development" && <LocationSection />}

      {/* Related Case Studies */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">
                Case Studies
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-brand-graphite leading-none">
                Proof in Production
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-brand-blue hover:gap-2.5 transition-all"
            >
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudiesStories.map((cs) => (
              <div className="group flex flex-col p-8 bg-white border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat transition-shadow duration-300 justify-between min-h-[500px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4">
                    <span className="px-3.5 py-1 text-xs font-mono font-bold bg-brand-mist border border-brand-graphite rounded-full text-brand-graphite">
                      {cs.category}
                    </span>
                    <span className="text-[10px] font-mono text-brand-blue font-bold">
                      ★ Mini Success Story
                    </span>
                  </div>

                  {/* <Link href={`/case-studies/${cs.slug}`}> */}
                  <h3 className="text-2xl font-heading font-bold text-brand-graphite group-hover:text-brand-blue transition-colors leading-tight">
                    {cs.title}
                  </h3>
                  {/* </Link> */}

                  <div className="space-y-3 pt-2">
                    <div>
                      <span className="text-[14px] font-mono uppercase tracking-wider text-brand-coral font-bold block">
                        The Challenge
                      </span>
                      <p className="text-sm text-brand-graphite/70 leading-relaxed mt-0.5">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-[14px] font-mono uppercase tracking-wider text-brand-blue font-bold block">
                        What We Built
                      </span>
                      <p className="text-sm text-brand-graphite/70 leading-relaxed mt-0.5">
                        {cs.built}
                      </p>
                    </div>
                    <div>
                      <span className="text-[14px] font-mono uppercase tracking-wider text-brand-blue font-bold block">
                        Business Objective
                      </span>
                      <p className="text-sm text-brand-graphite/70 leading-relaxed mt-0.5">
                        {cs.objective}
                      </p>
                    </div>
                    <div>
                      <span className="text-[14px] font-mono uppercase tracking-wider text-brand-graphite/60 font-bold block">
                        Technology Stack
                      </span>
                      <p className="text-sm font-mono text-brand-graphite/80 mt-0.5">
                        {cs.techStack}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-graphite/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-lime bg-brand-graphite px-3 py-1 rounded font-bold inline-block">
                    Measurable Outcome
                  </span>
                  <div className="text-l font-heading text-brand-graphite mt-2">
                    {cs.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Target Industries served */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">
              Industries
            </span>
            <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">
              Target Industries Served
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {displayIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="px-6 py-3 bg-white border-2 border-brand-graphite rounded-full text-sm font-mono font-bold text-brand-graphite shadow-premium hover:shadow-flat hover:border-brand-blue hover:text-brand-blue transition-all duration-300"
              >
                {ind.title}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">
              Reviews
            </span>
            <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">
              Client Success stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relevantTestimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 bg-brand-mist border-2 border-brand-graphite rounded-[24px]"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-brand-coral text-brand-coral"
                    />
                  ))}
                </div>
                <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans mb-6">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-3">
                  {/* <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-heading font-bold text-xs">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div> */}
                  <div>
                    {/* <div className="text-sm font-heading font-bold text-brand-graphite">
                      {t.name}
                    </div> */}
                    <div className="text-xs font-mono text-brand-graphite/50">
                      {t.role}
                      {/* , {t.company} */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Interactive FAQ Wrapper Client Component */}
      <ServiceDetailClient faqs={extras.faqs} serviceTitle={service.title} />

      {/* Consultation form */}
      <Section className="bg-brand-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-graphite leading-none">
                Ready to Get Started?
              </h2>
              <p className="text-brand-graphite/70 text-sm leading-relaxed">
                Book a free consultation to map your requirements, outline the
                project scope, and receive a transparent pricing estimate.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Free project estimate",
                  "Expert consultation",
                  "24-hour response",
                  "Transparent pricing",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs font-mono text-brand-graphite/60"
                  >
                    <Check className="w-4 h-4 text-brand-blue" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 border-2 border-brand-graphite rounded-[32px] shadow-premium">
              <ContactForm variant="consultation" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
