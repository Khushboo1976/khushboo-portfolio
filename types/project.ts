import { IconType } from "react-icons";

export type ProjectCategory =
  | "featured"
  | "ai"
  | "analytics"
  | "ml"
  | "social"
  | "fullstack"
  | "academic"
  | "mini";

export interface ProjectLink {
  github: string;
  live?: string;
}

export interface Technology {
  name: string;
  icon: IconType;
}

export interface ProjectDetails {
  problem: string;
  solution: string;
  impact: string;
}

export interface Project {
  id: string;

  title: string;

  shortDescription: string;

  image: string;

  badge: string;

  badgeColor: string;

  featured: boolean;

  categories: ProjectCategory[];

  technologies: Technology[];

  details: ProjectDetails;

  links: ProjectLink;
}