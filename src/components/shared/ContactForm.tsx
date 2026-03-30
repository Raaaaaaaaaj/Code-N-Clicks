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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", phone: "", company: "", budget: "", service: "", message: "" });
    setLoading(false);
  };

  const inputClass = "w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm";

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" required className={inputClass} />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address *" required className={inputClass} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass} />
        <input name="company" value={form.company} onChange={handleChange} placeholder="Company Name" className={inputClass} />
      </div>
      {variant === "consultation" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
            <option value="">Select Service</option>
            <option value="web-development">Web Development</option>
            <option value="web-designing">Web Designing</option>
            <option value="custom-software">Custom Software</option>
            <option value="ecommerce">E-commerce</option>
            <option value="crm">CRM Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="seo">SEO</option>
            <option value="ads">Google & Meta Ads</option>
            <option value="graphics">Graphics Designing</option>
          </select>
          <select name="budget" value={form.budget} onChange={handleChange} className={inputClass}>
            <option value="">Budget Range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 – $15,000</option>
            <option value="15k-50k">$15,000 – $50,000</option>
            <option value="50k-plus">$50,000+</option>
          </select>
        </div>
      )}
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder={variant === "consultation" ? "Tell us about your project requirements, goals, and timeline..." : "Your Message *"}
        required
        rows={5}
        className={inputClass + " resize-none"}
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 shadow-glow"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {loading ? "Sending..." : variant === "consultation" ? "Book Consultation" : "Send Message"}
      </button>
    </motion.form>
  );
};

export default ContactForm;
