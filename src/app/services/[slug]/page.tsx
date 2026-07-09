import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Star, Zap, Shield, Clock, Headphones, Award, TrendingUp, CheckCircle } from "lucide-react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";
import { getServiceBySlug, services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { organizationSchema, websiteSchema, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

// Local image maps
const serviceImages: Record<string, { hero: string; secondary: string; tertiary: string }> = {
  "web-development": {
    hero: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
    secondary: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    tertiary: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  },
  "web-designing": {
    hero: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    secondary: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    tertiary: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&h=400&fit=crop",
  },
  "custom-software-development": {
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    secondary: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
    tertiary: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
  "ecommerce-development": {
    hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    secondary: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    tertiary: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
  },
  "crm-development": {
    hero: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    secondary: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
    tertiary: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
  },
  "digital-marketing": {
    hero: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=500&fit=crop",
    secondary: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    tertiary: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  "seo": {
    hero: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=500&fit=crop",
    secondary: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop",
    tertiary: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=600&h=400&fit=crop",
  },
  "google-meta-ads": {
    hero: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=500&fit=crop",
    secondary: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    tertiary: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
  },
  "graphics-designing": {
    hero: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop",
    secondary: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
    tertiary: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop",
  },
};

const serviceExtras: Record<string, { whyTitle: string; whyDesc: string; stats: { value: string; label: string }[]; faqs: { q: string; a: string }[] }> = {
  "web-development": {
    whyTitle: "Why Choose Us for Web Development?",
    whyDesc: "We don't just build websites - we engineer digital experiences that load fast, rank high, and convert visitors into paying customers. Our team writes clean, maintainable code that your future developers will thank us for.",
    stats: [
      { value: "<2s", label: "Avg Load Time" },
      { value: "99.9%", label: "Uptime Guarantee" },
      { value: "100+", label: "Websites Shipped" },
      { value: "A+", label: "Security Rating" },
    ],
    faqs: [
      { q: "What frameworks do you use?", a: "We primarily use React, Next.js, and Vue.js for frontend, with Node.js and Python for backend. We select the best stack based on your project's requirements." },
      { q: "Do you provide hosting?", a: "Yes! We can deploy to AWS, Vercel, or your preferred cloud provider with full CI/CD pipelines." },
      { q: "Can you migrate my existing website?", a: "Absolutely. We handle full migrations with zero downtime, including content, SEO rankings, and redirects." },
    ],
  },
  "web-designing": {
    whyTitle: "Why Choose Us for Web Design?",
    whyDesc: "Our designs aren't just pretty - they're strategic. Every color, layout, and interaction is backed by UX research and conversion data. We create designs that your users love and your business benefits from.",
    stats: [
      { value: "40%", label: "Avg Conversion Lift" },
      { value: "500+", label: "Pages Designed" },
      { value: "3x", label: "User Engagement" },
      { value: "100%", label: "Mobile Responsive" },
    ],
    faqs: [
      { q: "What design tools do you use?", a: "We work in Figma for all our design projects, making it easy for you to review, comment, and collaborate in real-time." },
      { q: "Do you handle development too?", a: "Yes! We offer end-to-end design-to-development services ensuring pixel-perfect implementation." },
      { q: "How many revision rounds are included?", a: "Depends on the plan, but our Professional plan includes 4 revision rounds. We iterate until you're thrilled." },
    ],
  },
  "custom-software-development": {
    whyTitle: "Why Choose Us for Custom Software?",
    whyDesc: "Off-the-shelf tools force you to adapt your business to software. We flip that - building software that adapts perfectly to your workflows, scales with your growth, and gives you a competitive edge.",
    stats: [
      { value: "50+", label: "Custom Solutions" },
      { value: "10x", label: "Process Efficiency" },
      { value: "100%", label: "Code Ownership" },
      { value: "24/7", label: "Support Available" },
    ],
    faqs: [
      { q: "How long does custom software take?", a: "An MVP typically takes 3-4 months. Full-featured solutions can take 6-12 months. We provide detailed timelines in our proposal." },
      { q: "Do I own the source code?", a: "100%. You get full ownership of all code, documentation, and intellectual property upon delivery." },
      { q: "Can you integrate with our existing tools?", a: "Absolutely. We specialize in integrations with CRMs, ERPs, payment systems, and third-party APIs." },
    ],
  },
  "ecommerce-development": {
    whyTitle: "Why Choose Us for E-commerce?",
    whyDesc: "We've generated millions in revenue for our e-commerce clients. From checkout optimization to inventory management, we build stores that sell - and keep selling while you sleep.",
    stats: [
      { value: "$5M+", label: "Revenue Generated" },
      { value: "35%", label: "Avg Cart Increase" },
      { value: "2x", label: "Conversion Rate" },
      { value: "60+", label: "Stores Launched" },
    ],
    faqs: [
      { q: "Shopify, WooCommerce, or custom?", a: "We'll recommend the best platform based on your scale, budget, and feature needs. We work with all major platforms plus custom builds." },
      { q: "Can you handle payment integration?", a: "Yes - Stripe, PayPal, Razorpay, and many more. We also handle multi-currency and tax compliance." },
      { q: "Do you provide ongoing store management?", a: "We offer monthly maintenance plans that include product updates, performance monitoring, and security patches." },
    ],
  },
  "crm-development": {
    whyTitle: "Why Choose Us for CRM Development?",
    whyDesc: "Generic CRMs are clunky and expensive. We build lean, powerful CRM systems tailored to your sales process - so your team actually enjoys using them and closes more deals.",
    stats: [
      { value: "45%", label: "Sales Efficiency Gain" },
      { value: "3x", label: "Lead Follow-up Speed" },
      { value: "360-degree", label: "Customer View" },
      { value: "100%", label: "Team Adoption" },
    ],
    faqs: [
      { q: "Can you migrate from Salesforce/HubSpot?", a: "Yes. We handle full data migration with mapping, cleaning, and validation to ensure nothing is lost." },
      { q: "Is mobile access included?", a: "All our CRM solutions are fully responsive, so your sales team can access it from any device." },
      { q: "Can it integrate with our email and calendar?", a: "Absolutely - Gmail, Outlook, Google Calendar, and more. We make sure your CRM fits into your existing workflow." },
    ],
  },
  "digital-marketing": {
    whyTitle: "Why Choose Us for Digital Marketing?",
    whyDesc: "We don't do 'spray and pray' marketing. Every campaign is data-driven, performance-tracked, and optimized relentlessly. We treat your ad budget like it's our own money.",
    stats: [
      { value: "5x", label: "Avg ROI" },
      { value: "300%", label: "Traffic Growth" },
      { value: "10M+", label: "Impressions Managed" },
      { value: "50+", label: "Campaigns Launched" },
    ],
    faqs: [
      { q: "What channels do you cover?", a: "Google, Meta (Facebook/Instagram), LinkedIn, Twitter, TikTok, email marketing, and content marketing." },
      { q: "How soon will I see results?", a: "Paid campaigns show results within days. Organic strategies like SEO typically need 3-6 months to show significant impact." },
      { q: "Do you create the content?", a: "Yes - we have in-house copywriters, designers, and video editors. Full-service content creation is included in Growth and Scale plans." },
    ],
  },
  "seo": {
    whyTitle: "Why Choose Us for SEO?",
    whyDesc: "Our SEO strategies are built on technical excellence and content authority - not black-hat tricks. We build sustainable organic traffic that compounds over time and makes your competitors nervous.",
    stats: [
      { value: "#1", label: "Rankings Achieved" },
      { value: "500%", label: "Avg Traffic Growth" },
      { value: "200+", label: "Keywords Ranked" },
      { value: "50+", label: "Clients Ranked" },
    ],
    faqs: [
      { q: "How long does SEO take to show results?", a: "SEO is a long-term game. You'll see initial improvements in 2-3 months, with significant results in 6-12 months." },
      { q: "Do you guarantee first page rankings?", a: "We don't promise specific rankings (anyone who does is lying), but we guarantee measurable improvement in traffic and leads." },
      { q: "Do you handle local SEO?", a: "Yes! Local SEO is our specialty. We optimize Google Business, local citations, and location-specific content." },
    ],
  },
  "google-meta-ads": {
    whyTitle: "Why Choose Us for Paid Ads?",
    whyDesc: "We've managed hundreds of thousands in ad spend and know how to squeeze every rupee and dollar for maximum returns. No wasted budget, no vanity metrics - just qualified leads.",
    stats: [
      { value: "3.5x", label: "Avg ROAS" },
      { value: "-40%", label: "Cost Per Lead" },
      { value: "$500K+", label: "Ad Spend Managed" },
      { value: "200+", label: "Campaigns Run" },
    ],
    faqs: [
      { q: "What's the minimum ad budget?", a: "We recommend at least $1,000/month for meaningful results, but we can work with smaller budgets for testing." },
      { q: "Do you create the ad creatives?", a: "Yes - our team handles copywriting, image design, and video ads. Everything is A/B tested for performance." },
      { q: "How do you report results?", a: "You get a custom dashboard with real-time data plus bi-weekly reports with insights and recommendations." },
    ],
  },
  "graphics-designing": {
    whyTitle: "Why Choose Us for Graphic Design?",
    whyDesc: "Great design isn't about decoration - it's about communication. Our designers create visuals that tell your brand story, build trust, and make your audience feel something.",
    stats: [
      { value: "500+", label: "Designs Created" },
      { value: "100+", label: "Brands Designed" },
      { value: "48hr", label: "Turnaround Time" },
      { value: "Unlimited", label: "Creativity" },
    ],
    faqs: [
      { q: "What file formats do you deliver?", a: "All common formats - AI, PSD, SVG, PNG, PDF, JPEG. Source files are always included." },
      { q: "Can you match our existing brand guidelines?", a: "Absolutely. We work within your brand guidelines or help create new ones from scratch." },
      { q: "Do you do motion graphics/video?", a: "Yes! Our Agency plan includes motion graphics and video editing. We can create social videos, explainers, and animated logos." },
    ],
  },
};

interface Props {
  params: { slug: string };
}

// Generate static routes at build time for speed & crawlability
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Dynamic Metadata generator
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  const images = serviceImages[service.slug] || serviceImages["web-development"];

  return {
    title: `${service.title} Services`,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} Services | CodeNClicks IT Solutions`,
      description: service.description,
      images: [{ url: images.hero }],
      url: `https://codenclicksit.in/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const images = serviceImages[service.slug] || serviceImages["web-development"];
  const extras = serviceExtras[service.slug] || serviceExtras["web-development"];
  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const relevantTestimonials = testimonials.slice(0, 3);
  const path = `/services/${service.slug}`;

  // JSON-LD dynamic schema pre-rendered on the server
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      serviceSchema({ name: `${service.title} Services`, description: service.description, path }),
      faqSchema(extras.faqs),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.title, path },
      ]),
    ]
  };

  return (
    <div className="bg-white text-brand-graphite">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="w-16 h-16 rounded-xl bg-brand-mist border-2 border-brand-graphite flex items-center justify-center">
                <Icon className="w-8 h-8 text-brand-blue" />
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-brand-graphite">
                {service.title}
              </h1>
              <p className="text-xl text-brand-graphite/80 leading-relaxed font-sans pt-2">
                {service.tagline}
              </p>
              <p className="text-sm text-brand-graphite/60 leading-relaxed max-w-xl">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-colors text-sm"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-graphite text-brand-graphite font-semibold rounded-full hover:bg-brand-graphite hover:text-white transition-colors text-sm"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src={images.hero}
                  alt={`${service.title} services by CodeNClicks`}
                  className="w-full h-full object-cover"
                />
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
                <div className="text-3xl md:text-5xl font-heading font-extrabold text-brand-lime leading-none">{stat.value}</div>
                <div className="text-xs font-mono text-white/70 uppercase tracking-wider mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-graphite leading-none">{extras.whyTitle}</h2>
              <p className="text-brand-graphite/70 leading-relaxed font-sans">{extras.whyDesc}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: Zap, title: "Fast Delivery", desc: "Agile sprints with weekly updates and demos." },
                  { icon: Shield, title: "Quality Assured", desc: "Rigorous testing and code reviews on every build." },
                  { icon: Headphones, title: "Dedicated Support", desc: "A project manager you can reach anytime." },
                  { icon: Award, title: "Proven Track Record", desc: "200+ successful projects delivered on time." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-mist border border-brand-graphite flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-heading font-bold text-brand-graphite">{item.title}</h3>
                      <p className="text-xs text-brand-graphite/60 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src={images.secondary}
                  alt={`${service.title} expertise`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Accordion Section */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Our Process</span>
            <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">
              How We Deliver Pixel-Perfect Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-white border-2 border-brand-graphite rounded-[24px] relative shadow-premium hover:shadow-flat transition-shadow duration-300"
              >
                <span className="text-4xl font-heading font-extrabold text-brand-blue/10 absolute top-4 right-4">{step.step}</span>
                <div className="w-10 h-10 rounded-lg bg-brand-mist border border-brand-graphite flex items-center justify-center mb-6">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="text-lg font-heading font-bold text-brand-graphite mb-2">{step.title}</h3>
                <p className="text-xs text-brand-graphite/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src={images.tertiary}
                  alt={`Benefits of ${service.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Benefits</span>
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
                      <Check className="w-4 h-4 text-brand-blue" />
                    </div>
                    <span className="text-sm font-heading font-bold text-brand-graphite">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing Tables - Flat Outlines */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Pricing</span>
            <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">Transparent Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                  <h3 className="text-2xl font-heading font-bold text-brand-graphite mb-1">{plan.name}</h3>
                  <p className="text-xs text-brand-graphite/60 leading-relaxed mb-6">{plan.description}</p>
                  <div className="text-3xl font-heading font-extrabold text-brand-blue mb-8">{plan.price}</div>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-xs font-mono text-brand-graphite/70">
                        <Check className="w-4 h-4 text-brand-blue flex-shrink-0" /> {f}
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
      </Section>

      {/* Testimonials */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Reviews</span>
            <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">Client Success stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relevantTestimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 bg-brand-mist border-2 border-brand-graphite rounded-[24px]"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-coral text-brand-coral" />
                  ))}
                </div>
                <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans mb-6">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-heading font-bold text-xs">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-heading font-bold text-brand-graphite">{t.name}</div>
                    <div className="text-xs font-mono text-brand-graphite/50">{t.role}, {t.company}</div>
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
                Book a free consultation to map your requirements, outline the project scope, and receive a transparent pricing estimate.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {["Free project estimate", "Expert consultation", "24-hour response", "Transparent pricing"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-mono text-brand-graphite/60">
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
