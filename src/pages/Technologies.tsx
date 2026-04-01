import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Server, Cloud, BarChart3, BrainCircuit, Brush } from "lucide-react";

const categoryIcons: Record<string, any> = {
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

const Technologies = () => {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Stack</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
                Built With the <span className="text-gradient">Best Technologies</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We choose technologies based on your project's needs — not trends. Every tool in our stack 
                is battle-tested and production-proven.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
                alt="Code on screen showing modern development"
                className="rounded-2xl shadow-card w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {techCategories.map((cat, ci) => {
        const CatIcon = categoryIcons[cat.title] || Monitor;
        return (
          <Section key={cat.title} className={ci % 2 === 0 ? "" : "bg-card"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CatIcon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold">{cat.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.techs.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-5 bg-background border border-border rounded-xl hover-lift shadow-card"
                  >
                    <h3 className="text-base font-heading font-semibold text-foreground mb-1">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      <Section className="bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center py-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-foreground">
            Need a Specific Technology?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Our team has expertise across dozens of technologies. If it exists, we can probably build with it.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-background text-primary font-semibold rounded-lg hover:bg-background/90 transition-colors">
            Discuss Your Stack <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Technologies;
