"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const serviceOptions = [
  "Commercial General Liability",
  "Commercial Property Insurance",
  "Professional Liability (E&O)",
  "Cyber Liability Insurance",
  "Commercial Auto & Fleet",
  "Directors & Officers (D&O)",
  "Workers Compensation",
  "Commercial Umbrella & Excess",
  "Multiple / Not Sure",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm"
      >
        <div className="w-16 h-16 bg-brand-light border border-brand/30 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-brand" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Received</h3>
        <p className="text-gray-500 leading-relaxed mb-6">
          Thank you for reaching out to AIRMS. A licensed broker will review your inquiry and get back to you
          within one business day. For urgent matters, call{" "}
          <a href="tel:4164576557" className="text-brand font-medium">
            416-457-6557
          </a>{" "}
          directly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2.5 border border-gray-300 text-gray-600 text-sm rounded-lg hover:border-brand/50 hover:text-brand-dark transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  const inputClass =
    "w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-all";

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-2">Request a Quote</h3>
      <p className="text-gray-500 text-sm mb-6">
        Fill out the form below and a licensed broker will respond within one business day.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-600 text-xs mb-1.5 font-medium">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Smith"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-gray-600 text-xs mb-1.5 font-medium">Company Name *</label>
          <input
            type="text"
            name="company"
            required
            placeholder="Acme Corp Inc."
            value={form.company}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-600 text-xs mb-1.5 font-medium">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@company.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-gray-600 text-xs mb-1.5 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="416-555-0100"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 text-xs mb-1.5 font-medium">Insurance Type</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 text-xs mb-1.5 font-medium">Message / Details *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your business, current coverage, and what you're looking for..."
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-semibold rounded-xl transition-all shadow-md"
      >
        {loading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
            />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
