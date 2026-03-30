import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { team } from "@/data/team";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every decision is guided by measurable business outcomes." },
  { icon: Eye, title: "Transparent", desc: "No hidden costs, no surprises. Full visibility at every stage." },
  { icon: Award, title: "Excellence", desc: "We don't do average. Every project gets our best." },
  { icon: Users, title: "Partnership", desc: "We're an extension of your team, not just a vendor." },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">About Us</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
              We're a Team of <span className="text-gradient">Obsessive Builders</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a simple belief: businesses deserve digital partners who care as much about their success as they do. We combine world-class engineering with strategic thinking to build products that don't just look good — they perform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>CodeNClicks IT Solutions was born from frustration — frustration with agencies that over-promise and under-deliver, that treat every project like a template, and that disappear after launch day.</p>
                <p>We started as a small team of developers and designers who shared a common vision: to build a digital agency that operates like a product company. One where quality is non-negotiable, timelines are respected, and every pixel serves a purpose.</p>
                <p>Today, we serve clients across the United States, United Kingdom, and India — from ambitious startups to established enterprises. Our work has generated millions in revenue for our clients and earned us a reputation for excellence that speaks for itself.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "200+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "98%", label: "Retention Rate" },
                { value: "8+", label: "Years in Business" },
              ].map((s) => (
                <div key={s.label} className="p-6 bg-secondary rounded-xl text-center">
                  <div className="text-3xl font-heading font-bold text-gradient">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-card-gradient border border-border rounded-xl">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with digital solutions that create lasting competitive advantages. We believe technology should be an accelerator, not a barrier — and we make it so for every client we work with.
              </p>
            </div>
            <div className="p-8 bg-card-gradient border border-border rounded-xl">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted digital agency globally — known not for our size, but for the outsized impact we create for every business we touch. We envision a world where premium digital craftsmanship is accessible to all.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-secondary rounded-xl"
              >
                <v.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">The Team Behind the Magic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card-gradient border border-border rounded-xl"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-bold text-xl mb-4">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Work With a Team That <span className="text-gradient">Delivers?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Join 50+ businesses that trust CodeNClicks to power their digital growth.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default About;
