import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/data/company";
import Image from "next/image";

const serviceLinks = [
  { label: "Commercial General Liability", href: "/services#general-liability" },
  { label: "Commercial Property", href: "/services#commercial-property" },
  { label: "Professional Liability (E&O)", href: "/services#professional-liability" },
  { label: "Cyber Liability", href: "/services#cyber-liability" },
  { label: "Commercial Auto & Fleet", href: "/services#commercial-auto" },
  { label: "Directors & Officers", href: "/services#directors-officers" },
];

const quickLinks = [
  { label: "About AIRMS", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Meet the Team", href: "/team" },
  { label: "Contact Us", href: "/contact" },
  { label: "Old Site Audit", href: "/report" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Accelerated Insurance & Risk Management Services"
                width={180}
                height={38}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ontario-based commercial insurance brokerage protecting businesses across Canada with tailored risk management solutions.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${company.phone.replace(/-/g, "")}`}
                className="flex items-center gap-2 text-brand text-sm hover:text-white/80 transition-colors"
              >
                <Phone size={14} />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-brand transition-colors"
              >
                <Mail size={14} />
                {company.email}
              </a>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin size={14} />
                Hamilton, Ontario, Canada
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Our Services</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Get Protected Today</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Speak directly with a licensed broker. Get expert advice and a tailored quote built around your business — no call centres.
            </p>
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 text-white text-sm font-semibold rounded-lg transition-colors"
              style={{backgroundColor: "var(--brand)"}}
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Accelerated Insurance & Risk Management Services. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">A Member of SIB Corp. · Operating as Stoneridge Insurance Brokers · Hamilton, Ontario</p>
        </div>
      </div>
    </footer>
  );
}
