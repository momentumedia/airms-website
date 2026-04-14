import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us | AIRMS",
  description:
    "Contact AIRMS to get a commercial insurance quote. Call 416-457-6557 or email info@airms.ca. Serving businesses across the Hamilton, Ontario and Canada.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phone.replace(/-/g, "")}`,
    description: "Call or text during business hours",
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    description: "Response within 1 business day",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "1336 Sandhill Dr, Unit 2, Ancaster, ON",
    href: "https://maps.google.com/?q=1336+Sandhill+Drive+Unit+2+Ancaster+ON+L9G4V5",
    description: "Serving clients across Canada",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri: 9:00 AM – 5:00 PM ET",
    href: null,
    description: "Eastern Time",
  },
];

const faqs = [
  {
    q: "How quickly can I get a commercial insurance quote?",
    a: "For most lines of commercial insurance, we can provide an initial indication within 24–48 hours after receiving basic information about your business. Complex programs may take 3–5 business days.",
  },
  {
    q: "Do I need to come to your office?",
    a: "Not at all. Most of our client consultations happen by phone or video call. We serve businesses across Ontario and Canada — no in-person visit required.",
  },
  {
    q: "What information do I need for a quote?",
    a: "Typically: your business type, revenue, number of employees, the nature of your operations, any prior claims history, and your current coverage (if any). Your broker will guide you through the rest.",
  },
  {
    q: "Can AIRMS review my existing insurance?",
    a: "Absolutely. We regularly review existing programs for clients who feel they may be overpaying or underinsured. There is no cost for this review.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(45,122,110,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="max-w-2xl">
            <p className="text-brand text-sm font-medium uppercase tracking-widest mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Let&apos;s Protect Your Business
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Reach out to our licensed brokers for expert advice and a tailored insurance quote — no automated systems, no runaround.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact info */}
            <div>
              {/* Contact details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div
                      key={detail.label}
                      className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={14} className="text-brand" />
                        <span className="text-gray-500 text-xs uppercase tracking-wider">{detail.label}</span>
                      </div>
                      {detail.href ? (
                        <a href={detail.href} className="text-gray-900 text-sm font-medium hover:text-brand transition-colors block">
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 text-sm font-medium">{detail.value}</p>
                      )}
                      <p className="text-gray-400 text-xs mt-1">{detail.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Map */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.1!2d-79.9960!3d43.2166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b1e7a7a7a7a%3A0x0!2s1336+Sandhill+Dr+Unit+2%2C+Ancaster%2C+ON+L9G+4V5!5e0!3m2!1sen!2sca!4v1"
                  width="100%"
                  height="224"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AIRMS Office Location"
                />
                <div className="px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-brand flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">1336 Sandhill Dr, Unit 2, Ancaster, ON L9G4V5</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=1336+Sandhill+Drive+Unit+2+Ancaster+ON+L9G4V5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand text-xs font-medium hover:text-brand-dark transition-colors flex-shrink-0 ml-2"
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MessageSquare size={18} className="text-brand" />
              <p className="text-brand text-sm font-medium uppercase tracking-widest">FAQs</p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Common Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-gray-900 font-semibold text-sm mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
