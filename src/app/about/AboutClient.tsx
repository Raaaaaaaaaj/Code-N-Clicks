"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Award, Users, Lightbulb, Rocket, Heart, Sparkles } from "lucide-react";
import Section from "@/components/shared/Section";
import { team } from "@/data/team";

const values = [
  { icon: Rocket, title: "Move Fast", desc: "We ship quickly without cutting corners. Speed is our competitive edge." },
  { icon: Eye, title: "Transparent", desc: "No hidden costs, no surprises. Full visibility at every stage." },
  { icon: Heart, title: "Genuine Care", desc: "Your success is our success. We treat every project like it's our own." },
  { icon: Sparkles, title: "Fresh Thinking", desc: "Young minds, modern solutions. We challenge the status quo." },
];

export default function AboutClient() {
  return (
    <div className="bg-white text-brand-graphite">
      {/* Hero - Asymmetric Magazine composition */}
      <section className="py-16 lg:py-28 border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">About Us</span>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-graphite leading-none">
                PRACTICAL TECH FOR <span className="text-brand-blue">AMBITIOUS BRANDS.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans pt-4 max-w-2xl">
                CodeNClicks IT Solutions is an India-based <Link href="/services" className="text-brand-blue hover:underline font-bold">web development and software agency</Link> built for businesses that want clean execution, clear communication, and measurable online results.
              </p>
              
              <p className="text-sm text-brand-graphite/60 leading-relaxed max-w-xl">
                We help startups, hotels, ecommerce businesses, agencies, and small businesses launch SEO-friendly websites, custom software, SaaS products, CRM systems, and marketing campaigns. Learn more about what we do by reading our <Link href="/case-studies" className="text-brand-blue hover:underline font-bold">client case studies</Link> and checking out <Link href="/reviews" className="text-brand-blue hover:underline font-bold">verified customer reviews</Link>.
              </p>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop"
                  alt="CodeNClicks IT Solutions Team - Custom Software Developers and Web Designers in India"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story - Left Image / Right Editorial details */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat bg-white">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=450&fit=crop"
                  alt="CodeNClicks Software Development Process - Agile Project Discovery and Wireframe Planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none">
                From a Dorm Room to Global Operations
              </h2>
              <div className="space-y-4 text-brand-graphite/70 leading-relaxed font-sans">
                <p>
                  It started with a simple question in a college dorm room: why do software agencies deliver code and disappear, instead of acting as true growth partners?
                </p>
                <p>
                  Our founders - all in their early 20s - pooled their diverse skills together: design, development, marketing, and systems architecture. Within months, word spread. Our first client's website generated 3x more inquiries than their old setup.
                </p>
                <p>
                  Today, we serve businesses across India, the United States, and the United Kingdom. We've grown from a dorm room to a global remote team, but our core mission remains unchanged: deliver premium custom quality, maintain absolute transparency, and treat every client's business like our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Cards */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "98%", label: "Client Retention" },
              { value: "3+", label: "Years of Hustle" },
            ].map((s) => (
              <div key={s.label} className="p-8 bg-brand-mist border-2 border-brand-graphite rounded-[24px] text-center shadow-premium hover:shadow-flat transition-shadow duration-300">
                <div className="text-4xl lg:text-5xl font-heading font-extrabold text-brand-blue">{s.value}</div>
                <div className="text-xs font-mono text-brand-graphite/50 mt-2 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission & Vision - Split Grid */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 border-2 border-brand-graphite rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-brand-graphite mb-4">Our Mission</h3>
              <p className="text-brand-graphite/70 leading-relaxed text-sm">
                To democratize access to premium custom digital systems. We believe that a startup or local business deserves the same level of secure, high-performance technology as an enterprise player. We're here to make that happen with transparency, speed, and clean code.
              </p>
            </div>
            <div className="p-8 bg-white border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 border-2 border-brand-graphite rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-brand-graphite mb-4">Our Vision</h3>
              <p className="text-brand-graphite/70 leading-relaxed text-sm">
                To become the premier development partner for ambitious teams globally. We envision a future where capability is driven by speed, fresh ideas, and modern tools, enabling small teams to make an oversized impact in digital industries.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Staggered Cards */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none">What Guides Our Code</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 bg-brand-mist border-2 border-brand-graphite rounded-[24px] text-center hover:shadow-flat transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white border-2 border-brand-graphite mx-auto mb-6 flex items-center justify-center">
                  <v.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-heading font-bold text-brand-graphite mb-2">{v.title}</h3>
                <p className="text-xs text-brand-graphite/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team - Asymmetrical Grids */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none">
              The Minds Behind the Magic
            </h2>
            <p className="text-brand-graphite/70 text-sm">
              We combine structured technical expertise, creative interfaces, and conversion-focused growth strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-8 bg-white border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-heading font-bold text-brand-graphite">{member.name}</h3>
                  <p className="text-sm font-mono font-semibold text-brand-blue mb-4">{member.role}</p>
                  <p className="text-sm text-brand-graphite/70 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action - Coral Red accent */}
      <section className="bg-brand-coral text-white py-24 text-center">
        <div className="container mx-auto px-4 lg:px-8 space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-none tracking-tight">
            READY TO GROW YOUR BUSINESS?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-base leading-relaxed font-sans">
            Join over 50 clients globally that trust CodeNClicks with their development and search marketing visibility.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-graphite text-white font-bold rounded-full hover:bg-brand-graphite/90 transition-colors text-sm border-2 border-brand-graphite"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
