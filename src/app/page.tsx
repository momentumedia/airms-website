import { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/data/services";
import { stats, values } from "@/data/company";
import { ArrowRight, Phone, Shield, CheckCircle, TrendingUp, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIRMS | Commercial Insurance Canada | Accelerated Insurance & Risk Management Services",
  description:
    "Canada's trusted commercial insurance brokerage. Tailored risk management solutions for businesses across Canada. Licensed brokers, no call centres.",
};

const iconComponents: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield,
  GraduationCap,
  Users,
  TrendingUp,
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Stats section */}
      <section className="py-14 bg-brand">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-white mb-1">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="What We Cover"
            title="Commercial Insurance Services"
            subtitle="Comprehensive coverage across all lines of commercial insurance — from startups to established enterprises."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.slice(0, 8).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3 border border-gray-300 hover:border-brand/50 text-gray-700 hover:text-brand-dark text-sm font-medium rounded-lg transition-all"
            >
              View All Services
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Why AIRMS"
                title="Your Risk Management Partner, Not Just a Broker"
                subtitle="We go beyond placing policies. Our licensed brokers act as strategic risk advisors — helping your business stay protected as it grows."
              />
              <ul className="flex flex-col gap-4">
                {[
                  "Direct access to senior licensed brokers — no call centres",
                  "Relationships with leading Canadian and international insurers",
                  "Dedicated claims advocacy when you need it most",
                  "Annual policy reviews to keep your coverage current",
                  "Industry-specific expertise across multiple business sectors",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle size={16} className="text-brand mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold text-sm rounded-lg transition-all shadow-sm"
                >
                  About AIRMS
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-brand/50 text-gray-700 hover:text-brand-dark text-sm font-medium rounded-lg transition-all"
                >
                  Meet the Team
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => {
                const Icon = iconComponents[value.icon] || Shield;
                return (
                  <div
                    key={value.title}
                    className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-brand/40 hover:shadow-sm transition-all"
                  >
                    <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center mb-3">
                      <Icon size={20} className="text-brand" />
                    </div>
                    <h4 className="text-gray-900 font-semibold text-sm mb-1.5">{value.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-brand rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Protect Your Business?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Get a tailored commercial insurance quote from a licensed broker who knows your industry. No automated systems. No runaround.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-brand-light text-brand-dark font-bold rounded-xl transition-all shadow-md"
              >
                Request a Quote
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:4164576557"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 hover:border-white text-white font-medium rounded-xl transition-all"
              >
                <Phone size={16} />
                416-457-6557
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
