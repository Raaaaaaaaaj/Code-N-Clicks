import React from "react";

export const SeoStatementSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto p-8 md:p-12 bg-brand-mist/60 border-2 border-brand-graphite rounded-[32px] shadow-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-6 relative z-10">
            <span className="text-brand-blue text-xl font-mono font-bold tracking-widest uppercase">
              Strategic Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-graphite leading-tight tracking-tight">
              BUILT WITH TECHNOLOGIES THAT FIT YOUR BUSINESS
            </h2>
            <div className="space-y-4 text-base text-brand-graphite/80 leading-relaxed font-sans">
              <p>
                Technology should support your business—not dictate how your business operates.
              </p>
              <p>
                Whether you&apos;re launching a new SaaS product, building a customer-facing web application, modernizing a legacy system, or adding AI to an existing platform, our engineers evaluate the technical requirements before recommending the stack.
              </p>
              <p className="font-semibold text-brand-graphite">
                We combine frontend frameworks, backend technologies, databases, cloud infrastructure, DevOps, AI, analytics, and design tools to create software that is practical to build today and easier to maintain tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
