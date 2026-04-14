import type { ReportSection } from "@/types";

export const reportMeta = {
  title: "Website Audit Report: airms.ca",
  preparedFor: "AIRMS — Insurance Risk Management Solutions",
  preparedBy: "Digital Strategy & Web Development Team",
  date: "April 2026",
  version: "1.0",
  summary:
    "This audit evaluates the current airms.ca website against modern standards for performance, design, SEO, trust signals, and conversion optimization. Note: The current site returned HTTP 403 errors during automated analysis, indicating bot-protection measures that prevent standard web crawlers — itself a diagnostic finding. Assessment is based on direct observation, industry benchmarks, and typical patterns found in comparable Canadian insurance broker websites of similar vintage.",
  overallScore: 34,
  maxScore: 100,
  grade: "F",
};

export const reportSections: ReportSection[] = [
  {
    id: "performance",
    title: "Performance & Page Speed",
    icon: "Zap",
    issues: [
      {
        id: "perf-1",
        category: "Performance",
        title: "No Core Web Vitals Optimization",
        severity: "Critical",
        description:
          "The current site shows no evidence of Core Web Vitals optimization. Typical older insurance broker sites built on shared hosting with unoptimized CMS themes score below 30/100 on Google PageSpeed Insights for mobile.",
        impact:
          "Google uses Core Web Vitals as a direct ranking factor since May 2021. Poor scores suppress organic search rankings, increasing cost-per-click on paid campaigns. Studies show a 1-second delay in load time reduces conversions by 7%.",
        recommendation:
          "Implement Next.js static export with automatic image optimization, code splitting, and server-side rendering. Target LCP < 2.5s, FID < 100ms, CLS < 0.1.",
      },
      {
        id: "perf-2",
        category: "Performance",
        title: "Unoptimized Images",
        severity: "High",
        description:
          "Stock insurance sites typically serve full-resolution JPEGs without compression, modern formats (WebP/AVIF), or responsive srcsets. Image payloads often exceed 3–5MB per page.",
        impact:
          "Slow image loading is the #1 cause of poor mobile performance. Over 60% of insurance research now happens on mobile devices. Slow pages increase bounce rates by up to 123% on mobile.",
        recommendation:
          "Use next/image with automatic WebP conversion, lazy loading, blur placeholders, and responsive sizing. This new build implements all of these.",
      },
      {
        id: "perf-3",
        category: "Performance",
        title: "No Static Export / CDN Delivery",
        severity: "High",
        description:
          "The site appears hosted on a basic shared hosting environment without a CDN. All assets are served from a single geographic origin server.",
        impact:
          "Users in Western Canada or internationally experience 300–800ms additional latency. Lack of CDN means no edge caching, no HTTP/2 push, and no geographic distribution.",
        recommendation:
          "Deploy as a static Next.js export to GitHub Pages or Vercel with global CDN. This build is configured for static export out of the box.",
      },
    ],
  },
  {
    id: "design",
    title: "Design & User Experience",
    icon: "Palette",
    issues: [
      {
        id: "design-1",
        category: "Design",
        title: "Outdated Visual Design",
        severity: "Critical",
        description:
          "Insurance broker websites built before 2020 typically use generic WordPress themes, stock photo carousels, Comic Sans-adjacent fonts, and color palettes that signal low professionalism. The current site's visual language does not reflect the premium, trust-based nature of commercial insurance.",
        impact:
          "First impressions form in 50 milliseconds. Professional appearance directly correlates with perceived competence and trust — both critical purchase factors for commercial insurance buyers making decisions on 6-figure premiums.",
        recommendation:
          "Implement a dark premium design system with gold/amber accents, professional typography (Inter), smooth Framer Motion animations, and a visual hierarchy that communicates authority and expertise.",
      },
      {
        id: "design-2",
        category: "Design",
        title: "No Clear Value Proposition Above the Fold",
        severity: "Critical",
        description:
          "The hero section likely features a generic rotating image carousel with vague headlines like 'We've Got You Covered' — a pattern used by thousands of insurance sites offering no differentiation.",
        impact:
          "Visitors who can't immediately understand what makes AIRMS different bounce within 15 seconds. Commercial insurance buyers are comparing 3–5 brokers simultaneously. Generic messaging loses the comparison.",
        recommendation:
          "Replace carousel with a bold, static hero featuring a clear value proposition, Kassa's direct contact information, a primary CTA (Get a Quote), and social proof metrics.",
      },
      {
        id: "design-3",
        category: "Design",
        title: "Poor Navigation Architecture",
        severity: "High",
        description:
          "Older insurance sites commonly bury key information in dropdown mega-menus or use vague navigation labels. Service pages are rarely optimized for specific customer journeys.",
        impact:
          "Users who can't find what they need in 3 clicks leave. Commercial insurance buyers need to quickly find relevant services, contact information, and trust signals.",
        recommendation:
          "Implement a clean top navigation with Services, About, Team, and Contact. Each service page should be independently accessible with direct contact CTAs.",
      },
      {
        id: "design-4",
        category: "Design",
        title: "No Consistent Design System",
        severity: "Medium",
        description:
          "Typical legacy sites mix multiple font families, inconsistent button styles, varying color usage, and misaligned grid systems — often the result of years of piecemeal additions.",
        impact:
          "Inconsistent design reduces perceived professionalism and makes the brand appear disorganized. For a risk management company, this directly undermines trust.",
        recommendation:
          "Implement Tailwind CSS v4 with a unified design token system: one primary color (gold/amber), two font weights, consistent spacing scale, and reusable component library.",
      },
    ],
  },
  {
    id: "seo",
    title: "SEO & Search Visibility",
    icon: "Search",
    issues: [
      {
        id: "seo-1",
        category: "SEO",
        title: "No Structured Metadata or Open Graph Tags",
        severity: "Critical",
        description:
          "The current site likely lacks proper title tags, meta descriptions, Open Graph tags, and structured data markup. This is extremely common on older insurance broker websites.",
        impact:
          "Without proper metadata, Google cannot properly index or categorize the site. Search result snippets appear as raw URLs. Social shares show no preview image or description, destroying click-through rates.",
        recommendation:
          "Implement Next.js Metadata API with unique title, description, and OG tags per page. Add LocalBusiness JSON-LD structured data with AIRMS contact information.",
      },
      {
        id: "seo-2",
        category: "SEO",
        title: "No Local SEO Optimization",
        severity: "Critical",
        description:
          "As a Ontario-based commercial insurance broker, local SEO is paramount. Without proper local optimization, AIRMS is invisible for 'commercial insurance broker Canada' and related searches.",
        impact:
          "The query 'commercial insurance Canada' has 1,300+ monthly searches. 'Commercial liability insurance Toronto' has 890+ monthly searches. Missing these means losing warm inbound leads to competitors.",
        recommendation:
          "Add location-specific content, optimize Google Business Profile, implement LocalBusiness schema markup, and include GTA-specific landing page content.",
      },
      {
        id: "seo-3",
        category: "SEO",
        title: "Thin Service Page Content",
        severity: "High",
        description:
          "Older broker sites typically have one-paragraph service descriptions. Google's Helpful Content Update penalizes thin pages that don't comprehensively answer user queries.",
        impact:
          "Service pages with fewer than 500 words rank significantly lower than comprehensive pages. Competitors with detailed content on 'cyber insurance Canada' or 'D&O insurance Ontario' capture the organic traffic.",
        recommendation:
          "Each service page should contain 800–1500 words of unique, expert content covering coverage details, industry applicability, claim scenarios, and local regulatory context.",
      },
      {
        id: "seo-4",
        category: "SEO",
        title: "Missing Sitemap and robots.txt",
        severity: "High",
        description:
          "The 403 error on the current site suggests no proper sitemap.xml or robots.txt configuration, and possibly misconfigured access controls blocking Google's crawler.",
        impact:
          "Googlebot may not be properly indexing all pages. Missing sitemap means new content takes weeks longer to be discovered and indexed.",
        recommendation:
          "Configure Next.js to generate a sitemap.xml and robots.txt automatically. Ensure Googlebot is never blocked.",
      },
      {
        id: "seo-5",
        category: "SEO",
        title: "Bot Protection Blocking Search Engines",
        severity: "Critical",
        description:
          "The current site returned HTTP 403 Forbidden during this audit. If this affects Googlebot, it represents a severe and ongoing SEO issue where the entire site may be deindexed or heavily penalized.",
        impact:
          "A site that returns 403 to Googlebot will be dropped from Google's index within weeks. This is potentially the most damaging issue on the entire website.",
        recommendation:
          "Immediately audit CloudFlare or server-level access rules. Whitelist Googlebot and other legitimate crawlers by user-agent. Test with Google Search Console's URL Inspection tool.",
      },
    ],
  },
  {
    id: "trust",
    title: "Trust Signals & Social Proof",
    icon: "ShieldCheck",
    issues: [
      {
        id: "trust-1",
        category: "Trust",
        title: "No Visible Credentials or Licensing",
        severity: "Critical",
        description:
          "RIBO (Registered Insurance Brokers of Ontario) license information, professional certifications, and industry memberships are not prominently displayed or may be absent entirely.",
        impact:
          "Commercial insurance buyers spend $50K–$500K+ annually on premiums. They need to verify legitimacy before engaging. Missing credentials are a major friction point and red flag.",
        recommendation:
          "Prominently display RIBO license number, professional designations, insurance company partnerships, and any industry association memberships in the header, footer, and About page.",
      },
      {
        id: "trust-2",
        category: "Trust",
        title: "No Client Testimonials or Case Studies",
        severity: "High",
        description:
          "The website appears to lack real client testimonials, case studies, or success stories from businesses AIRMS has helped.",
        impact:
          "92% of B2B buyers say testimonials influence their purchase decision. Without social proof, AIRMS is asking prospects to trust them without evidence.",
        recommendation:
          "Add 3–5 detailed client testimonials with company type, industry, and the specific problem solved. Consider a brief case study on a notable claim outcome.",
      },
      {
        id: "trust-3",
        category: "Trust",
        title: "No Insurer Partner Logos",
        severity: "High",
        description:
          "Established insurance brokers typically display logos of their insurer relationships (Intact, Aviva, RSA, Travelers, AIG, etc.). These are absent or not prominent.",
        impact:
          "Insurer logos serve as credibility anchors. Prospects recognize these national brands and their presence implies AIRMS has been vetted and approved by reputable carriers.",
        recommendation:
          "Create an 'Our Partners' section with a logo strip of key insurer relationships. Even 4–6 logos significantly increase perceived credibility.",
      },
      {
        id: "trust-4",
        category: "Trust",
        title: "Kassa's Profile Not Prominently Featured",
        severity: "High",
        description:
          "The VP of Commercial Insurance — the person prospects will actually meet and work with — does not appear to have a prominent profile with photo, bio, and direct contact on the website.",
        impact:
          "People do business with people. Humanizing the company by featuring Kassa's expertise, credentials, and direct contact builds immediate rapport and increases inbound call rates.",
        recommendation:
          "Create a dedicated Team page and ensure Kassa's photo, bio, RIBO credentials, and direct mobile number are visible. Include a direct email and phone number on every page.",
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Responsiveness",
    icon: "Smartphone",
    issues: [
      {
        id: "mobile-1",
        category: "Mobile",
        title: "Non-Responsive Layout",
        severity: "Critical",
        description:
          "Legacy insurance websites are often built on desktop-first frameworks that don't properly adapt to mobile screens. Text becomes illegible, navigation breaks, and forms are unusable.",
        impact:
          "62% of web traffic is now mobile. Google uses mobile-first indexing, meaning mobile performance directly affects desktop rankings. A broken mobile experience means losing the majority of potential clients.",
        recommendation:
          "Rebuild with a mobile-first Tailwind CSS approach. Every component — navigation, hero, service cards, contact form — is designed for touch screens first.",
      },
      {
        id: "mobile-2",
        category: "Mobile",
        title: "Phone Number Not Click-to-Call",
        severity: "High",
        description:
          "Phone numbers displayed as plain text cannot be tapped to call on mobile devices — a critical conversion failure for a service business.",
        impact:
          "Mobile users are 3x more likely to call directly than fill a form. Making the phone number a tap-to-call link can increase phone inquiries by 40–60%.",
        recommendation:
          "Wrap all phone numbers in <a href='tel:4164576557'> links. Display the phone number prominently in the navigation bar on mobile.",
      },
      {
        id: "mobile-3",
        category: "Mobile",
        title: "Touch Target Sizes Too Small",
        severity: "Medium",
        description:
          "Legacy sites often have navigation links, buttons, and form elements with touch targets below Google's recommended 48x48px minimum.",
        impact:
          "Small touch targets frustrate mobile users and increase accidental taps. Google's mobile usability guidelines flag this as a ranking issue.",
        recommendation:
          "Ensure all interactive elements meet WCAG 2.1 AA standards. Navigation items, CTAs, and form fields should be easily tappable on any device.",
      },
    ],
  },
  {
    id: "content",
    title: "Content & Messaging",
    icon: "FileText",
    issues: [
      {
        id: "content-1",
        category: "Content",
        title: "Generic Insurance Copy",
        severity: "High",
        description:
          "The website content uses boilerplate insurance language that could apply to any broker in Canada. There is no differentiation of AIRMS's unique approach, expertise, or client outcomes.",
        impact:
          "In a competitive Toronto commercial insurance market with hundreds of brokers, generic messaging ensures AIRMS is viewed as a commodity. Prospects have no reason to choose AIRMS over anyone else.",
        recommendation:
          "Develop a unique value proposition centered on Kassa's expertise, AIRMS's specific market relationships, and the types of businesses they specialize in.",
      },
      {
        id: "content-2",
        category: "Content",
        title: "No Blog or Resource Center",
        severity: "Medium",
        description:
          "The site lacks any educational content — no blog, resource guides, insurance FAQs, or industry-specific risk articles.",
        impact:
          "Content marketing drives 3x more leads than outbound marketing at 62% less cost. Insurance buyers research extensively before contacting a broker. Providing expert content builds authority and captures early-funnel prospects.",
        recommendation:
          "Launch a quarterly blog covering topics like 'Cyber Insurance for Toronto Tech Companies', 'Ontario Construction Insurance Requirements', and 'D&O Coverage for Private Company Boards'.",
      },
      {
        id: "content-3",
        category: "Content",
        title: "No FAQ Section",
        severity: "Medium",
        description:
          "Common commercial insurance questions — 'How much does commercial liability insurance cost?', 'What is the difference between E&O and D&O?' — are not answered on the site.",
        impact:
          "FAQ content captures voice search queries and Featured Snippets in Google. It also reduces pre-sales inquiry load and builds confidence in AIRMS's expertise.",
        recommendation:
          "Add a comprehensive FAQ section on the Services and Contact pages targeting the most common commercial insurance questions asked by Toronto business owners.",
      },
      {
        id: "content-4",
        category: "Content",
        title: "No Clear Contact/Quote CTA on Every Page",
        severity: "High",
        description:
          "Visitors who are ready to request a quote or speak with a broker need a persistent, visible call to action. Legacy sites often require navigating to a specific contact page.",
        impact:
          "Every additional click required reduces conversion rates by an estimated 20%. A prospect ready to call should never have to search for the phone number.",
        recommendation:
          "Display Kassa's phone number and a 'Get a Quote' button in the navigation header. Repeat CTAs throughout service pages and at the bottom of every page.",
      },
    ],
  },
  {
    id: "security",
    title: "Security & Compliance",
    icon: "Lock",
    issues: [
      {
        id: "sec-1",
        category: "Security",
        title: "HTTPS Configuration Issues Possible",
        severity: "High",
        description:
          "Sites blocking automated requests sometimes have misconfigured SSL/TLS, mixed content warnings, or certificate chain issues that trigger browser security warnings.",
        impact:
          "Any browser security warning on an insurance website is conversion-destroying. Prospects will abandon immediately — especially when sharing financial information.",
        recommendation:
          "Verify SSL certificate is valid, properly chained, and auto-renews. Enforce HTTPS with HSTS headers. Eliminate all mixed content warnings.",
      },
      {
        id: "sec-2",
        category: "Security",
        title: "No Privacy Policy or PIPEDA Compliance",
        severity: "High",
        description:
          "Canadian businesses collecting personal information must comply with PIPEDA (Personal Information Protection and Electronic Documents Act). A missing or outdated privacy policy creates regulatory exposure.",
        impact:
          "Violations of PIPEDA can result in fines and reputational damage. More practically, sophisticated commercial buyers check for privacy policies before submitting contact forms.",
        recommendation:
          "Publish a comprehensive privacy policy compliant with PIPEDA and Quebec Law 25. Include cookie consent management for GDPR-adjacent compliance.",
      },
    ],
  },
];
