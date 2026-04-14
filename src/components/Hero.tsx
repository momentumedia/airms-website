"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { company } from "@/data/company";

const trustPoints = [
  "Licensed Commercial Insurance Brokers — RIBO Certified",
  "Serving Businesses Across the Hamilton, Ontario & Canada",
  "Direct Access to Senior Brokers — No Call Centres",
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 bg-white overflow-hidden">
      {/* Subtle green gradient top-right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(45,122,110,0.07)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-light border border-brand/30 text-brand-dark text-xs font-medium tracking-wide mb-6"
          >
            Licensed Commercial Insurance Brokers Across Canada
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5"
          >
            The Right Coverage.{" "}
            <span className="text-brand">
              The Right Broker.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed mb-8"
          >
            Accelerated Insurance &amp; Risk Management Services protects Canadian businesses with tailored commercial insurance — from general liability to cyber coverage.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-2.5 mb-10"
          >
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-gray-600 text-sm">
                <CheckCircle size={16} className="text-brand flex-shrink-0" />
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${company.phone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-300 hover:border-brand/50 text-gray-700 hover:text-brand-dark font-medium rounded-lg transition-all"
            >
              <Phone size={16} />
              {company.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
