"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className = "", id }: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`py-20 lg:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
