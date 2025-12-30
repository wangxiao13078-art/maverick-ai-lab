"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlowCard({ children, className = "", delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
      className={`gradient-border glow-box backdrop-blur-xl p-6 card-hover ${className}`}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}








