import { MapPin, Globe, Building, Briefcase } from "lucide-react";
import Section from "@/components/shared/Section";
import Link from "next/link";

export default function LocationSection() {
  return (
    <Section className="bg-white border-b-2 border-brand-graphite relative overflow-hidden">
      {/* Subtle Geographic Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 800 800" className="w-[120%] h-[120%] min-w-[800px]">
          <path
            fill="currentColor"
            d="M400,0C179.1,0,0,179.1,0,400c0,220.9,179.1,400,400,400c220.9,0,400-179.1,400-400C800,179.1,620.9,0,400,0z M400,750 C206.7,750,50,593.3,50,400S206.7,50,400,50s350,156.7,350,350S593.3,750,400,750z"
          />
          <circle
            cx="400"
            cy="400"
            r="300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M400,100 L400,700 M100,400 L700,400"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M250,250 L550,550 M250,550 L550,250"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="10,10"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-mist border-2 border-brand-graphite rounded-full text-xs font-mono font-bold text-brand-graphite uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-brand-blue" />
              Based in Kolkata. Serving India.
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-graphite leading-tight">
              Custom Software Development in Kolkata & Across India
            </h2>

            <p className="text-brand-graphite/80 text-lg leading-relaxed font-sans">
              Based in Kolkata, West Bengal, Code N Clicks works with startups,
              SMEs, and established businesses across India. We build custom
              software, web applications, CRM systems, SaaS platforms, and
              business automation solutions around the way each business
              operates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-brand-mist border-2 border-brand-graphite flex items-center justify-center text-brand-blue">
                  <Building className="w-5 h-5 text-brand-coral" />
                </div>
                <h4 className="font-heading font-bold text-brand-graphite">
                  Enterprises
                </h4>
                <p className="text-xs text-brand-graphite/60 font-sans">
                  Custom systems, integrations, and modernization.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-brand-mist border-2 border-brand-graphite flex items-center justify-center text-brand-blue">
                  <Briefcase className="w-5 h-5 text-brand-coral" />
                </div>
                <h4 className="font-heading font-bold text-brand-graphite">
                  Growing Businesses
                </h4>
                <p className="text-xs text-brand-graphite/60 font-sans">
                  CRM, automation, dashboards, and business software.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-brand-mist border-2 border-brand-graphite flex items-center justify-center text-brand-blue">
                  <Globe className="w-5 h-5 text-brand-coral" />
                </div>
                <h4 className="font-heading font-bold text-brand-graphite">
                  Startups
                </h4>
                <p className="text-xs text-brand-graphite/60 font-sans">
                  MVPs, SaaS products, and scalable web applications.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-brand-mist border-4 border-brand-graphite rounded-[32px] p-8 shadow-flat w-full max-w-sm">
              <h3 className="text-xl font-heading font-extrabold text-brand-graphite mb-6 border-b-2 border-brand-graphite/20 pb-4">
                Our Service Areas
              </h3>

              <ul className="space-y-4 mb-8">
                <li>
                  <Link
                    href="/locations/kolkata"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-lime" />
                    <span className="font-bold text-brand-graphite text-sm group-hover:text-brand-blue transition-colors">
                      Custom Software Development in Kolkata
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/locations/mumbai"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    <span className="font-bold text-brand-graphite text-sm group-hover:text-brand-blue transition-colors">
                      Software Development in Mumbai
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/locations/delhi"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    <span className="font-bold text-brand-graphite text-sm group-hover:text-brand-blue transition-colors">
                      Software Development in Delhi NCR
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/locations/bhopal"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    <span className="font-bold text-brand-graphite text-sm group-hover:text-brand-blue transition-colors">
                      Software Development in Bhopal
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/locations/bengaluru"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    <span className="font-bold text-brand-graphite text-sm group-hover:text-brand-blue transition-colors">
                      Software Development in Bengalore
                    </span>
                  </Link>
                </li>

                <li>
                  <span className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    <span className="font-bold text-brand-graphite text-sm">
                      Remote Development Across India
                    </span>
                  </span>
                </li>
              </ul>

              <Link
                href="/contact"
                className="block w-full py-3 px-4 bg-brand-graphite text-white text-center font-bold text-sm rounded-xl hover:bg-brand-blue transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
