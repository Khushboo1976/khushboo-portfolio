import {
  UserRound,
  HeartHandshake,
  BriefcaseBusiness,
  Target,
  type LucideIcon,
} from "lucide-react";

export type AccentColor =
  | "blue"
  | "purple"
  | "emerald"
  | "orange";

export interface AboutCardData {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  accent: AccentColor;
  content: {
    heading: string;
    paragraphs: string[];
    highlights: string[];
  };
}

export const aboutCards: AboutCardData[] = [
  {
    id: 1,
    title: "About Me",
    subtitle: "Who I am beyond my resume",
    icon: UserRound,
    accent: "blue",

    content: {
      heading: "A Lifelong Student",
      paragraphs: [
        "Hi, I'm Khushboo Goyal.",

        "If I had to describe myself in one word, it would be Student. To me, being a student is not defined by a classroom, a college, or a degree. It is a mindset built on curiosity, adaptability, and the willingness to learn from every experience.",

        "I believe technology becomes meaningful when it solves real-world problems. Whether I am building software, exploring Artificial Intelligence, analysing data, or conducting research, I approach every opportunity with discipline, creativity, and a commitment to continuous learning.",
      ],

      highlights: [
        "Curious Mindset",
        "Continuous Learning",
        "Problem Solver",
        "Growth Driven",
      ],
    },
  },

  {
    id: 2,
    title: "Background",
    subtitle: "The values that shaped me",
    icon: HeartHandshake,
    accent: "purple",

    content: {
      heading: "My Foundation",

      paragraphs: [
        "I come from a family that values responsibility, perseverance, humility, and integrity. As the eldest daughter of my family, I naturally learned to take initiative, support others, and embrace responsibility with confidence.",

        "My father is a self-employed businessman whose dedication and resilience have inspired my work ethic. My mother is a homemaker whose patience, care, and strength have shaped my values. My younger brother is pursuing a Bachelor of Commerce (Honours), and together we share an environment that encourages learning, mutual respect, and continuous growth.",

        "These experiences continue to influence how I approach teamwork, leadership, and problem solving in both my academic and professional journey.",
      ],

      highlights: [
        "Responsibility",
        "Leadership",
        "Integrity",
        "Family Values",
      ],
    },
  },

  {
    id: 3,
    title: "Current Focus",
    subtitle: "What I'm working on today",
    icon: BriefcaseBusiness,
    accent: "emerald",

    content: {
      heading: "Building & Growing",

      paragraphs: [
        "I am currently building Awaazify, a project focused on solving real-world communication challenges through thoughtful technology and user-centric design.",

        "Alongside development, I continuously strengthen my software engineering and problem-solving abilities through LeetCode, personal projects, and hands-on exploration of Artificial Intelligence, Data Analytics, and modern web technologies.",

        "Every project I undertake is an opportunity to deepen my technical understanding while creating solutions that are practical, scalable, and meaningful.",
      ],

      highlights: [
        "Awaazify",
        "LeetCode",
        "AI & ML",
        "Full Stack",
      ],
    },
  },

  {
    id: 4,
    title: "Aspirations",
    subtitle: "Where I see myself growing",
    icon: Target,
    accent: "orange",

    content: {
      heading: "Looking Ahead",

      paragraphs: [
        "I aspire to build technology that creates meaningful impact while continuously evolving as an engineer, researcher, and lifelong learner.",

        "Beyond technical development, I actively work on improving my analytical thinking, aptitude, communication, and comprehension skills because I believe great engineers combine technical excellence with strong decision-making and collaboration.",

        "My long-term goal is to contribute to products that positively influence people's lives while growing into a technology professional capable of leading innovation with empathy, responsibility, and purpose.",
      ],

      highlights: [
        "Innovation",
        "Leadership",
        "Continuous Growth",
        "Meaningful Impact",
      ],
    },
  },
];