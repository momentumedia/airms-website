"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Building2,
  Briefcase,
  Lock,
  Truck,
  Users,
  Heart,
  CloudRain,
  ArrowRight,
} from "lucide-react";
import type { Service } from "@/types";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield,
  Building2,
  Briefcase,
  Lock,
  Truck,
  Users,
  Heart,
  CloudRain,
};

interface Props {
  service: Service;
  index?: number;
  variant?: "grid" | "featured";
}

export default function ServiceCard({ service, index = 0, variant = "grid" }: Props) {
  const Icon = iconMap[service.icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand/40 hover:shadow-md transition-all duration-300"
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-brand-light border border-brand/30 flex items-center justify-center mb-4 group-hover:bg-brand-light transition-colors">
          <Icon size={22} className="text-brand" />
        </div>

        <h3 className="text-gray-900 font-semibold text-lg mb-2 group-hover:text-brand-dark transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>

        {variant === "featured" && (
          <ul className="flex flex-col gap-1.5 mb-5">
            {service.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-gray-500 text-xs">
                <div className="w-1 h-1 rounded-full bg-brand flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-brand text-sm font-medium hover:gap-2.5 transition-all"
        >
          Learn More
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
