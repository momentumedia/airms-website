import { Metadata } from "next";
import { Shield, Target, TrendingUp, GraduationCap, Users, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { values, stats } from "@/data/company";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About AIRMS | Accelerated Insurance & Risk Management Services",
  description:
    "Learn about AIRMS — Accelerated Insurance & Risk Management Services. A licensed Canadian commercial insurance brokerage serving businesses across Canada.",
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield,
  GraduationCap,
  Users,
  TrendingUp,
};

const milestones = [
  {
    year: "****",
    title: "Founded",
    description: "Accelerated Insurance & Risk Management Services was established in Hamilton, Ontario as a member of SIB Corp., operating as Stoneridge Insurance Brokers.",
  },
  {
    year: "****",
    title: "** Milestone",
    description: "** — add your real company milestone here.",
  },
  {
    year: "****",
    title: "** Milestone",
    description: "** — add your real company milestone here.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(45,122,110,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl">
            <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">About AIRMS</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Toronto&apos;s Trusted Partner in Commercial Risk Management
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed">
              Accelerated Insurance &amp; Risk Management Services is a licensed commercial insurance brokerage protecting businesses across Canada with expert coverage tailored to each client&apos;s unique risk profile.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Our Mission"
                title="Protecting What You've Built"
                subtitle="At AIRMS, we believe every business owner deserves expert insurance guidance — not just policy paperwork. Our mission is to deliver coverage that genuinely protects your business when it matters most."
              />
              <div className="flex flex-col gap-4">
                {[
                  "Transparent, conflict-free insurance advice",
                  "Negotiate the best possible coverage and terms on your behalf",
                  "Available when you need us — not just at renewal time",
                  "Advocate vigorously for our clients during the claims process",
                  "Stay ahead of emerging risks so your coverage never falls behind",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold">Our Promise</h3>
                  <p className="text-gray-500 text-xs">To every client we serve</p>
                </div>
              </div>
              <blockquote className="border-l-2 border-brand pl-5 mb-6">
                <p className="text-gray-600 text-lg italic leading-relaxed">
                  &ldquo;We treat every client&apos;s business as if it were our own. Every coverage decision, every renewal, every claim — we ask: would we be satisfied with this outcome if it were our company on the line?&rdquo;
                </p>
              </blockquote>
              <p className="text-gray-500 text-sm">— The AIRMS Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-brand">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-white mb-1">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="Our values define how we operate every day with every client."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = iconMap[value.icon] || Shield;
              return (
                <div
                  key={value.title}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-brand/40 hover:shadow-sm transition-all text-center"
                >
                  <div className="w-14 h-14 bg-brand-light border border-brand/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-brand" />
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Our Story"
            title="Our Story"
            center
          />
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            <div className="flex flex-col gap-8">
              {milestones.map((milestone, i) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white border border-gray-200 rounded-xl p-5 inline-block w-full hover:border-brand/40 hover:shadow-sm transition-all">
                      <p className="text-brand text-xs font-bold mb-1">{milestone.year}</p>
                      <h4 className="text-gray-900 font-semibold text-sm mb-1.5">{milestone.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-brand border-4 border-gray-50 flex-shrink-0 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Work with a Broker Who Knows Your Business</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our team takes the time to understand your operations, risks, and goals before recommending any coverage. Schedule a no-obligation consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-dark text-white font-semibold rounded-xl transition-all shadow-md"
            >
              Book a Consultation
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 hover:border-brand/50 text-gray-700 hover:text-brand-dark rounded-xl transition-all"
            >
              Meet Our Brokers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
