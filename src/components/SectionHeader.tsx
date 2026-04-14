"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, center = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? "text-center max-w-3xl mx-auto" : ""}`}
    >
      {eyebrow && (
        <p className="text-brand text-sm font-medium uppercase tracking-widest mb-3">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-gray-500 text-lg leading-relaxed ${center ? "" : "max-w-2xl"}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}
