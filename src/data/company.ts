import type { Stat, CompanyValue } from "@/types";

export const company = {
  name: "AIRMS",
  fullName: "Accelerated Insurance & Risk Management Services",
  tagline: "Protecting What Matters Most",
  description:
    "Accelerated Insurance & Risk Management Services (AIRMS) is a Ontario-based commercial insurance brokerage delivering tailored risk management solutions for businesses across Canada. With deep industry expertise and a client-first philosophy, our licensed brokers protect your business, assets, and future.",
  email: "info@airms.ca",
  phone: "416-457-6557",
  website: "https://airms.ca",
  location: "Hamilton, Ontario, Canada",
  address: "1336 Sandhill Drive, Unit 2, Hamilton, ON L9G4V5",
};

export const stats: Stat[] = [
  { label: "Years of Experience", value: "**", suffix: "" },
  { label: "Clients Protected", value: "**", suffix: "" },
  { label: "Industries Served", value: "**", suffix: "" },
  { label: "Claims Resolved", value: "**", suffix: "" },
];

export const values: CompanyValue[] = [
  {
    title: "Integrity First",
    description:
      "We operate with complete transparency and honesty in every client relationship. Your trust is the foundation of everything we do.",
    icon: "Shield",
  },
  {
    title: "Expert Guidance",
    description:
      "Our licensed brokers bring deep industry knowledge to navigate complex commercial insurance on your behalf.",
    icon: "GraduationCap",
  },
  {
    title: "Client-Centric",
    description:
      "Every policy, every recommendation, every claim is handled with your best interests at the center of our decisions.",
    icon: "Users",
  },
  {
    title: "Proactive Protection",
    description:
      "We identify your exposures before they become costly claims — not after. That's the AIRMS difference.",
    icon: "TrendingUp",
  },
];
