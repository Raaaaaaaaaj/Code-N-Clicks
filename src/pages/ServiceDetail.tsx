import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Zap, Shield, Clock, Users, BarChart3, Headphones, Award, TrendingUp, CheckCircle } from "lucide-react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";
import { getServiceBySlug, services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { useState } from "react";
import { breadcrumbSchema, faqSchema, organizationSchema, serviceSchema, useSEO, websiteSchema } from "@/lib/seo";

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

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const matchedService = getServiceBySlug(slug || "");
  const service = matchedService || services[0];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const Icon = service.icon;
  const images = serviceImages[service.slug] || serviceImages["web-development"];
  const extras = serviceExtras[service.slug] || serviceExtras["web-development"];
  const relatedServices = services.filter(s => s.slug !== service.slug).slice(0, 3);
  const relevantTestimonials = testimonials.slice(0, 3);
  const path = `/services/${service.slug}`;

  useSEO({
    title: `${service.title} Services | CodeNClicks IT Solutions`,
    description: service.description,
    path,
    image: images.hero,
    keywords: [
      `${service.title} services`,
      `${service.title} company India`,
      service.tagline,
      ...service.benefits.slice(0, 4),
    ],
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      serviceSchema({ name: `${service.title} Services`, description: service.description, path }),
      faqSchema(extras.faqs),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.title, path },
      ]),
    ],
  });

  if (!matchedService) return <Navigate to="/services" replace />;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-[1.1]">{service.title}</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">{service.tagline}</p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-glow">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/pricing" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  View Pricing
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src={images.hero}
                alt={`${service.title} services by CodeNClicks`}
                className="rounded-2xl shadow-card w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Stats */}
      <Section className="!py-14 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {extras.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us for this service */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">{extras.whyTitle}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{extras.whyDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: "Fast Delivery", desc: "Agile sprints with weekly updates and demos." },
                  { icon: Shield, title: "Quality Assured", desc: "Rigorous testing and code reviews on every project." },
                  { icon: Headphones, title: "Dedicated Support", desc: "A project manager you can reach anytime." },
                  { icon: Award, title: "Proven Track Record", desc: "200+ successful projects delivered on time." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={images.secondary}
                alt={`${service.title} expertise`}
                className="rounded-2xl shadow-card w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-4 bg-background border border-border rounded-xl p-4 shadow-card hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Trusted by 50+ Clients</div>
                    <div className="text-xs text-muted-foreground">For {service.title.toLowerCase()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
              How We Deliver <span className="text-gradient">Exceptional {service.title}</span>
            </h2>
            <p className="text-muted-foreground">A battle-tested process refined over 200+ projects to ensure your success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-background border border-border rounded-xl relative shadow-card group hover-lift"
              >
                <span className="text-5xl font-heading font-bold text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">{step.step}</span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits with Image */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={images.tertiary}
                alt={`Benefits of ${service.title}`}
                className="rounded-2xl shadow-card w-full object-cover"
              />
            </div>
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Benefits</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
                Why {service.title} <span className="text-gradient">Works</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every solution we deliver is designed to create measurable impact for your business. Here's what you can expect.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {service.benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl shadow-card"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">Transparent Pricing</h2>
            <p className="text-muted-foreground">Choose the plan that fits your needs. All plans include dedicated project management.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-xl relative ${plan.popular ? "bg-primary/5 border-2 border-primary shadow-glow" : "bg-background border border-border shadow-card"}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-heading font-semibold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-3xl font-heading font-bold text-primary mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${
                    plan.popular
                      ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                      : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Client Love</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
              What Our Clients <span className="text-gradient">Say About Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relevantTestimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl shadow-card"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Everything you need to know about our {service.title.toLowerCase()} services. Can't find your answer? Reach out - we love chatting!
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                Ask Us Anything <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {extras.faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-xl overflow-hidden shadow-card">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                    <ArrowRight className={`w-4 h-4 text-primary flex-shrink-0 transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Explore More</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
              Related <span className="text-gradient">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((s, i) => {
              const SIcon = s.icon;
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/services/${s.slug}`} className="block p-6 bg-card border border-border rounded-xl hover-lift group shadow-card">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <SIcon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.tagline}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Consultation Form */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Book a free consultation and let's discuss how {service.title.toLowerCase()} can transform your business. No commitment, just expert advice from young founders who genuinely care.
              </p>
              <ul className="space-y-3 mb-8">
                {["Free project estimate", "Expert consultation", "No obligation", "24-hour response", "Transparent pricing", "NDA available"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&h=300&fit=crop"
                alt="Schedule a consultation"
                className="rounded-2xl shadow-card w-full object-cover hidden lg:block"
              />
            </div>
            <ContactForm variant="consultation" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ServiceDetail;
