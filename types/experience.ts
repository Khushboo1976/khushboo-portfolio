export interface Experience {
  id: string;

  company: string;
  role: string;

  duration: string;
  timeline: string;
  location: string;

  companyLogo: string;

  certificate: string;
  lor?: string;

  accent: string;

  aicte: boolean;
  stipend?: boolean;

  technologies: string[];

  highlights: string[];
}