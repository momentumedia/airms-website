import { Metadata } from "next";
import { Phone, Mail, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { team } from "@/data/team";
import TeamCard from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "Our Team | AIRMS",
  description:
    "Meet the licensed commercial insurance brokers at AIRMS — Accelerated Insurance & Risk Management Services. Serving the Hamilton, Ontario.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(45,122,110,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl">
            <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Meet the Team</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Experienced Brokers Who Put Your Business First
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed">
              At AIRMS, you work directly with senior licensed professionals. No call centres, no account shuffling — dedicated experts who know your business and fight for your interests.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
          {/* Placeholder for future brokers */}
          <div className="mt-8 bg-white border border-dashed border-gray-300 rounded-2xl p-10 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={24} className="text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium mb-1">More Brokers Coming Soon</p>
            <p className="text-gray-400 text-sm">Our team is growing. Check back for new additions.</p>
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Licensed & Experienced",
                description:
                  "Our brokers hold active RIBO licenses and maintain continuing education to stay current with evolving insurance markets and Ontario regulations.",
              },
              {
                icon: Phone,
                title: "Direct Access",
                description:
                  "Call or email your broker directly. No automated phone trees, no offshore call centres. When you need us, we answer.",
              },
              {
                icon: ArrowRight,
                title: "Long-Term Relationships",
                description:
                  "We measure success in years, not transactions. Our goal is to build long-term relationships based on consistent value at every renewal.",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-brand/40 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 bg-brand-light border border-brand/30 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-brand" />
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Schedule a no-obligation consultation with one of our licensed brokers. We&apos;ll review your coverage needs and find the right protection for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-dark text-white font-semibold rounded-xl transition-all shadow-md"
            >
              Book a Consultation
              <ArrowRight size={15} />
            </Link>
            <a
              href="mailto:info@airms.ca"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 hover:border-brand/50 text-gray-700 hover:text-brand-dark rounded-xl transition-all"
            >
              <Mail size={15} />
              info@airms.ca
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
