import { Metadata } from "next";
import { Shield, Building2, Briefcase, Lock, Truck, Users, Heart, CloudRain, CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Commercial Insurance Services",
  description:
    "AIRMS offers commercial insurance services across Canada: general liability, property, professional liability, cyber, D&O, fleet, workers comp, and more.",
};

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

const industries = [
  "Construction & Contracting",
  "Technology & Software",
  "Professional Services",
  "Real Estate & Property Management",
  "Manufacturing & Distribution",
  "Transportation & Logistics",
  "Hospitality & Food Service",
  "Healthcare & Medical",
  "Non-Profit & Charities",
  "Retail & E-Commerce",
  "Financial Services",
  "Media & Entertainment",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(45,122,110,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl">
            <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Commercial Insurance Solutions for Every Business
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed">
              AIRMS structures commercial insurance programs tailored to your business — whether you&apos;re a small consultancy or a large enterprise. Explore our full range of coverage options below.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Shield;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl p-8 md:p-10 hover:border-brand/30 hover:shadow-sm transition-all"
                >
                  <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-brand-light border border-brand/30 rounded-xl flex items-center justify-center">
                          <Icon size={24} className="text-brand" />
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                      <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>

                      {service.industries && (
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">Common Industries</p>
                          <div className="flex flex-wrap gap-2">
                            {service.industries.map((ind) => (
                              <span
                                key={ind}
                                className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-600 text-xs rounded-full"
                              >
                                {ind}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-4">Coverage Highlights</p>
                      <ul className="flex flex-col gap-2.5 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-gray-600 text-sm">
                            <CheckCircle size={15} className="text-brand flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-lg transition-all"
                      >
                        Get a Quote
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Industries We Serve"
            title="Coverage Across Every Sector"
            subtitle="Commercial insurance needs vary by industry. Our brokers have experience structuring programs across a wide range of sectors."
            center
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center hover:border-brand/40 hover:text-brand-dark text-gray-600 text-sm transition-all"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Not Sure What Coverage You Need?</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Every business is different. Our licensed brokers will review your situation and recommend the right combination of coverage — without overpaying for what you don&apos;t need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-dark text-white font-semibold rounded-xl transition-all shadow-md"
            >
              Start a Conversation
              <ArrowRight size={15} />
            </Link>
            <a
              href="tel:4164576557"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 hover:border-brand/50 text-gray-700 hover:text-brand-dark rounded-xl transition-all"
            >
              <Phone size={15} />
              416-457-6557
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
