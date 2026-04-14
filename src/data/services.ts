import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "general-liability",
    title: "Commercial General Liability",
    description:
      "Comprehensive protection against third-party bodily injury, property damage, and personal injury claims arising from your business operations.",
    icon: "Shield",
    features: [
      "Bodily injury & property damage coverage",
      "Products & completed operations",
      "Personal & advertising injury",
      "Medical payments",
      "Contractual liability",
      "Limits available — TBD",
    ],
    industries: ["Retail", "Construction", "Hospitality", "Manufacturing", "Services"],
  },
  {
    id: "commercial-property",
    title: "Commercial Property Insurance",
    description:
      "Protect your buildings, equipment, inventory, and business assets against fire, theft, vandalism, and other covered perils.",
    icon: "Building2",
    features: [
      "Building & structure coverage",
      "Business personal property",
      "Business interruption / income",
      "Equipment breakdown",
      "Accounts receivable",
      "Valuable papers & records",
    ],
    industries: ["Real Estate", "Retail", "Manufacturing", "Warehousing", "Hospitality"],
  },
  {
    id: "professional-liability",
    title: "Professional Liability (E&O)",
    description:
      "Errors & Omissions coverage protecting professionals from claims of negligence, mistakes, or failure to deliver promised services.",
    icon: "Briefcase",
    features: [
      "Negligence & errors coverage",
      "Defense costs included",
      "Claims-made & occurrence forms",
      "Retroactive date options",
      "Regulatory investigation coverage",
      "Worldwide coverage available",
    ],
    industries: ["Consulting", "Technology", "Finance", "Legal", "Architecture", "Engineering"],
  },
  {
    id: "cyber-liability",
    title: "Cyber Liability Insurance",
    description:
      "First and third-party cyber coverage protecting your business from data breaches, ransomware attacks, and network security failures.",
    icon: "Lock",
    features: [
      "Data breach response costs",
      "Ransomware & extortion coverage",
      "Business interruption loss",
      "Third-party liability",
      "Regulatory fines & penalties",
      "Crisis management & PR",
    ],
    industries: ["Technology", "Healthcare", "Finance", "Retail", "Professional Services"],
  },
  {
    id: "commercial-auto",
    title: "Commercial Auto & Fleet",
    description:
      "Coverage for company vehicles, hired and non-owned auto, and fleet programs designed for businesses of all sizes.",
    icon: "Truck",
    features: [
      "Liability coverage",
      "Collision & comprehensive",
      "Hired & non-owned auto",
      "Fleet programs",
      "Driver safety programs",
      "Cargo coverage options",
    ],
    industries: ["Transportation", "Logistics", "Construction", "Delivery Services", "Field Services"],
  },
  {
    id: "directors-officers",
    title: "Directors & Officers (D&O)",
    description:
      "Personal liability protection for corporate directors and officers against claims from shareholders, employees, regulators, and competitors.",
    icon: "Users",
    features: [
      "Personal asset protection",
      "Entity coverage options",
      "Employment practices defense",
      "Shareholder derivative suits",
      "Regulatory investigation coverage",
      "Side A, B & C coverage",
    ],
    industries: ["Corporations", "Non-Profits", "Private Equity", "Startups", "Financial Institutions"],
  },
  {
    id: "workers-compensation",
    title: "Workers Compensation",
    description:
      "Protect your employees and your business with comprehensive workers compensation coverage meeting all provincial requirements.",
    icon: "Heart",
    features: [
      "Workplace injury coverage",
      "Disability income replacement",
      "Medical expense coverage",
      "Death benefits",
      "Employer liability",
      "Return-to-work programs",
    ],
    industries: ["Construction", "Manufacturing", "Healthcare", "Retail", "Hospitality"],
  },
  {
    id: "commercial-umbrella",
    title: "Commercial Umbrella & Excess",
    description:
      "Additional layers of liability protection above your primary policies, providing catastrophic loss coverage for large claims.",
    icon: "CloudRain",
    features: [
      "Excess liability coverage",
      "Follows form or standalone",
      "Limits available — TBD",
      "Drop-down coverage",
      "Broad coverage definition",
      "Multiple underlying policies",
    ],
    industries: ["All Industries", "High-Risk Operations", "Large Enterprises"],
  },
];
