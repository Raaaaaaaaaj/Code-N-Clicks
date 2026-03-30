import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const StickyCTA = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
    >
      <Link
        to="/contact"
        className="flex items-center gap-2 px-5 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-full shadow-glow hover:opacity-90 transition-opacity text-sm animate-pulse_glow"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">Free Consultation</span>
      </Link>
    </motion.div>
  );
};

export default StickyCTA;
