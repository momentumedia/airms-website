"use client";

import { motion } from "framer-motion";
import type { ReportIssue } from "@/types";

const severityConfig = {
  Critical: {
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
    dot: "bg-red-500",
    label: "CRITICAL",
    impactBg: "bg-red-50",
    impactBorder: "border-red-100",
  },
  High: {
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    dot: "bg-orange-500",
    label: "HIGH",
    impactBg: "bg-orange-50",
    impactBorder: "border-orange-100",
  },
  Medium: {
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    dot: "bg-yellow-400",
    label: "MEDIUM",
    impactBg: "bg-yellow-50",
    impactBorder: "border-yellow-100",
  },
  Low: {
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    dot: "bg-blue-400",
    label: "LOW",
    impactBg: "bg-blue-50",
    impactBorder: "border-blue-100",
  },
};

interface Props {
  issue: ReportIssue;
  index?: number;
}

export default function ReportCard({ issue, index = 0 }: Props) {
  const s = severityConfig[issue.severity];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`bg-white border ${s.border} rounded-xl p-6 hover:shadow-sm transition-all`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />
          <h4 className="text-gray-900 font-semibold text-sm">{issue.title}</h4>
        </div>
        <span
          className={`flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider ${s.color} ${s.bg} border ${s.border}`}
        >
          {s.label}
        </span>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-3">{issue.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className={`${s.impactBg} border ${s.impactBorder} rounded-lg p-3`}>
          <p className="text-gray-500 text-[10px] uppercase tracking-wider font-medium mb-1.5">Business Impact</p>
          <p className="text-gray-700 text-xs leading-relaxed">{issue.impact}</p>
        </div>
        <div className="bg-brand-light border border-brand/20 rounded-lg p-3">
          <p className="text-brand text-[10px] uppercase tracking-wider font-medium mb-1.5">Recommendation</p>
          <p className="text-gray-700 text-xs leading-relaxed">{issue.recommendation}</p>
        </div>
      </div>
    </motion.div>
  );
}
