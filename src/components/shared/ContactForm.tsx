"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  variant?: "default" | "consultation";
}

const ContactForm = ({ variant = "default" }: ContactFormProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          service: form.service 
            ? (form.budget ? `${form.service} (Budget: ${form.budget})` : form.service)
            : (form.budget ? `Budget: ${form.budget}` : undefined)
        }),
      });

      if (res.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setForm({ name: "", email: "", phone: "", company: "", budget: "", service: "", message: "" });
      } else {
        toast({
          variant: "destructive",
          title: "Failed to send message",
          description: "Please try again or contact us directly.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred.",
      });
    } finally {
      setLoading(false);
    }
  };
  const inputClass = "w-full px-4 py-3.5 bg-white border border-brand-graphite/15 rounded-xl text-brand-graphite placeholder:text-brand-graphite/40 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 hover:border-brand-graphite/30 transition-all duration-200 text-sm font-medium shadow-xs";
  const selectClass = "w-full px-4 py-3.5 bg-white border border-brand-graphite/15 rounded-xl text-brand-graphite focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 hover:border-brand-graphite/30 transition-all duration-200 text-sm font-medium shadow-xs appearance-none cursor-pointer";

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-4"
      aria-label={variant === "consultation" ? "Project consultation form" : "Contact form"}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" required className={inputClass} aria-label="Your name" autoComplete="name" />
        </div>
        <div className="relative">
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address *" required className={inputClass} aria-label="Email address" autoComplete="email" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass} aria-label="Phone number" autoComplete="tel" />
        </div>
        <div className="relative">
          <input name="company" value={form.company} onChange={handleChange} placeholder="Company Name" className={inputClass} aria-label="Company name" autoComplete="organization" />
        </div>
      </div>
      {variant === "consultation" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <select name="service" value={form.service} onChange={handleChange} className={selectClass} aria-label="Select service">
              <option value="">Select Service</option>
              <option value="web-development">Web Development</option>
              <option value="web-designing">Web Designing</option>
              <option value="custom-software">Custom Software</option>
              <option value="saas">SaaS Development</option>
              <option value="ecommerce">E-commerce</option>
              <option value="crm">CRM Development</option>
              <option value="hotel-system">Hotel Management System</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="seo">SEO</option>
              <option value="ads">Google & Meta Ads</option>
              <option value="graphics">Graphics Designing</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-graphite/40">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <select name="budget" value={form.budget} onChange={handleChange} className={selectClass} aria-label="Select budget range">
              <option value="">Budget Range</option>
              <option value="under-25k">Under INR 25,000</option>
              <option value="25k-75k">INR 25,000 - INR 75,000</option>
              <option value="75k-2l">INR 75,000 - INR 2,00,000</option>
              <option value="2l-plus">INR 2,00,000+</option>
              <option value="global">Global project budget</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-graphite/40">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
      )}
      <div className="relative">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={variant === "consultation" ? "Tell us about your project requirements, goals, and timeline..." : "Your Message *"}
          required
          rows={5}
          className={inputClass + " resize-none"}
          aria-label="Project message"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        aria-busy={loading}
        className="group w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-brand-blue text-white font-mono font-bold text-xs tracking-wider uppercase rounded-xl hover:bg-brand-blue/90 shadow-md hover:shadow-lg shadow-brand-blue/20 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 cursor-pointer"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        )}
        <span>{loading ? "Sending..." : variant === "consultation" ? "Book Consultation" : "Send Message"}</span>
      </button>
    </motion.form>
  );
};

export default ContactForm;
