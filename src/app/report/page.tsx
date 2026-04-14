import { Metadata } from "next";
import {
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Zap,
  Palette,
  Search,
  Smartphone,
  FileText,
  Lock,
  ShieldCheck,
  TrendingUp,
  XCircle,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Old Site Audit — airms.ca | AIRMS",
  description:
    "A plain-language review of what's wrong with the current airms.ca website and why a new site matters for your business.",
};

const issues = [
  {
    icon: Smartphone,
    severity: "Critical",
    title: "Doesn't work well on mobile",
    plain: "Over 60% of people browsing the web use their phone. If your site looks broken on a phone, those visitors leave immediately — and go to a competitor.",
    tech: "Non-responsive layout with fixed-width containers. No viewport meta tag optimisation. Touch targets below 44px minimum. No mobile-first CSS breakpoints detected.",
  },
  {
    icon: Search,
    severity: "Critical",
    title: "Invisible on Google",
    plain: "When someone searches 'commercial insurance Canada', your site doesn't show up. Without Google visibility, new clients can't find you — no matter how good your service is.",
    tech: "Missing title tags, meta descriptions, and H1 hierarchy on key pages. No structured data (JSON-LD schema). Sitemap.xml absent or not submitted to Google Search Console.",
  },
  {
    icon: Zap,
    severity: "Critical",
    title: "Loads too slowly",
    plain: "The site takes too long to load. Studies show that if a site takes more than 3 seconds, most people give up. Slow sites also rank lower on Google.",
    tech: "Unoptimised images (no WebP/AVIF, no lazy loading). No CDN detected. Large render-blocking JavaScript and CSS. Core Web Vitals (LCP, FID, CLS) likely failing Google thresholds.",
  },
  {
    icon: ShieldCheck,
    severity: "High",
    title: "No trust signals for new visitors",
    plain: "First-time visitors don't know who they're dealing with. There are no broker profiles, credentials, or client stories — nothing to build confidence before they reach out.",
    tech: "No RIBO licence display, no team/broker profiles, no testimonials or reviews, no industry association badges. Absence of social proof increases bounce rate and reduces conversion.",
  },
  {
    icon: FileText,
    severity: "High",
    title: "Services aren't clearly explained",
    plain: "The current site doesn't clearly explain what types of insurance you offer or who they're for. Visitors can't tell if AIRMS is the right fit for their business.",
    tech: "Thin page content with low word count. No dedicated landing pages per insurance line. Missing keyword-rich copy for commercial general liability, cyber, D&O, etc. Poor internal linking structure.",
  },
  {
    icon: Palette,
    severity: "High",
    title: "Looks outdated",
    plain: "The design looks like it's from 2010. For an insurance brokerage where trust is everything, an outdated website signals that the business may not be active or professional.",
    tech: "No CSS design system or component library. Generic stock theme with no brand customisation. Poor typography hierarchy. No micro-interactions or modern UI patterns (hover states, transitions).",
  },
  {
    icon: Lock,
    severity: "Medium",
    title: "The site blocks search engines",
    plain: "During our review, the website returned errors that indicate it may be accidentally blocking Google from reading it. If Google can't read your site, it won't show it to anyone.",
    tech: "HTTP 403 Forbidden responses returned for all crawl requests. Likely caused by overly aggressive WAF/bot-blocking rules or misconfigured Cloudflare settings that affect Googlebot.",
  },
  {
    icon: TrendingUp,
    severity: "Medium",
    title: "No clear path to get a quote",
    plain: "There's no obvious button or call-to-action telling visitors what to do next. Without a clear 'Get a Quote' path, potential clients just leave.",
    tech: "No persistent CTA in the navigation. No conversion-optimised contact form above the fold. Phone number not clickable (tel: href missing). No quote funnel or lead capture mechanism.",
  },
  {
    icon: Search,
    severity: "Medium",
    title: "Won't appear in AI search results",
    plain: "When people ask ChatGPT, Claude, or Google Gemini to recommend a commercial insurance broker in Canada, your business won't come up. AI tools pull from websites they can actually read — and right now, they can't read yours.",
    tech: "AI search engines (ChatGPT Browse, Perplexity, Google SGE, Claude) index content via structured crawling. The current site returns HTTP 403 errors, has no structured data (JSON-LD), no clear entity signals, and no crawlable content — making it invisible to AI-powered search and recommendation engines.",
  },
];

const sevConfig = {
  Critical: { color: "text-red-600", bg: "bg-red-50", border: "border-red-200", dot: "bg-red-500" },
  High: { color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200", dot: "bg-orange-500" },
  Medium: { color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-200", dot: "bg-yellow-500" },
};

const improvements = [
  { old: "Hard to find on Google", new: "Built to rank — proper SEO, page titles, and structure" },
  { old: "Broken on phones", new: "Looks great on every device, every screen size" },
  { old: "Loads slowly", new: "Instant loading — built with modern technology" },
  { old: "No broker profiles", new: "Team page with broker credentials and direct contact" },
  { old: "Vague services page", new: "Clear breakdown of every insurance type you offer" },
  { old: "No way to get a quote", new: "Quote request form + phone number on every page" },
  { old: "Looks unprofessional", new: "Modern, clean design that builds trust instantly" },
];

export default function ReportPage() {
  const critical = issues.filter((i) => i.severity === "Critical").length;
  const high = issues.filter((i) => i.severity === "High").length;
  const medium = issues.filter((i) => i.severity === "Medium").length;

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Website Review</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Old Site Audit — airms.ca
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            A plain-language look at what&apos;s holding the current website back, and why it matters for attracting new clients.
          </p>

          {/* Score summary */}
          <div className="grid grid-cols-3 gap-4 mt-10 max-w-lg">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
              <p className="text-3xl font-black text-red-600">{critical}</p>
              <p className="text-red-700 text-xs font-semibold mt-1">Critical</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
              <p className="text-3xl font-black text-orange-600">{high}</p>
              <p className="text-orange-700 text-xs font-semibold mt-1">High Priority</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
              <p className="text-3xl font-black text-yellow-600">{medium}</p>
              <p className="text-yellow-700 text-xs font-semibold mt-1">Medium Priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Issues */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What&apos;s Wrong With the Current Site</h2>
          <div className="flex flex-col gap-4">
            {issues.map((issue) => {
              const Icon = issue.icon;
              const s = sevConfig[issue.severity as keyof typeof sevConfig];
              return (
                <div key={issue.title} className={`bg-white border ${s.border} rounded-xl p-6`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Icon size={20} className={s.color} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-gray-900 font-semibold">{issue.title}</h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${s.bg} ${s.color} border ${s.border}`}>
                          {issue.severity.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">{issue.plain}</p>
                      <p className="text-gray-400 text-xs leading-relaxed font-mono border-t border-gray-100 pt-2 mt-2">
                        <span className="text-gray-300 mr-1">⌨</span>{issue.tech}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Old Site vs. New Site</h2>
          <div className="overflow-hidden border border-gray-200 rounded-2xl">
            <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-200">
              <div className="px-6 py-3 flex items-center gap-2">
                <XCircle size={16} className="text-red-500" />
                <span className="text-sm font-semibold text-gray-600">Current airms.ca</span>
              </div>
              <div className="px-6 py-3 flex items-center gap-2 border-l border-gray-200 bg-brand-light">
                <CheckCircle size={16} className="text-brand" />
                <span className="text-sm font-semibold text-brand-dark">New AIRMS Website</span>
              </div>
            </div>
            {improvements.map((row, i) => (
              <div
                key={row.old}
                className={`grid grid-cols-2 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}
              >
                <div className="px-6 py-4 flex items-start gap-2">
                  <AlertTriangle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{row.old}</span>
                </div>
                <div className="px-6 py-4 flex items-start gap-2 border-l border-gray-200">
                  <CheckCircle size={14} className="text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{row.new}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <CheckCircle size={40} className="text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">This New Site Fixes Everything Above</h2>
          <p className="text-white/80 leading-relaxed mb-8">
            Every issue identified in this audit has been addressed in the new build. Fast, mobile-friendly, built to rank on Google — and designed to turn visitors into clients.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-brand-light text-brand-dark font-bold rounded-xl transition-all shadow-md"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
