import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { team } from "@/data/team";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, Users, Lightbulb, Rocket, Heart, Sparkles } from "lucide-react";

const values = [
  { icon: Rocket, title: "Move Fast", desc: "We ship quickly without cutting corners. Speed is our competitive edge." },
  { icon: Eye, title: "Transparent", desc: "No hidden costs, no surprises. Full visibility at every stage." },
  { icon: Heart, title: "Genuine Care", desc: "Your success is our success. We treat every project like it's our own." },
  { icon: Sparkles, title: "Fresh Thinking", desc: "Young minds, modern solutions. We challenge the status quo." },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">About Us</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
                Young Founders on a Mission to <span className="text-gradient">Transform IT</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We're not your typical IT agency. We're a group of passionate 20-somethings who believe that 
                every business — from a local shop to a global enterprise — deserves world-class digital solutions 
                without the corporate price tag and bureaucracy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We started CodeNClicks because we saw a gap: businesses were either getting overcharged by big agencies 
                or getting poor quality from cheap freelancers. We're here to change that.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop"
                alt="Young diverse team working together in modern office"
                className="rounded-2xl shadow-card w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=450&fit=crop"
                alt="Team brainstorming session with sticky notes and laptops"
                className="rounded-2xl shadow-card w-full object-cover"
              />
            </div>
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6">From a Dorm Room to Serving Clients Globally</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  It started with a simple idea in a college dorm room: what if we could build an IT company that 
                  actually cared about its clients' success? Not just delivering code and disappearing, but being 
                  a true growth partner.
                </p>
                <p>
                  Our founders — all in their early 20s — pooled their diverse skills together: design, development, 
                  marketing, and strategy. Within months, word spread. Our first client's website generated 3x more 
                  leads than their previous one. Then came the second client, and the third.
                </p>
                <p>
                  Today, we serve clients across India, the United States, and the United Kingdom. We've grown from 
                  a dorm room to a global operation, but our core values remain the same: deliver exceptional quality, 
                  be radically transparent, and treat every client's business like our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "98%", label: "Client Retention" },
              { value: "3+", label: "Years of Hustle" },
            ].map((s) => (
              <div key={s.label} className="p-8 bg-background border border-border rounded-xl text-center shadow-card">
                <div className="text-4xl font-heading font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-background border border-border rounded-xl shadow-card">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to premium digital solutions. We believe that a startup in a small town 
                deserves the same quality of technology as a Fortune 500 company. We're here to make that happen — 
                with passion, hustle, and world-class execution.
              </p>
            </div>
            <div className="p-8 bg-background border border-border rounded-xl shadow-card">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the go-to digital partner for ambitious businesses worldwide. We envision a future where 
                age doesn't define capability, and where young, hungry teams can outperform any legacy agency through 
                sheer talent, modern tools, and relentless execution.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">What Makes Us Different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-background border border-border rounded-xl shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">The Young Minds Behind the Magic</h2>
            <p className="text-muted-foreground mt-4">
              We're proof that age is just a number. Our team combines youthful energy with world-class skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-background border border-border rounded-xl shadow-card group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-xl object-cover mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-heading font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center py-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-foreground">
            Ready to Work With a Team That Truly Cares?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Join 50+ businesses that trust CodeNClicks to power their digital growth. Let's build something amazing together.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-background text-primary font-semibold rounded-lg hover:bg-background/90 transition-colors">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default About;
