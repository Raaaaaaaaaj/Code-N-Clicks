import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    techs: [
      { name: "React", desc: "Component-based UI library for building interactive interfaces." },
      { name: "Next.js", desc: "React framework for server-side rendering and static generation." },
      { name: "TypeScript", desc: "Type-safe JavaScript for scalable, maintainable codebases." },
      { name: "Tailwind CSS", desc: "Utility-first CSS framework for rapid, consistent styling." },
      { name: "Vue.js", desc: "Progressive framework for building modern web interfaces." },
      { name: "Angular", desc: "Enterprise-grade framework for complex web applications." },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", desc: "JavaScript runtime for building fast, scalable server applications." },
      { name: "Python", desc: "Versatile language for APIs, data science, and automation." },
      { name: "PostgreSQL", desc: "Advanced open-source relational database system." },
      { name: "MongoDB", desc: "Flexible NoSQL database for modern applications." },
      { name: "GraphQL", desc: "Query language for efficient, flexible API interactions." },
      { name: "Redis", desc: "In-memory data store for caching and real-time features." },
    ],
  },
  {
    title: "DevOps & Cloud",
    techs: [
      { name: "AWS", desc: "Comprehensive cloud platform for hosting and services." },
      { name: "Docker", desc: "Containerization for consistent deployments everywhere." },
      { name: "Kubernetes", desc: "Container orchestration for scalable infrastructure." },
      { name: "GitHub Actions", desc: "CI/CD automation for continuous integration and delivery." },
      { name: "Vercel", desc: "Edge platform for frontend deployment with zero config." },
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
    ],
  },
];

const Technologies = () => {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Stack</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
              Built With the <span className="text-gradient">Best Technologies</span>
            </h1>
            <p className="text-lg text-muted-foreground">We choose technologies based on your project's needs — not trends. Every tool in our stack is battle-tested and production-proven.</p>
          </motion.div>
        </div>
      </section>

      {techCategories.map((cat, ci) => (
        <Section key={cat.title} className={ci % 2 === 0 ? "bg-card" : ""}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">{cat.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.techs.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 bg-card-gradient border border-border rounded-xl hover-lift"
                >
                  <h3 className="text-base font-heading font-semibold text-foreground mb-1">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <Section>
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Need a Specific Technology?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Our team has expertise across dozens of technologies. If it exists, we can probably build with it.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Discuss Your Stack <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Technologies;
