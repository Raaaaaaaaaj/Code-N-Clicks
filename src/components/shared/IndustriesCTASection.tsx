import { Check } from "lucide-react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";

export default function IndustriesCTASection() {
  return (
    <Section className="bg-brand-mist">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">
              GET STARTED
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-graphite leading-tight">
              Have an Industry-Specific Software Idea?
            </h2>
            <p className="text-brand-graphite/75 text-sm md:text-base leading-relaxed font-sans">
              Tell us how your business works, what is slowing your team down, and what you want to automate. We'll help you identify the right software approach before development begins.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Free project estimate",
                "Expert consultation",
                "24-hour response",
                "Transparent pricing",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-mono font-bold text-brand-graphite/80"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-blue/15 text-brand-blue flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 border-2 border-brand-graphite rounded-[32px] shadow-premium">
            <ContactForm variant="consultation" />
          </div>
        </div>
      </div>
    </Section>
  );
}
