"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Award, User } from "lucide-react";
import type { TeamMember } from "@/types";

interface Props {
  member: TeamMember;
  index?: number;
}

export default function TeamCard({ member, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm"
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Headshot / Avatar */}
        <div className="flex-shrink-0 text-center md:text-left">
          <div className="w-28 h-28 rounded-2xl bg-brand-light border border-brand/30 flex items-center justify-center mx-auto md:mx-0">
            <User size={48} className="text-brand" />
          </div>
          <div className="mt-4">
            <h3 className="text-gray-900 font-bold text-lg">{member.name}</h3>
            <p className="text-brand text-sm font-medium">{member.title}</p>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <a
              href={`tel:${member.phone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-brand text-sm transition-colors"
            >
              <Phone size={14} />
              {member.phone}
            </a>
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-brand text-sm transition-colors break-all"
            >
              <Mail size={14} />
              {member.email}
            </a>
          </div>
        </div>

        {/* Bio */}
        <div className="flex-1">
          <div>
            {member.bio.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-500 text-sm leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </div>

          {member.expertise && member.expertise.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <Award size={14} className="text-brand" />
                <p className="text-gray-700 text-xs font-semibold uppercase tracking-wider">Areas of Expertise</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-brand-light border border-brand/30 text-brand-dark text-xs rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
