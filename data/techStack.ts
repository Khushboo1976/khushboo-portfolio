import type { TechCategory } from "@/types/tech";

import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiJupyter,
  SiFigma,
} from "react-icons/si";

import { FaJava, FaCode } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export const techStack: TechCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    subtitle: "Building Strong Foundations",
    accent: "from-blue-500 to-cyan-500",

    technologies: [
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "C",
        icon: FaCode,
      },
      {
        name: "C++",
        icon: TbBrandCpp,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
    ],
  },

  {
    id: "fullstack",
    title: "Full Stack Development",
    subtitle: "Building Modern Web Applications",
    accent: "from-cyan-500 to-sky-500",

    technologies: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
      },
      {
        name: "CSS3",
        icon: SiCss,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
    ],
  },

  {
    id: "database",
    title: "Databases",
    subtitle: "SQL & NoSQL Solutions",
    accent: "from-emerald-500 to-green-500",

    technologies: [
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "SQLite",
        icon: SiSqlite,
      },
    ],
  },

  {
    id: "ai",
    title: "AI & Machine Learning",
    subtitle: "Data Driven Intelligence",
    accent: "from-purple-500 to-pink-500",

    technologies: [
      {
        name: "Pandas",
        icon: SiPandas,
      },
      {
        name: "NumPy",
        icon: SiNumpy,
      },
      {
        name: "Scikit-learn",
        icon: SiScikitlearn,
      },
    ],
  },

  {
    id: "tools",
    title: "Developer Tools",
    subtitle: "My Daily Workflow",
    accent: "from-orange-500 to-yellow-500",

    technologies: [
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "VS Code",
        icon: VscVscode,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
      {
        name: "Linux",
        icon: SiLinux,
      },
      {
        name: "Jupyter",
        icon: SiJupyter,
      },
      {
        name: "Figma",
        icon: SiFigma,
      },
    ],
  },
];