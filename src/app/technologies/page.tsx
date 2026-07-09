import { ArrowRight, Monitor, Server, Cloud, BarChart3, BrainCircuit, Brush, type LucideIcon } from "lucide-react";
import Section from "@/components/shared/Section";
import Link from "next/link";
import { organizationSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Monitor,
  Backend: Server,
  "DevOps & Cloud": Cloud,
  "Marketing Tools": BarChart3,
  "AI Tools & Integrations": BrainCircuit,
  "Graphics Design": Brush,
};

const techCategories = [
  {
    title: "Frontend",
    techs: [
      { name: "React", desc: "Component-based UI library for building interactive interfaces." },
      { name: "Angular", desc: "Enterprise-grade framework for complex web applications." },
      { name: "Svelte", desc: "A rising star that compiles code into small, vanilla JavaScript, providing superior performance." },
      { name: "Next.js", desc: "React framework for server-side rendering and static generation." },
      { name: "Astro", desc: "Modern framework for building fast, content-focused websites." },
      { name: "TypeScript", desc: "Type-safe JavaScript for scalable, maintainable codebases." },
      { name: "Tailwind CSS", desc: "Utility-first CSS framework for rapid, consistent styling." },
      { name: "Bootstrap", desc: "Most popular open-source front-end framework used for faster, responsive, and mobile-first web development" },
      { name: "Vue.js", desc: "Progressive framework for building modern web interfaces." },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", desc: "JavaScript runtime for building fast, scalable server applications." },
      { name: "Express JS", desc: "Minimalist web framework for Node.js, perfect for APIs and microservices." },
      { name: "NestJS", desc: "Progressive Node.js framework for building efficient, reliable server-side applications." },
      { name: "Laravel", desc: "PHP framework for elegant syntax and powerful features." },
      { name: "CodeIgniter", desc: "Lightweight PHP framework for rapid development." },
      { name: "ASP.NET Core", desc: "Cross-platform framework for building modern, cloud-based web applications." },
      { name: "Ruby on Rails", desc: "Full-stack web framework for rapid development with convention over configuration." },
      { name: "Go", desc: "Compiled language designed for performance and concurrency in backend services." },
      { name: "Python", desc: "Versatile language for APIs, data science, and automation." },
      { name: "PostgreSQL", desc: "Advanced open-source relational database system." },
      { name: "MongoDB", desc: "Flexible NoSQL database for modern applications." },
      { name: "MySQL", desc: "Widely-used relational database for structured data storage." },
      { name: "GraphQL", desc: "Query language for efficient, flexible API interactions." },
      { name: "Redis", desc: "In-memory data store for caching and real-time features." },
      { name: "SpringBoot", desc: "Java-based framework for building stand-alone, production-grade Spring-based applications." },
      { name: "Django", desc: "High-level Python web framework that encourages rapid development and clean, pragmatic design." },
    ],
  },
  {
    title: "DevOps & Cloud",
    techs: [
      { name: "AWS", desc: "Comprehensive cloud platform for hosting and services." },
      { name: "Azure", desc: "Microsoft's cloud platform for building, deploying, and managing applications." },
      { name: "Google Cloud", desc: "Google's cloud platform for scalable infrastructure and services." },
      { name: "Docker", desc: "Containerization for consistent deployments everywhere." },
      { name: "Kubernetes", desc: "Container orchestration for scalable infrastructure." },
      { name: "GitHub Actions", desc: "CI/CD automation for continuous integration and delivery." },
      { name: "Vercel", desc: "Edge platform for frontend deployment with zero config." },
      { name: "Netlify", desc: "All-in-one platform for automating modern web projects." },
      { name: "Render" , desc: "Unified cloud platform for hosting web apps, APIs, and databases." },
      { name: "Terraform", desc: "Infrastructure as code for reproducible cloud setups." },
    ],
  },
  {
    title: "Marketing Tools",
    techs: [
      { name: "Google Analytics", desc: "Web analytics for tracking and reporting website traffic." },
      { name: "Google Ads", desc: "Pay-per-click advertising platform for search and display." },
      { name: "Meta Ads Manager", desc: "Advertising platform for Facebook and Instagram campaigns." },
      { name: "SEMrush", desc: "All-in-one SEO, content, and competitive analysis toolkit." },
      { name: "Mailchimp", desc: "Email marketing platform for campaigns and automation." },
      { name: "HubSpot", desc: "CRM and marketing automation for inbound growth." },
      { name: "Ahrefs", desc: "SEO toolset for backlink analysis and keyword research." },
      { name: "Moz", desc: "SEO software for keyword research and site audits." },
      { name: "Hotjar", desc: "User behavior analytics and feedback collection tool." }
    ],
  },
  {
    title: "AI Tools & Integrations",
    techs: [
      { name: "OpenAI API", desc: "Access to powerful language models for natural language processing tasks." },
      { name: "Hugging Face Transformers", desc: "State-of-the-art NLP models for various applications." },
      { name: "TensorFlow", desc: "Open-source machine learning framework for building and deploying AI models." },
      { name: "PyTorch", desc: "Deep learning framework for research and production." },
      { name: "LangChain", desc: "Framework for building applications with language models." },
      { name: "Gemini Pro", desc: "Google's advanced language model for natural language understanding and generation." },
    ],
  },
  {
    title: "Graphics Design",
    techs: [
      { name: "Figma", desc: "Collaborative interface design tool for teams." },
      { name: "Adobe Creative Cloud", desc: "Suite of applications for graphic design, video editing, and web development." },
      { name: "Adobe Photoshop", desc: "Industry-standard software for photo editing and graphic design." },
      { name: "Blender", desc: "Open-source 3D creation suite for modeling, animation, and rendering." },
      { name: "Maya", desc: "3D modeling and animation software used in film, TV, and game development." },
      { name: "Adobe Illustrator", desc: "Vector graphics editor for creating logos, icons, and illustrations." },
      { name: "Sketch", desc: "Design toolkit for digital products with a focus on UI/UX." },
      { name: "Canva", desc: "User-friendly design platform for creating social media graphics, presentations, and more." },
      { name: "Adobe XD", desc: "Design and prototyping tool for creating user experiences." },
      { name: "Premiere Pro", desc: "Video editing software for creating professional-quality videos." },
      { name: "After Effects", desc: "Motion graphics and visual effects software for video post-production." },
    ],
  },
];

export const metadata: Metadata = {
  title: "Modern Technologies & Tech Stack | CodeNClicks Solutions",
  description: "Explore the CodeNClicks technology stack: React, Next.js, Node.js, TypeScript, Python, PostgreSQL, AWS cloud scaling, and modern product engineering tools.",
  alternates: {
    canonical: "/technologies",
  },
  openGraph: {
    title: "Modern Technologies & Tech Stack | CodeNClicks Solutions",
    description: "Explore the CodeNClicks technology stack: React, Next.js, Node.js, TypeScript, Python, PostgreSQL, AWS cloud scaling, and modern product engineering tools.",
    url: "https://codenclicksit.in/technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Technologies & Tech Stack | CodeNClicks Solutions",
    description: "Explore the CodeNClicks technology stack: React, Next.js, Node.js, TypeScript, Python, PostgreSQL, AWS cloud scaling, and modern product engineering tools.",
  },
};

export default function TechnologiesPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Technologies", path: "/technologies" },
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
      <section className="py-16 lg:py-28 border-b-2 border-brand-graphite bg-brand-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Our Stack</span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-graphite leading-none">
                OUR MODERN <span className="text-brand-blue">TECH STACK.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                We select the best tools based on your product goals, cloud integrations, and long-term security/maintainability targets.
              </p>
            </div>
            
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
                  alt="CodeNClicks Software Architectures - Modern Codebases built on React, TypeScript, Node.js, and Cloud Infrastructure"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Listing */}
      {techCategories.map((cat, ci) => {
        const CatIcon = categoryIcons[cat.title] || Monitor;
        return (
          <Section
            key={cat.title}
            className={`border-b-2 border-brand-graphite ${ci % 2 === 0 ? "bg-white" : "bg-brand-mist"}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex items-center gap-3.5 mb-10">
                <div className="w-10 h-10 bg-white border-2 border-brand-graphite rounded-lg flex items-center justify-center">
                  <CatIcon className="w-5 h-5 text-brand-blue" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-graphite">{cat.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-6 bg-white border-2 border-brand-graphite rounded-[24px] shadow-premium hover:shadow-flat transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-heading font-bold text-brand-graphite mb-1.5">{tech.name}</h3>
                    <p className="text-xs text-brand-graphite/70 leading-relaxed font-sans">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      {/* CTA Box */}
      <section className="bg-brand-blue text-white py-24 text-center">
        <div className="container mx-auto px-4 lg:px-8 space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-none tracking-tight">
            NEED A CUSTOM STACK?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-base leading-relaxed font-sans">
            Our team has hands-on integration experience across custom web hooks, legacy CMS engines, and secure cloud pipelines.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-full hover:bg-brand-mist transition-colors text-sm"
            >
              Discuss Your Stack <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
