export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  industries?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  bio: string;
  expertise: string[];
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

export interface ReportIssue {
  id: string;
  category: string;
  title: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  description: string;
  impact: string;
  recommendation: string;
}

export interface ReportSection {
  id: string;
  title: string;
  icon: string;
  issues: ReportIssue[];
}
