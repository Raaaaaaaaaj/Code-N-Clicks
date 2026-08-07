"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, Star, Check, ArrowUpRight, Zap, Shield, Clock,
  TrendingUp, Rocket, Heart, Globe, Code2, MessageSquare,
  Lightbulb, ThumbsUp, Cpu, Search, Users, Database, Sparkles, BookOpen, Layers, Server, Activity, Lock, Target, Cloud
} from "lucide-react";
import Section from "@/components/shared/Section";
import { testimonials } from "@/data/testimonials";
import { industries } from "@/data/industries";
import { organizationSchema, localBusinessSchema, websiteSchema, faqSchema } from "@/lib/seo";
import { useScrollFadeUp, useScrollStagger } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "30+", label: "Projects Built & Launched", icon: Rocket },
  { value: "95%", label: "Happy Client Rate", icon: Heart },
  { value: "13+", label: "Businesses Served", icon: Globe },
  { value: "Udyam", label: "Recognized MSME", icon: Shield },
];

const whoWeBuildFor = [
  { title: "Startups", desc: <>Turn your ideas into scalable digital products with <strong>custom software development</strong>, MVPs, and web applications built for rapid growth, faster market validation, and future scalability.</> },
  { title: "Small & Medium Businesses", desc: <>Replace spreadsheets and disconnected tools with <strong>custom CRM software</strong>, workflow automation, and business management systems that improve productivity and simplify daily operations.</> },
  { title: "Enterprises", desc: <>Modernize legacy systems with secure <strong>enterprise software solutions</strong>, system integrations, and scalable applications that improve collaboration, reporting, and operational efficiency.</> },
  { title: "Hotels & Hospitality", desc: <>Build <strong>hotel management software</strong>, booking engines, property management systems (PMS), and guest experience platforms that increase direct bookings and streamline hotel operations.</> },
  { title: "Healthcare", desc: <>Develop secure <strong> healthcare software solutions </strong>, patient portals, appointment management systems, and hospital management software designed for better patient care and operational efficiency.</> },
  { title: "Education", desc: <>Create <strong>custom learning management systems (LMS)</strong>, student portals, admission platforms, and educational software that simplify administration and enhance digital learning.</> },
  { title: "E-commerce Businesses", desc: <>Scale your online business with custom <strong> ecommerce development</strong>, inventory management, payment integrations, and high-performance storefronts built for better conversions.</> },
  { title: "Real Estate", desc: <>Develop custom <strong> real estate management software</strong>, property listing platforms, CRM systems, and lead management solutions that simplify sales, rentals, and customer communication.</> }
];

const comparisons = [
  {
    title: "Custom Software vs SaaS",
    desc: <><strong>Custom software</strong>  is built specifically for your business processes, giving you complete ownership, flexibility, and scalability as your company grows. While <strong> SaaS platforms</strong> are quick to adopt, they often come with recurring subscription costs, feature limitations, and workflows that may not fully match your business needs.</>
  },
  {
    title: "Custom Website vs WordPress Templates",
    desc: <>A <strong> custom website </strong>offers better performance, stronger security, and the flexibility to build features tailored to your business. While <strong> WordPress </strong>is a good option for simple websites, businesses with long-term growth plans often benefit from a custom solution that provides greater control, scalability, and optimization.</>
  },
  {
    title: "Custom CRM vs Excel Spreadsheets",
    desc: <> <strong>Custom CRM </strong>centralizes customer data, automates follow-ups, tracks sales pipelines, and provides real-time insights from a single platform. While <strong>Excel spreadsheets </strong> are useful for basic record keeping, they become difficult to manage as your business grows, leading to manual errors, duplicate data, and limited collaboration.</>
  },
  {
    title: "Custom ERP vs Multiple Software Tools",
    desc: <>A <strong>custom ERP</strong> system brings your inventory, sales, finance, HR, procurement, and day-to-day operations into a single, centralized platform. This eliminates duplicate data entry, improves collaboration between departments, and provides real-time insights for better decision-making. In contrast, managing multiple disconnected software tools often results in data silos, inconsistent information, higher subscription costs, and time-consuming manual processes that slow business growth and reduce operational efficiency.</>
  },
  {
    title: "Business Automation vs Manual Processes",
    desc: <><strong>Business automation </strong>streamlines repetitive tasks, reduces manual errors, and connects your workflows into a single, efficient system. While <strong>manual processes </strong>may work for small teams, they often lead to delays, duplicated effort, and reduced productivity as your business grows. Automating operations helps improve accuracy, save time, and allows your team to focus on higher-value work instead of repetitive tasks.</>
  },
  {
    title: "Cloud Software vs Desktop Software",
    desc: <><strong>Cloud-based software</strong> gives your team the flexibility to securely access business data from anywhere, whether they're working from the office, home, or on the move. With features like real-time collaboration, automatic backups, centralized data storage, and seamless software updates, cloud solutions improve productivity while reducing IT maintenance. In contrast, traditional desktop software is often limited to specific devices, requires manual updates, makes collaboration more difficult, and can become challenging to scale as your business grows.</>
  },
];

const faqs = [
  {
    q: "What is custom software development?",
    a: "Custom software development is the process of designing and building software tailored specifically to your business needs. Unlike generic SaaS platforms, custom software is developed to match your workflows, giving you full control, better scalability, and complete ownership of your source code without recurring license costs."
  },

  {
    q: "What services does CodeNClicks IT Solutions provide?",
    a: "We are a full-service custom software development company in India offering website development, custom web applications, CRM development, ERP solutions, SaaS product development, ecommerce development, UI/UX design, and business automation services to help companies scale efficiently."
  },

  {
    q: "How much does custom software development cost?",
    a: "The cost of custom software development depends on features, complexity, and technology requirements. We provide transparent, milestone-based pricing after understanding your business needs, ensuring cost-effective solutions compared to long-term SaaS subscription expenses."
  },

  {
    q: "What technologies do you use for software development?",
    a: "We use modern technologies for scalable software development including React, Next.js, and Angular for frontend, and Node.js, Express.js, Spring Boot, and Django for backend development. Our database stack includes PostgreSQL, MySQL, and MongoDB, deployed securely on AWS and cloud platforms."
  },

  {
    q: "How long does it take to build custom software?",
    a: "Development timelines depend on the project scope. A business website typically takes 2–4 weeks, while custom CRM systems, ERP software, or enterprise applications may take 2–6 months with agile development and weekly progress updates."
  },

  {
    q: "Why choose custom software over SaaS?",
    a: "Custom software offers complete ownership, flexibility, and scalability tailored to your business operations. Unlike SaaS products, it eliminates recurring subscription costs and allows you to build features specific to your workflows without limitations."
  },

  {
    q: "Do you build custom CRM software?",
    a: "Yes, we specialize in custom CRM development. We build CRM systems for lead management, sales tracking, automation, and integrations with WhatsApp, APIs, and marketing tools to streamline your business processes."
  },

  {
    q: "Do you provide website maintenance and support?",
    a: "Yes, we provide ongoing website maintenance, performance optimization, security updates, and technical support to ensure your website or software remains fast, secure, and scalable."
  },

  {
    q: "Can you upgrade or modernize existing software?",
    a: "Yes, we help businesses with software modernization by upgrading legacy systems into modern, scalable applications with improved UI/UX, performance, security, and integration capabilities."
  },

  {
    q: "Which industries do you serve?",
    a: "We provide custom software development services for industries including hospitality, healthcare, education, ecommerce, real estate, startups, and enterprises, delivering tailored digital solutions based on each industry's requirements."
  },

  {
    q: "Is SEO included in website development?",
    a: "Yes, we build SEO-friendly websites with technical SEO, fast loading speeds, structured data, and optimized architecture to help your website rank better on search engines from day one."
  },

  {
    q: "Do you work with international clients?",
    a: "Yes, we work with clients globally including the USA, UK, UAE, and Australia, providing custom software development and digital solutions with transparent communication and regular updates."
  },

  {
    q: "What happens after project delivery?",
    a: "After delivery, we provide ongoing support, maintenance, feature updates, and performance monitoring. You retain full ownership of the software, and we continue to support your business as it grows."
  }
];

const quickServices = [
  {
    title: "Custom Software",
    target: "FOR BUSINESS AUTOMATION",
    problem: "Managing operations through spreadsheets and disconnected tools slows everything down and creates errors.",
    outcome: "Custom software built around your workflow — from internal dashboards to full-scale systems that automate your business and scale with you.",
    tech: "Node.js, Spring Boot, PostgreSQL, AWS, React, Angular, Python, .Net, Express.js, MySQL, MongoDB",
    impact: "Zero recurring license dependency.",
    icon: Cpu,
    badge: "Typesafe API",
    href: "/services/custom-software-development",
  },
  {
    title: "Website Development",
    target: "For growing brands",
    problem: "Most websites look good but load slowly, fail to convert, don’t rank, and struggle to deliver real business results.",
    outcome: "Fast, SEO-ready websites built with modern tech like Next.js — designed to rank, load instantly, provide SSR & SSG out of the box and convert traffic into real business.",
    tech: "React, Next.js, Angular, Vue js, PHP, Tailwind",
    impact: "Higher conversion rate and SEO dominance.",
    icon: Code2,
    badge: "Under 2s Load",
    href: "/services/web-development",
  },
  {
    title: "SEO & Search Growth",
    target: "For organic pipeline",
    problem: "Running ads gets expensive, and traffic disappears the moment you stop spending money.",
    outcome: "SEO-first systems that help your website rank for high-intent or long tail keywords and bring consistent organic traffic without ongoing ad dependency.",
    tech: "Schema, Core Web Vitals, AI Search, Technical SEO, On and Off Page SEO, Programatic SEO, LLM SEO, Content Clusters",
    impact: "Sustainable organic lead generation.",
    icon: Search,
    badge: "Rank #1",
    href: "/services/seo",
  },
  {
    title: "Ecommerce Development",
    target: "For sales efficiency",
    problem: "Generic ecommerce platforms limit flexibility, slow down performance, and struggle to scale with growing businesses.",
    outcome: "Custom ecommerce platforms with fast load times, seamless checkout, and full control — designed to improve conversions and support long-term growth.",
    tech: "REST API, Webhooks, AWS, .Net, Node.js, MySQL, Angular, React.js, Stripe, Razorpay, PayPal, Meta API",
    impact: "Reduced response time and higher closing rates.",
    icon: Users,
    badge: "WhatsApp Sync",
    href: "/services/ecommerce-development",
  },
];

const differentiators = [
  {
    title: "Business-Centric Solutions",
    desc:
      <>
        Every business is different. We build <strong> custom software </strong> around your workflows, helping you eliminate manual work, improve productivity, and streamline operations instead of forcing you to adapt to generic software.,
      </>,
    icon: Search
  },
  {
    title: "100% Ownership",
    desc: <>Unlike SaaS platforms, you own the <strong>source code, database, and infrastructure</strong>. No recurring license fees, vendor lock-in, or restrictions—your software is your business asset.</>,
    icon: Shield
  },
  {
    title: "Scalable Architecture",
    desc: <>Our <strong> enterprise software solutions </strong> are designed to scale as your business grows. Whether it's 10 users or 10,000, your system remains secure, reliable, and high-performing.</>,
    icon: Code2
  },
  {
    title: "Tailored Integrations",
    desc: <>Need your software to connect with payment gateways, WhatsApp, ERP, CRM, accounting tools, or third-party APIs? We build seamless integrations that keep your business connected.</>,
    icon: Users
  },
  {
    title: "Faster Business Operations",
    desc: <>From lead management and approvals to inventory and reporting, we automate repetitive tasks so your team can focus on growing the business instead of handling manual processes.</>,
    icon: Zap
  },
  {
    title: "Long-Term Technology Partner",
    desc: <>We don't just deliver software and disappear. We support your business with continuous improvements, feature enhancements, maintenance, and technical guidance as your company evolves.</>,
    icon: Server
  }
];

const workflowSteps = [
  {
    icon: Search,
    title: "1. Discovery & Business Analysis",
    desc: "We understand your business processes, identify operational challenges, and gather detailed requirements to define the right solution before development begins."
  },
  {
    icon: Layers,
    title: "2. Solution Planning & UI/UX Design",
    desc: "Our team designs intuitive user experiences, system architecture, database structure, and workflows that align with your business goals and future growth."
  },
  {
    icon: Code2,
    title: "3. Custom Software Development",
    desc: "Using agile development practices, we build your application in weekly milestones, allowing you to review progress, provide feedback, and stay informed throughout the project."
  },
  {
    icon: Shield,
    title: "4. Quality Assurance & Testing",
    desc: "Every feature is thoroughly tested for functionality, security, performance, and compatibility to ensure your software is reliable before launch."
  },
  {
    icon: Rocket,
    title: "5. Deployment & Go Live",
    desc: "We deploy your software on secure cloud infrastructure, configure servers, optimize performance, and ensure a smooth transition to production."
  },
  {
    icon: Activity,
    title: "6. Ongoing Support & Improvements",
    desc: "After launch, we provide maintenance, feature enhancements, security updates, performance optimization, and technical support as your business continues to grow."
  }
];

const caseStudiesStories = [
  {
    title: "Anime Paradise Headless Storefront",
    category: "E-Commerce",
    challenge: "The client needed a fast, SEO-friendly ecommerce platform with a custom admin panel to manage products, inventory, and orders without relying on third-party ecommerce platforms.",
    built: "A fully custom ecommerce solution using Next.js, Node.js, Express.js, and MySQL, featuring a buyer-facing storefront and a secure owner dashboard for product, inventory, and order management.",
    techStack: "Next.js • Node.js • Express.js • MySQL • Tailwind CSS",
    objective: "Increase organic traffic, improve shopping experience, and simplify product management through a centralized admin portal.",
    impact: "Sub-2 second page load speed, SEO-optimized architecture, and a scalable ecommerce platform with complete ownership and zero platform dependency.",
    slug: "anime-paradise-ecommerce-platform"
  },
  {
    title: "Namita Textiles Erp & Inventory Management",
    category: "Supplier",
    challenge: "The business relied on manual processes and multiple spreadsheets, resulting in repetitive work, operational delays, and higher day-to-day management costs.",
    built: "A custom in-house business management system to digitize daily operations, centralize business data, and automate routine workflows across different departments.",
    techStack: "Angular • .NET • PostgreSQL • Websockets • AWS",
    objective: "Reduce operational costs, eliminate manual workflows, and improve overall business efficiency through process automation.",
    impact: "Significantly reduced manual effort, improved operational efficiency, and provided a centralized platform for managing day-to-day business activities.",
    slug: "namita-textiles-erp-inventory-management"
  },
  {
    title: "Custom Restaurant POS software for Tokefe Cafe",
    category: "Restaurant & Hospitality",
    challenge: "The café needed a modern POS system to manage multiple outlets, streamline order processing, reduce billing errors, and improve the customer ordering experience.",
    built: <>A custom <strong>multi-user, multi-outlet POS software</strong> with QR code ordering, centralized menu management, billing, order tracking, inventory management, and role-based access for staff and administrators.</>,
    techStack: "React • Node.js • Express.js • MySQL • QR Code Ordering • AWS",
    objective: "Digitize restaurant operations, speed up order processing, simplify outlet management, and deliver a seamless dine-in experience while reducing operational overhead.",
    impact: "Enabled centralized management across multiple outlets, faster order processing, contactless QR code ordering, and a scalable POS platform built to support future business growth.",
    slug: "tokefe-cafe-pos-software"
  },
  {
    title: "Custom Hotel Management System for Hotel Mahamaya",
    category: "Hospitality",
    challenge: "The hotel needed a unified platform to manage reservations, front desk operations, restaurant billing, and multiple branches while reducing manual work and improving the guest experience.",
    built: "A comprehensive Cloud Based Hotel Management System (HMS) with an integrated booking engine, website reservation system, POS module, real-time dashboards, reporting, and secure multi-user, multi-branch management from a single platform.",
    techStack: ".Net • Angular • Meta API • AWS",
    objective: "Streamline hotel operations, increase direct bookings, centralize business management, and provide actionable insights through real-time reports and dashboards.",
    impact: "Enabled centralized management across multiple hotel branches, simplified reservation and billing workflows, improved operational visibility with real-time dashboards, and reduced manual administrative effort.",
    slug: "hotel-mahamaya-hms"
  }
];

const technologyExpertise = [
  {
    title: "Frontend Development",
    desc: "We build responsive, SEO-friendly, and high-performance user interfaces that deliver seamless experiences across desktop, tablet, and mobile devices.",
    techs: ["React", "Next.js", "Angular", "Vue.js", "Svelte", "TypeScript", "Tailwind CSS", "Material UI", "Bootstrap",],
    icon: Code2
  },
  {
    title: "Backend Development",
    desc: "Our backend solutions are designed to handle complex business logic, secure APIs, user management, third-party integrations, and high-volume application workloads.",
    techs: ["Node.js", "Express.js", "Spring Boot", "Django", "Laravel", ".Net", "NestJS", "GraphQL", "REST APIs"],
    icon: Server
  },
  {
    title: "Database Architecture",
    desc: "We design secure and scalable database architectures that ensure reliable data storage, faster queries, and efficient application performance.",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Oracle", "SQL Server"],
    icon: Database
  },
  {
    title: "Cloud & DevOps",
    desc: "From deployment to monitoring, we use modern cloud infrastructure and DevOps practices to keep your applications secure, reliable, and ready to scale.",
    techs: ["AWS", "Azure", "Docker", "Kubernetes", "Cloudflare", "CI/CD Pipelines", "Terraform", "Serverless"],
    icon: Cloud
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll trigger reveal animations
  const heroTextRef = useScrollFadeUp({ y: 35, duration: 0.9 });
  const heroVisualRef = useScrollFadeUp({ y: 45, duration: 1.0, delay: 0.1 });
  const quickServicesRef = useScrollStagger({ y: 25, stagger: 0.08 });
  const statsContainerRef = useScrollStagger({ y: 20, stagger: 0.08 });
  const diffContainerRef = useScrollStagger({ y: 30, stagger: 0.1 });
  const casesContainerRef = useScrollStagger({ y: 35, stagger: 0.12 });
  const processContainerRef = useScrollStagger({ y: 20, stagger: 0.12 });
  const testimonialsContainerRef = useScrollStagger({ y: 25, stagger: 0.08 });
  const industriesContainerRef = useScrollStagger({ y: 15, stagger: 0.06 });
  const techContainerRef = useScrollStagger({ y: 20, stagger: 0.08 });
  const faqContainerRef = useScrollStagger({ y: 20, stagger: 0.08 });

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      faqSchema(faqs)
    ]
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex flex-col justify-center pt-8 lg:pt-16 pb-16 border-b border-brand-graphite bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div ref={heroTextRef} className="lg:col-span-7 space-y-6">

              <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tighter text-brand-graphite leading-[1.0] max-w-3xl">
                Custom Software Development Company for <br /> <span className="bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-coral bg-clip-text text-transparent">Growing Businesses.</span>
              </h1>

              <div className="max-w-2xl text-base md:text-lg text-brand-graphite/80 leading-relaxed font-sans pt-2">
                We build <strong>custom software</strong> that actually works the way your business does. Instead of forcing you to adjust to generic tools or paying for features you don’t need, we create custom web applications, CRM systems, and business software tailored to your workflows—so you can run operations smoothly and grow without unnecessary complexity.
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue/90 hover:shadow-flat-blue transition-all duration-300 text-sm shadow-sm"
                >
                  Get Your Free Growth Roadmap <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-graphite text-brand-graphite font-bold rounded-xl hover:bg-brand-graphite hover:text-white transition-all duration-300 text-sm"
                >
                  Explore Our Work <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div ref={heroVisualRef} className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center lg:justify-end min-h-[380px] w-full">
              <div className="w-full max-w-[380px] bg-brand-graphite text-white rounded-3xl border-4 border-brand-graphite shadow-flat overflow-hidden p-6 aspect-[4/3] flex flex-col justify-between absolute right-8 top-0 z-10 transition-transform duration-500 hover:scale-[1.02] font-mono text-[14px]">
                <div>
                  <span className="text-brand-blue">import</span>{" "}
                  <span className="text-white">{`{ growth }`}</span>{" "}
                  <span className="text-brand-blue">from</span>{" "}
                  <span className="text-brand-lime">"@codenclicks"</span>;
                </div>

                <div className="text-white/30">// Engineering business growth.</div>

                <div>
                  <span className="text-brand-blue">const</span>{" "}
                  <span className="text-white">time</span>{" "}
                  <span>=</span>{" "}
                  <span className="text-brand-lime">"saved"</span>;
                </div>

                <div>
                  <span className="text-brand-blue">const</span>{" "}
                  <span className="text-white">revenue</span>{" "}
                  <span>=</span>{" "}
                  <span className="text-brand-lime">"increasing"</span>;
                </div>

                <div>
                  <span className="text-brand-blue">const</span>{" "}
                  <span className="text-white">subscriptions</span>{" "}
                  <span>=</span>{" "}
                  <span className="text-brand-coral">0</span>;
                </div>

                <div>
                  <span className="text-brand-blue">const</span>{" "}
                  <span className="text-white">competitors</span>{" "}
                  <span>=</span>{" "}
                  <span className="text-brand-lime">"behind"</span>;
                </div>

                <div>
                  <span className="text-brand-blue">export default</span>{" "}
                  <span className="text-white">growth</span>
                  <span>()</span>{" "}
                  <span>{`{`}</span>
                </div>

                <div className="pl-4">
                  <span className="text-white">customSoftware</span>
                  <span>: </span>
                  <span className="text-brand-blue">true</span>,
                </div>

                <div className="pl-4">
                  <span className="text-white">website</span>
                  <span>: </span>
                  <span className="text-brand-lime">"high-performance"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-white">marketing</span>
                  <span>: </span>
                  <span className="text-brand-lime">"ROI-focused"</span>,
                </div>

                <div>{`}`}</div>
              </div>

              <div className="absolute left-4 bottom-[-13px] z-20 bg-white/95 backdrop-blur border-4 border-brand-graphite rounded-2xl p-5 shadow-flat max-w-[220px] transition-transform duration-1000 hover:scale-[1.05] animate-float">
                <div className="text-2xl font-heading font-extrabold text-brand-blue leading-none">+340%</div>
                <div className="text-[10px] font-mono font-medium uppercase tracking-wider mt-1 text-brand-graphite/60">Productivity growth</div>
                <div className="w-full h-12 mt-3 flex items-end gap-1.5">
                  <div className="w-3 bg-brand-blue/20 rounded-t h-4" />
                  <div className="w-3 bg-brand-blue/30 rounded-t h-6" />
                  <div className="w-3 bg-brand-blue/50 rounded-t h-8" />
                  <div className="w-3 bg-brand-blue/70 rounded-t h-10" />
                  <div className="w-3 bg-brand-blue rounded-t h-12" />
                </div>
              </div>

              <div className="absolute top-12 left-16 z-30 bg-brand-lime text-brand-graphite border-2 border-brand-graphite rounded-full px-4 py-1.5 shadow-flat font-mono font-bold text-[10px] uppercase tracking-wider animate-float" style={{ animationDelay: "0.5s" }}>
                Next.js
              </div>

              <div className="absolute top-30 left-16 z-30 bg-brand-lime text-brand-graphite border-2 border-brand-graphite rounded-full px-4 py-1.5 shadow-flat font-mono font-bold text-[10px] uppercase tracking-wider animate-float" style={{ animationDelay: "0.5s" }}>
                SpringBoot
              </div>
              <div className="absolute bottom-16 right-0 z-30 bg-brand-coral text-white border-2 border-brand-graphite rounded-full px-4 py-1.5 shadow-flat font-mono font-bold text-[10px] uppercase tracking-wider animate-float" style={{ animationDelay: "1.2s" }}>
                React.js
              </div>

              <div className="absolute bottom-36 right-0 z-30 bg-brand-coral text-white border-2 border-brand-graphite rounded-full px-4 py-1.5 shadow-flat font-mono font-bold text-[10px] uppercase tracking-wider animate-float" style={{ animationDelay: "1.2s" }}>
                Angular
              </div>
            </div>
          </div>

          <div ref={quickServicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t-2 border-brand-graphite">
            {quickServices.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group p-6 bg-brand-mist border-2 border-brand-graphite rounded-2xl hover:bg-white hover:shadow-flat hover:border-brand-blue transition-all duration-300 flex flex-col justify-between min-h-[300px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-white border-2 border-brand-graphite rounded-xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300">
                      <card.icon className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-white text-brand-graphite border border-brand-graphite/20 px-2.5 py-1 rounded-full group-hover:bg-brand-lime group-hover:border-brand-graphite transition-all">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-graphite mb-1.5 group-hover:text-brand-blue transition-colors">
                    {card.title}
                  </h3>
                  <div className="text-[14px] font-mono text-brand-blue uppercase tracking-wider mb-2 font-bold">{card.target}</div>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-[12px] font-mono uppercase tracking-wider text-brand-coral/80 font-bold block">The Bottleneck</span>
                      <p className="text-[12px] text-brand-graphite/70 leading-normal">{card.problem}</p>
                    </div>
                    <div>
                      <span className="text-[12px] font-mono uppercase tracking-wider text-brand-blue/80 font-bold block">The Outcome</span>
                      <p className="text-[12px] text-brand-graphite/85 leading-normal font-medium">{card.outcome}</p>
                    </div>
                    <div className="pt-2 border-t border-brand-graphite/10">
                      <span className="text-[12px] font-mono uppercase tracking-wider text-brand-graphite/60 font-bold block">Tech Stack</span>
                      <p className="text-[12px] font-mono text-brand-graphite/80">{card.tech}</p>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-blue mt-2">
                  Explore Service <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TRUST SIGNALS (EEAT) SECTION & WHO WE ARE */}
      <section className="bg-white py-14 border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={statsContainerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2 border-l-2 border-brand-graphite pl-6">
                <div className="text-4xl lg:text-5xl font-heading font-extrabold text-brand-graphite leading-none flex items-baseline gap-1">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-brand-graphite/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-brand-graphite/10 max-w-8xl">
            <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase block mb-4">Who We Are</span>
            <p className="text-base text-brand-graphite/80 font-sans leading-relaxed">
              At <strong>Code N Clicks IT Solutions</strong>, we believe technology should solve real business problems—not create new ones. As an MSME-registered, founder-led custom software development company in India, we help businesses build websites, custom software, CRM systems, and digital solutions that are designed to grow with them.
              <br /> <br />
              Every business works differently, which is why we don't believe in one-size-fits-all software. Instead of forcing your business to adapt to generic tools, we build solutions around your workflows, making everyday operations simpler, faster, and more efficient.
              <br /> <br />
              Whether you're a startup launching your first product or an established business looking to modernize your existing systems, our team focuses on building secure, scalable, and high-performing software using modern technologies and industry best practices.
              <br /> <br />
              From hospitality and healthcare to education, e-commerce, and corporate businesses, we've helped organizations turn ideas into reliable digital products that improve productivity, automate repetitive tasks, and support long-term growth.
              <br /> <br />
              Our goal is simple: build technology that creates real value for your business today while staying ready for tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY CODE_N_CLICKS (CORE DIFFERENTIATORS) */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">Our Differentiators</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-[1.0]">
                Why Businesses Choose <br /> <span className="bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-coral bg-clip-text text-transparent">Code N Clicks IT Solutions</span>
              </h2>
              <p className="text-brand-graphite/70 leading-relaxed font-sans">
                We build custom software, business websites, and enterprise applications that help businesses automate operations, improve performance, and scale with confidence. Every solution is engineered for speed, security, and long-term growth.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-graphite text-white font-bold rounded-xl hover:bg-brand-blue transition-colors text-sm"
                >
                  Request a Free Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div ref={diffContainerRef} className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.map((diff) => (
                <div key={diff.title} className="p-8 bg-white border-2 border-brand-graphite rounded-[24px] hover:shadow-flat hover:border-brand-blue transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-mist border-2 border-brand-graphite flex items-center justify-center mb-6">
                    <diff.icon className="w-6 h-6 text-brand-coral" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-graphite mb-3">{diff.title}</h3>
                  <p className="text-sm text-brand-graphite/70 leading-relaxed">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 4. WHO WE BUILD FOR */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            {/* <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Our Ideal Clients</span> */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue leading-none">
              Who We Build For
            </h2>
            <p className="text-brand-graphite/70 leading-relaxed mt-4">
              We build <strong> custom software solutions </strong> tailored to the unique operational needs of businesses across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {whoWeBuildFor.map((client) => (
              <div key={client.title} className="p-6 bg-brand-mist border-2 border-brand-graphite hover:shadow-flat hover:border-brand-coral transition-all duration-30 rounded-[24px]">
                <h3 className="text-xl font-heading font-bold text-brand-graphite mb-3 text-brand-blue">{client.title}</h3>
                <p className="text-sm text-brand-graphite/80 leading-relaxed">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. CASE STUDIES (MINI STORIES) */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">Case Studies</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-brand-graphite leading-none">
                Proof in Production
              </h2>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-brand-blue hover:gap-2.5 transition-all">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div ref={casesContainerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudiesStories.map((cs) => (
              <div key={cs.slug} className="group flex flex-col p-8 bg-white border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat transition-shadow duration-300 justify-between min-h-[500px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4">
                    <span className="px-3.5 py-1 text-xs font-mono font-bold bg-brand-mist border border-brand-graphite rounded-full text-brand-graphite">{cs.category}</span>
                    <span className="text-[10px] font-mono text-brand-blue font-bold">★ Mini Success Story</span>
                  </div>

                  <Link href={`/case-studies/${cs.slug}`}>
                    <h3 className="text-2xl font-heading font-bold text-brand-graphite group-hover:text-brand-blue transition-colors leading-tight">
                      {cs.title}
                    </h3>
                  </Link>

                  <div className="space-y-3 pt-2">
                    <div>
                      <span className="text-[14px] font-mono uppercase tracking-wider text-brand-coral font-bold block">The Challenge</span>
                      <p className="text-sm text-brand-graphite/70 leading-relaxed mt-0.5">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="text-[14px] font-mono uppercase tracking-wider text-brand-blue font-bold block">What We Built</span>
                      <p className="text-sm text-brand-graphite/70 leading-relaxed mt-0.5">{cs.built}</p>
                    </div>
                    <div>
                      <span className="text-[14px] font-mono uppercase tracking-wider text-brand-blue font-bold block">Business Objective</span>
                      <p className="text-sm text-brand-graphite/70 leading-relaxed mt-0.5">{cs.objective}</p>
                    </div>
                    <div>
                      <span className="text-[14px] font-mono uppercase tracking-wider text-brand-graphite/60 font-bold block">Technology Stack</span>
                      <p className="text-sm font-mono text-brand-graphite/80 mt-0.5">{cs.techStack}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-graphite/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-lime bg-brand-graphite px-3 py-1 rounded font-bold inline-block">Measurable Outcome</span>
                  <div className="text-l font-heading text-brand-graphite mt-2">
                    {cs.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. HOW WE WORK (MILESTONE PROCESS) */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 space-y-6">
              <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">Our Development Process</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-[1.0]">
                A Transparent Process Built for Successful Software Projects
              </h2>
              <p className="text-brand-graphite/70 leading-relaxed max-w-sm">
                From idea to deployment, we follow a structured development process that keeps you involved at every stage, ensuring your custom software is delivered on time, within budget, and built to scale.
              </p>

              <div className="relative rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat aspect-[4/3] w-full bg-brand-mist hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=450&fit=crop"
                  alt="CodeNClicks Custom CRM Planning and SaaS MVP Design Session"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                  loading="lazy"
                />
              </div>
            </div>

            <div ref={processContainerRef} className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {workflowSteps.map((step) => (
                <div key={step.title} className="flex flex-col gap-4 p-6 bg-brand-mist border-2 border-brand-graphite rounded-[24px] hover:shadow-flat hover:border-brand-coral transition-all duration-30 rounded-[24px]">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-brand-graphite flex items-center justify-center text-brand-blue font-bold">
                    <step.icon className="w-5 h-5 text-brand-coral" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-heading font-extrabold text-brand-graphite">{step.title}</h3>
                    <p className="text-sm text-brand-graphite/70 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 7. TECHNOLOGY EXPERTISE */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">Technology Stack</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none">
              Modern Technologies. Reliable Software.
            </h2>
            <p className="text-brand-graphite/70 leading-relaxed mt-4">
              We use trusted, industry-leading technologies to build custom software, web applications, and enterprise solutions that are fast, secure, scalable, and built for long-term business growth.
            </p>
          </div>

          <div ref={techContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyExpertise.map((tech) => (
              <div key={tech.title} className="p-6 bg-white border-2 border-brand-graphite rounded-[24px] shadow-premium hover:shadow-flat transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-mist border-2 border-brand-graphite flex items-center justify-center text-brand-blue">
                    <tech.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-brand-graphite">{tech.title}</h3>
                </div>
                <p className="text-xs text-brand-graphite/70 leading-relaxed mb-4">{tech.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.techs.map((item) => (
                    <span key={item} className="px-2.5 py-1 bg-brand-graphite border border-brand-graphite/20 rounded-md text-[10px] font-mono font-bold text-brand-lime">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 8. CLIENT TESTIMONIALS WALL */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">Client Reviews</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none">
              Loved by Growing Brands
            </h2>
          </div>

          <div ref={testimonialsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t) => (
              <div
                key={t.name}
                className="p-8 bg-brand-mist border-2 border-brand-graphite rounded-[24px] shadow-premium flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-brand-coral text-brand-coral" />
                    ))}
                  </div>
                  <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-brand-graphite/10">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-heading font-bold text-xs">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold text-brand-graphite">{t.name}</div>
                    <div className="text-[10px] font-mono text-brand-graphite/50">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. INDUSTRIES SERVED */}
      {/* <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Industries</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none">
              Specialized Industry Playbooks
            </h2>
            <p className="text-brand-graphite/70 leading-relaxed mt-4 max-w-xl mx-auto">
              We solve complex operational bottlenecks by building tailored digital products designed for the specific regulatory and scaling needs of each sector.
            </p>
          </div>

          <div ref={industriesContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(0, 6).map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.slug} className="p-6 bg-white border-2 border-brand-graphite rounded-[24px] hover:shadow-flat transition-all duration-300 flex flex-col h-full group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-mist border-2 border-brand-graphite flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-brand-graphite">
                      <Link href={`/industries/${ind.slug}`} className="hover:text-brand-blue transition-colors">
                        {ind.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-coral font-bold block mb-1">Common Problem</span>
                      <p className="text-xs text-brand-graphite/70 leading-relaxed">{ind.challenges[0]}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-blue font-bold block mb-1">Solution Delivered</span>
                      <p className="text-xs text-brand-graphite/70 leading-relaxed">{ind.solutions[0]}</p>
                    </div>
                  </div>

                  <Link href={`/industries/${ind.slug}`} className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-blue mt-6 pt-4 border-t border-brand-graphite/10">
                    Explore Industry Solutions <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Section> */}

      {/* 10. COMPARISONS (PRE-FAQ) */}
      <Section className="bg-white border-b-2 border-brand-graphite py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            {/* <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">Why Businesses Choose the Smarter Approach</span> */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none">
              Why Businesses Choose the Smarter Approach
            </h2>
            <p>
              Choosing the right technology and growth strategy can save your business time, reduce long-term costs, and create a strong foundation for sustainable growth. Here's how custom solutions compare to traditional approaches.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparisons.map((comp) => (
              <div key={comp.title} className="p-6 border-2 border-brand-graphite rounded-[20px] bg-brand-mist text-center hover:shadow-flat hover:border-brand-coral transition-all duration-30">
                <h3 className="text-xl font-heading font-bold text-brand-blue mb-3">{comp.title}</h3>
                <p className="text-sm text-brand-graphite/80 leading-relaxed">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 11. FAQ SECTION */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-6 sticky top-24">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-[1.0]">
                Frequently asked queries.
              </h2>
              <p className="text-brand-graphite/70 leading-relaxed">
                Clear scope definitions and timelines for founders, hospitality hubs, and sales teams seeking digital transformation.
              </p>
            </div>

            <div ref={faqContainerRef} className="lg:col-span-8 space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-2 border-brand-graphite rounded-[20px] overflow-hidden bg-white"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-base font-heading font-bold text-brand-graphite pr-4">{faq.q}</span>
                    <span className="text-xl font-heading font-bold text-brand-blue select-none">
                      {openFaq === i ? "—" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 pt-1 border-t border-brand-graphite/10">
                      <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 12. HIGH-IMPACT VALUE CTA */}
      <section className="bg-brand-blue text-white py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-none tracking-tighter">
            Ready to Build Software <br /> That Grows Your Business?
          </h2>
          <p className="text-white/80 max-w-5xl mx-auto text-lg leading-relaxed font-sans">
            Whether you need a custom software solution, business website, CRM, ERP system, hotel management software, or workflow automation platform, we're here to help. Our team works closely with you to understand your requirements, recommend the right technology, and deliver scalable software built for long-term business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-brand-mist transition-all duration-300 text-sm shadow-sm"
            >
              Get a Free Project Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-sm"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-white/70 font-mono">
            {["Free Project Consultation", "Transparent Project Estimates", "Dedicated Development Support"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-lime" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
