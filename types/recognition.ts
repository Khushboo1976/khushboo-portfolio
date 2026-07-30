export type CertificateCategory =
  | "certification"
  | "achievement"
  | "research";

export interface Recognition {
  id: number;
  title: string;
  issuer: string;
  year: string;
  category: CertificateCategory;
  image: string;
  description: string;
  tags: string[];
  featured?: boolean;
}