"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { company } from "@/data/company";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
  { href: "/report", label: "Old Site Audit" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white border-b border-gray-100"
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:flex justify-end items-center px-6 py-1.5 text-white text-sm" style={{backgroundColor: "var(--brand)"}}>
        <a
          href={`tel:${company.phone.replace(/-/g, "")}`}
          className="flex items-center gap-2 hover:text-white/80 transition-colors"
        >
          <Phone size={13} />
          <span>{company.phone}</span>
        </a>
        <span className="mx-3 opacity-40">|</span>
        <a
          href={`mailto:${company.email}`}
          className="hover:text-white/80 transition-colors"
        >
          {company.email}
        </a>
      </div>

      {/* Main nav */}
      <nav className="px-6 lg:px-12 py-3.5 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Accelerated Insurance & Risk Management Services"
            width={200}
            height={43}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "text-teal-800 bg-teal-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
            style={{backgroundColor: "var(--brand)"}}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6">
          <ul className="flex flex-col gap-1 mt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    pathname === link.href
                      ? "text-teal-800 bg-teal-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${company.phone.replace(/-/g, "")}`}
              className="flex items-center gap-2 text-brand text-sm"
            >
              <Phone size={14} />
              {company.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center px-5 py-3 text-white text-sm font-semibold rounded-lg"
              style={{backgroundColor: "var(--brand)"}}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
