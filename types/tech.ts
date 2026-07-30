import { IconType } from "react-icons";

export interface Technology {
  name: string;
  icon: IconType;
}

export interface TechCategory {
  id: string;
  title: string;
  subtitle: string;
  accent: string;
  technologies: Technology[];
}