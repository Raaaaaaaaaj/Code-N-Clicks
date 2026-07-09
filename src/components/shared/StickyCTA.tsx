"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const StickyCTA = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        href="/contact"
        aria-label="Book a free consultation"
        className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-premium hover:bg-primary/90 transition-colors text-sm"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">Free Consultation</span>
      </Link>
    </motion.div>
  );
};

export default StickyCTA;
