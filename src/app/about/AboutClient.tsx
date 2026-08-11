"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Target,
  Eye,
  Award,
  Users,
  Lightbulb,
  Rocket,
  Heart,
  Sparkles,
  Search,
  Layers,
  Layout,
  Cpu,
  TrendingUp,
  Workflow,
  Bot,
  Settings,
  ShieldCheck,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import Section from "@/components/shared/Section";
import { team } from "@/data/team";

const values = [
  { icon: Rocket, title: "Move Fast", desc: "We ship quickly without cutting corners. Speed is our competitive edge." },
  { icon: Eye, title: "Transparent", desc: "No hidden costs, no surprises. Full visibility at every stage." },
  { icon: Heart, title: "Genuine Care", desc: "Your success is our success. We treat every project like it's our own." },
  { icon: Sparkles, title: "Fresh Thinking", desc: "Young minds, modern solutions. We challenge the status quo." },
];

const buildStages = [
  {
    step: "01",
    icon: Search,
    title: "Understand the Business",
    description: (
      <>
        Before writing a single line of code, we audit your operational bottlenecks, manual processes, and existing tools. We define clear business goals and user paths to ensure every technical requirement solves an actual operational need. This upfront clarity ensures our{" "}
        <Link href="/services/custom-software-development" className="text-brand-blue font-bold hover:underline">
          custom software development
        </Link>{" "}
        targets long-term business value.
      </>
    ),
  },
  {
    step: "02",
    icon: Layers,
    title: "Architect the System",
    description: (
      <>
        We transform validated requirements into robust software architecture, designing relational databases, structured API layers, and secure cloud infrastructure. Every system is engineered for data integrity, third-party integrations, and scalable performance as transaction volumes grow.
      </>
    ),
  },
  {
    step: "03",
    icon: Layout,
    title: "Design the Experience",
    description: (
      <>
        User interfaces are crafted specifically for operational efficiency and daily workflows rather than decorative novelty. We design intuitive, low-friction navigation paths and administrative dashboards that simplify complex data management for your team.
      </>
    ),
  },
  {
    step: "04",
    icon: Cpu,
    title: "Build with AI-Native Engineering",
    description: (
      <>
        As an AI-native custom software development company, we integrate automated code analysis, rapid test generation, and AI-assisted documentation into our engineering workflow. Human engineers retain direct oversight of core architecture, security, and system logic to deliver reliable{" "}
        <Link href="/services/web-development" className="text-brand-blue font-bold hover:underline">
          web application development
        </Link>{" "}
        platforms.
      </>
    ),
  },
  {
    step: "05",
    icon: TrendingUp,
    title: "Launch, Measure & Improve",
    description: (
      <>
        Production deployment is the start of continuous optimization, not the end of our involvement. We monitor real-world telemetry, track user adoption, and implement iterative updates based on operational feedback. Explore our{" "}
        <Link href="/case-studies" className="text-brand-blue font-bold hover:underline">
          case studies
        </Link>{" "}
        to see how post-launch evolution drives long-term impact.
      </>
    ),
  },
];

const differentiators = [
  {
    step: "01",
    icon: Workflow,
    title: "Business Logic Before Code",
    description: (
      <>
        We understand your operational problem and revenue goals before selecting technical stacks. Technical decisions—from database schemas to API structures—are derived directly from business logic to deliver scalable software solutions that fit your business.
      </>
    ),
  },
  {
    step: "02",
    icon: Bot,
    title: "AI-Native by Design",
    description: (
      <>
        We incorporate AI-native software development practices into our internal engineering lifecycle for testing, documentation, and code analysis. We also architect practical AI layers directly into client software where automated intelligence creates measurable operational value.
      </>
    ),
  },
  {
    step: "03",
    icon: Settings,
    title: "Built Around Your Workflow",
    description: (
      <>
        Off-the-shelf tools force businesses into rigid operational constraints. Whether building SaaS platforms, custom{" "}
        <Link href="/services/crm-development" className="text-brand-blue font-bold hover:underline">
          CRM development
        </Link>{" "}
        modules, or internal business automation systems, we engineer software that adapts precisely to how your team operates.
      </>
    ),
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Architecture That Can Grow",
    description: (
      <>
        Systems are engineered with maintainable codebases, decoupled services, and standardized API integrations. We prioritize security protocols and future-proof software architecture, ensuring your system expands smoothly without technical debt.
      </>
    ),
  },
  {
    step: "05",
    icon: Target,
    title: "Product Thinking, Not Just Project Delivery",
    description: (
      <>
        Completing a development checklist is not our end goal. We focus on post-launch performance telemetry, user adoption rates, and ongoing optimization—ensuring your custom software continues delivering commercial value as your business scales.
      </>
    ),
  },
];

export default function AboutClient() {
  const [heroMode, setHeroMode] = useState(0);
  const [activeBuildStep, setActiveBuildStep] = useState(0);
  const [activeDiffIndex, setActiveDiffIndex] = useState(0);
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  return (
    <div className="bg-white text-brand-graphite selection:bg-brand-blue selection:text-white">
      {/* Hero - Clean Editorial & Interactive Composition */}
      <section className="py-20 lg:py-28 border-b-2 border-brand-graphite relative overflow-hidden bg-gradient-to-b from-brand-mist/60 via-white to-white text-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              
              
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-brand-graphite leading-none">
                Your companion for <br/><span className="text-brand-blue">Ai-Native</span><br /> <span className="bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-coral bg-clip-text text-transparent">Custom Software Development</span>
              </h1>

              <p className="max-w-2xl text-base md:text-lg text-brand-graphite/80 leading-relaxed font-sans pt-2">
                CodeNClicks IT Solutions is an India-based AI-native custom software development company building scalable SaaS platforms, CRM systems, and automation-driven digital solutions for startups, hotels, and growing businesses.

                We combine <Link href="/services" className="text-brand-blue hover:underline font-bold">custom software development</Link>,<Link href="/services" className="text-brand-blue hover:underline font-bold">web development</Link>, and intelligent automation to create high-performance systems that drive efficiency, growth, and real business results.
              </p>

             
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[420px] group">
                <div className="relative rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-premium bg-white">
                  <img
                    src="/about_hero.webp"
                    alt="CodeNClicks IT Solutions Team - Custom Software Developers and Web Designers in India"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Interactive Dynamic Telemetry Overlay */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={heroMode}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-4 left-4 right-4 bg-brand-graphite/95 text-white p-4 rounded-2xl border-2 border-brand-graphite shadow-2xl font-mono"
                    >
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span className="flex items-center gap-2 text-brand-blue">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          {[
                            "MODE 01: DISCOVERY",
                            "MODE 02: ARCHITECTURE",
                            "MODE 03: AI-NATIVE CORE",
                          ][heroMode]}
                        </span>
                        <span className="text-white/60">ACTIVE</span>
                      </div>
                      <p className="text-xs font-sans text-white/80 leading-snug">
                        {[
                          "Understanding business logic and operational bottlenecks before writing software code.",
                          "Designing maintainable database schemas, clean APIs, and scalable infrastructure.",
                          "Integrating AI-native code analysis, automated testing, and post-launch telemetry.",
                        ][heroMode]}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story - Left Image / Right Editorial details */}
      <Section className="bg-brand-mist/50 border-b-2 border-brand-graphite relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[420px]">
                <div className="absolute -top-4 -left-4 w-full h-full border-4 border-brand-blue rounded-[32px]"></div>
                <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat bg-white z-10">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=450&fit=crop"
                    alt="CodeNClicks Software Development Process - Agile Project Discovery and Wireframe Planning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white border-2 border-brand-graphite px-4 py-2 rounded-xl shadow-flat z-20 font-mono text-xs font-bold text-brand-graphite">
                  [FIG. 01 — ARCHITECTURE]
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-brand-blue"></span>
                <span className="text-brand-blue text-xl font-mono font-bold tracking-widest uppercase">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-graphite leading-none font-heading">
                Built to Solve Real Business Problems
              </h2>
              <div className="space-y-4 text-brand-graphite/80 leading-relaxed font-sans text-base">
                <p className="text-lg font-medium text-brand-graphite leading-snug">
                  What started as a simple frustration quickly turned into a clear direction — businesses don’t just need developers, they need partners who understand how technology impacts growth.
                </p>
                <p className="text-base ">
                  Instead of following the usual “build and move on” approach, we focused on creating <strong>AI-driven, custom-built systems</strong> that actually solve operational bottlenecks — whether it’s inefficient workflows, disconnected tools, or lack of automation.
                </p>
                <p className="text-base ">
                  Early on, we proved one thing: the right system doesn’t just support a business — it multiplies its output.

                  Today, we design and deliver <strong>custom software solutions, SaaS platforms, and intelligent automation systems</strong> that are built around how businesses actually operate. Every product we build is engineered for scalability, performance, and long-term impact — not just delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats - Impact Strip */}
      <section className="bg-brand-graphite text-white border-b-2 border-brand-graphite py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 gap-8 sm:gap-0">
            {[
              { value: "30+", label: "Projects Delivered" },
              { value: "13+", label: "Businesses Scaled with Custom Systems" },
              { value: "95%", label: "Client Retention" },
              { value: "3+", label: "Years of Hustle" },
            ].map((s, idx) => (
              <div key={s.label} className={`flex flex-col items-center justify-center text-center p-4 ${idx !== 0 ? "sm:pl-8" : ""}`}>
                <div className="text-5xl lg:text-7xl font-heading font-extrabold text-brand-blue tracking-tight hover:scale-105 transition-transform duration-300">
                  {s.value}
                </div>
                <div className="text-xs font-mono text-white/70 mt-3 uppercase tracking-wider max-w-[200px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Split Grid */}
      <Section className="bg-white border-b-2 border-brand-graphite py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Mission - Light Editorial */}
            <div className="lg:col-span-6 flex flex-col justify-between p-8 lg:p-12 bg-brand-mist/40 border-2 border-brand-graphite rounded-[32px] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Target className="w-40 h-40 text-brand-graphite" />
              </div>
              <div>
                <div className="w-12 h-12 bg-white border-2 border-brand-graphite rounded-2xl flex items-center justify-center mb-8 shadow-flat">
                  <Target className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-heading font-extrabold text-brand-graphite mb-6">
                  Our Mission
                </h3>
                <p className="text-brand-graphite/80 leading-relaxed font-sans text-base space-y-4">
                  Our mission is to deliver <strong>AI-native custom software development solutions</strong> that go beyond traditional development and directly impact how businesses operate, scale, and compete.

                  We build <strong>custom software systems, SaaS platforms,</strong> and<strong> CRM solutions</strong> designed to eliminate inefficiencies, automate repetitive processes, and create structured, scalable workflows. Every solution is engineered with performance, security, and adaptability at its core — ensuring businesses don’t just adopt technology, but leverage it as a long-term growth asset.

                  By combining <strong>custom software development, intelligent automation,</strong> and <strong>system architecture</strong>, we help businesses transition from manual operations to fully optimized digital ecosystems.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-brand-graphite/10 flex items-center gap-2 text-xs font-mono text-brand-blue font-bold uppercase tracking-wider">
                <span>OPERATIONAL EXCELLENCE</span>
              </div>
            </div>

            {/* Vision - Dark Technical Contrast */}
            <div className="lg:col-span-6 flex flex-col justify-between p-8 lg:p-12 bg-brand-graphite text-white border-2 border-brand-graphite rounded-[32px] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Lightbulb className="w-40 h-40 text-white" />
              </div>
              <div>
                <div className="w-12 h-12 bg-brand-blue border-2 border-white/20 rounded-2xl flex items-center justify-center mb-8 text-white">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-heading font-extrabold text-white mb-6">
                  Our Vision
                </h3>
                <p className="text-white/80 leading-relaxed font-sans text-base space-y-4">
                  Our vision is to become a leading force in <strong>custom software development</strong> and <strong>AI-driven digital transformation</strong>, where businesses rely on intelligent systems instead of fragmented tools.

                  We aim to shape a future where <strong>custom-built software solutions</strong> are not static products, but evolving systems that continuously improve performance, decision-making, and scalability. By integrating <strong>AI-native capabilities, automation layers,</strong> and <strong>modern development frameworks</strong>, we empower businesses to operate faster, smarter, and with greater precision.

                  We envision a digital landscape where companies no longer struggle with disconnected tools, but instead run on unified, high-performance software ecosystems built specifically for their growth.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-brand-blue font-bold uppercase tracking-wider">
                <span>FUTURE-READY ARCHITECTURE</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How We Build - Process Section */}
      <Section className="bg-brand-mist/30 border-b-2 border-brand-graphite py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">
              HOW WE BUILD
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-graphite leading-tight font-heading">
              Engineering Custom Software Built Around Real Business Workflows
            </h2>
            <p className="text-brand-graphite/75 text-base  leading-relaxed font-sans">
              Our structured engineering methodology ensures every system we build is grounded in operational clarity, scalable architecture, and continuous post-launch optimization.
            </p>
          </div>

          {/* Interactive Step Navigation Bar */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none">
            {buildStages.map((stage, idx) => {
              const isActive = activeBuildStep === idx;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveBuildStep(idx)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-full font-mono text-sm font-bold whitespace-nowrap transition-all duration-300 border-2 ${
                    isActive
                      ? "bg-brand-blue text-white border-brand-graphite shadow-flat scale-105"
                      : "bg-white text-brand-graphite border-brand-graphite/30 hover:border-brand-graphite"
                  }`}
                >
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-white text-brand-blue" : "bg-brand-mist text-brand-graphite/70"}`}>
                    {stage.step}
                  </span>
                  <span>{stage.title}</span>
                </button>
              );
            })}
          </div>

          {/* Featured Active Stage Showcase */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBuildStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="p-8 lg:p-12 bg-white border-2 border-brand-graphite rounded-[32px] shadow-premium relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b-2 border-brand-mist pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 border-2 border-brand-blue flex items-center justify-center text-brand-blue">
                      {(() => {
                        const Icon = buildStages[activeBuildStep].icon;
                        return <Icon className="w-7 h-7" />;
                      })()}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-brand-blue uppercase tracking-widest">
                        STAGE {buildStages[activeBuildStep].step} OF 05
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-heading font-extrabold text-brand-graphite">
                        {buildStages[activeBuildStep].title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {buildStages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveBuildStep(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          idx === activeBuildStep ? "bg-brand-blue w-8" : "bg-brand-graphite/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-brand-graphite/80 text-base  leading-relaxed font-sans">
                  {buildStages[activeBuildStep].description}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Section>

      {/* Why CodeNClicks - Differentiators Section */}
      <Section className="bg-white border-b-2 border-brand-graphite py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Statement Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">
                WHY CODENCLICKS
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-graphite leading-tight font-heading">
                Engineered for Business Outcomes, Not Just Project Delivery
              </h2>
              <p className="text-brand-graphite/75 text-base  leading-relaxed font-sans">
                CodeNClicks is not an agency that simply receives requirements and delivers code. We operate as technical partners who align software architecture with commercial strategy, operational realities, and long-term scalability.
              </p>
              <div className="p-6 bg-brand-mist border-2 border-brand-graphite rounded-2xl space-y-3 font-mono text-xs text-brand-graphite/80">
                <div className="flex items-center gap-2 font-bold text-brand-blue">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>ENGAGEMENT PRINCIPLE</span>
                </div>
                <p className="font-sans text-sm">
                  We measure success by commercial utility, system reliability, and long-term business value—never just closed tickets.
                </p>
              </div>
            </div>

            {/* Right Interactive Stack Column */}
            <div className="lg:col-span-7 space-y-4">
              {differentiators.map((diff, idx) => {
                const isOpen = activeDiffIndex === idx;
                const Icon = diff.icon;
                return (
                  <motion.div
                    key={diff.title}
                    onClick={() => setActiveDiffIndex(idx)}
                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                      isOpen
                        ? "bg-brand-mist/70 border-brand-blue shadow-flat"
                        : "bg-white border-brand-graphite/20 hover:border-brand-graphite/60"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`text-lg font-mono font-extrabold ${isOpen ? "text-brand-blue" : "text-brand-graphite/40"}`}>
                          {diff.step}
                        </span>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 ${isOpen ? "bg-brand-blue text-white border-brand-blue" : "bg-white text-brand-graphite border-brand-graphite/20"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg md:text-xl font-heading font-bold text-brand-graphite">
                          {diff.title}
                        </h3>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-90 text-brand-blue" : "text-brand-graphite/40"}`} />
                    </div>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-brand-graphite/10 text-sm md:text-base text-brand-graphite/80 leading-relaxed font-sans md:pl-14"
                      >
                        {diff.description}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* Values - Interactive List */}
      <Section className="bg-brand-mist/40 border-b-2 border-brand-graphite py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none font-heading">What Guides Our Code</h2>
          </div>

          <div className="max-w-4xl mx-auto divide-y-2 divide-brand-graphite/20">
            {values.map((v, idx) => {
              const isActive = activeValueIndex === idx;
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  onMouseEnter={() => setActiveValueIndex(idx)}
                  onClick={() => setActiveValueIndex(idx)}
                  className={`py-8 px-6 transition-all duration-300 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl ${
                    isActive ? "bg-white shadow-flat border-2 border-brand-graphite my-2" : "hover:bg-white/50"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-2xl font-mono font-bold ${isActive ? "text-brand-blue" : "text-brand-graphite/30"}`}>
                      0{idx + 1}
                    </span>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 ${isActive ? "bg-brand-blue text-white border-brand-blue" : "bg-white text-brand-graphite border-brand-graphite/20"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-extrabold text-brand-graphite">
                        {v.title}
                      </h3>
                      {isActive && (
                        <p className="text-sm md:text-base text-brand-graphite/70 mt-2 max-w-xl font-sans">
                          {v.desc}
                        </p>
                      )}
                    </div>
                  </div>
                  {!isActive && (
                    <p className="text-sm text-brand-graphite/60 font-sans hidden md:block max-w-xs text-right">
                      {v.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Team - Editorial Showcase */}
      <Section className="bg-white border-b-2 border-brand-graphite py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none font-heading">
              The Minds Behind the Magic
            </h2>
            <p className="text-brand-graphite/70 text-base">
              We combine structured technical expertise, creative interfaces, and conversion-focused growth strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Member Tabs List */}
            <div className="lg:col-span-5 space-y-4">
              {team.map((member, idx) => {
                const isActive = activeTeamIndex === idx;
                return (
                  <button
                    key={member.name}
                    onClick={() => setActiveTeamIndex(idx)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-brand-graphite text-white border-brand-graphite shadow-flat"
                        : "bg-brand-mist/50 text-brand-graphite border-brand-graphite/20 hover:border-brand-graphite"
                    }`}
                  >
                    <div>
                      <h3 className="text-xl font-heading font-extrabold">{member.name}</h3>
                      <p className={`text-xs font-mono font-semibold mt-1 ${isActive ? "text-brand-blue" : "text-brand-blue"}`}>
                        {member.role}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 ${isActive ? "text-brand-blue" : "text-brand-graphite/30"}`} />
                  </button>
                );
              })}
            </div>

            {/* Featured Team Member Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTeamIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden p-8 lg:p-12 bg-brand-mist border-2 border-brand-graphite rounded-[32px] shadow-premium min-h-[320px] flex flex-col justify-between"
                >
                  <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-64 h-64 opacity-15 pointer-events-none select-none z-0">
                    <img src="/logo-icon.png" alt="" className="w-full h-full object-contain transform scale-125" />
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className="inline-block px-3 py-1 bg-white border border-brand-graphite/20 rounded-full text-xs font-mono font-bold text-brand-blue uppercase">
                      FEATURED PROFILE
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-heading font-extrabold text-brand-graphite">
                      {team[activeTeamIndex].name}
                    </h3>
                    <p className="text-sm font-mono font-bold text-brand-blue uppercase tracking-wider">
                      {team[activeTeamIndex].role}
                    </p>
                    <p className="text-base text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                      {team[activeTeamIndex].bio}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action - Coral Red accent */}
      <section className="bg-brand-coral text-white py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 space-y-6 relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none tracking-tight font-heading">
            READY TO GROW YOUR BUSINESS?
          </h2>
          <p className="text-white/90 max-w-xl mx-auto text-base md:text-lg leading-relaxed font-sans">
            Join over 50 clients globally that trust CodeNClicks with their development and search marketing visibility.
          </p>
          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-graphite text-white font-extrabold rounded-full hover:bg-black transition-all transform hover:scale-105 text-base border-2 border-brand-graphite shadow-flat"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


