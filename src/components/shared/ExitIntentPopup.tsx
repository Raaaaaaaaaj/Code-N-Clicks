"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";
import ContactForm from "./ContactForm";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Prevent run on SSR, check session storage
    if (typeof window === "undefined") return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("exitPopupShown")) {
        setShow(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("exitPopupShown")) {
        setShow(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    }, 30000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-brand-graphite/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShow(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background border border-border rounded-2xl p-8 max-w-lg w-full shadow-premium relative"
          >
            <button onClick={() => setShow(false)} aria-label="Close consultation popup" className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Gift className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Get a free project review.</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Share your website, software, or marketing goal and we will send practical next steps within 24 hours.
            </p>
            <ContactForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
