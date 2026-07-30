import {
  Award,
  BookOpen,
  Briefcase,
  Code2,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ScrollText,
  Sparkles,
} from "lucide-react";
import { FaLinkedin} from "react-icons/fa";

export const footerData = {
  heading: "Let's Build Something Amazing",

  subtitle:
    "Building scalable software, AI-powered applications, and data-driven solutions with modern technologies.",

  cta: {
    primary: {
      label: "Download Resume",
      href: "/resume/Khushboo_Goyal_Resume.pdf",
    },

    secondary: {
      label: "Let's Connect",
      href: "https://linkedin.com/in/khushboo-goyal-32bab0291",
    },
  },

  columns: [
    {
      title: "Who I Am",

      links: [
        {
          label: "About",
          href: "#about",
          icon: Sparkles,
        },
        {
          label: "Philosophy",
          href: "#philosophy",
          icon: BookOpen,
        },
        {
          label: "Tech Stack",
          href: "#tech-stack",
          icon: Code2,
        },
        {
          label: "Education",
          href: "#education",
          icon: GraduationCap,
        },
      ],
    },

    {
      title: "Explore",

      links: [
        {
          label: "Projects",
          href: "#projects",
          icon: Briefcase,
        },
        {
          label: "Recognition",
          href: "#recognition",
          icon: Award,
        },
        {
          label: "Resume",
          href: "/resume/Khushboo_Goyal_Resume.pdf",
          icon: ScrollText,
        },
        {
          label: "Certifications",
          href: "#recognition",
          icon: Award,
        },
      ],
    },

    {
      title: "Contact",

      links: [
        {
          label: "khushboo12244@gmail.com",
          href: "mailto:khushboo12244@gmail.com",
          icon: Mail,
        },

        {
          label: "+91 9354226150",
          href: "tel:+919354226150",
          icon: Phone,
        },

        {
          label: "WhatsApp",
          href:
            "https://wa.me/919354226150?text=Hi%20Khushboo,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.",
          icon: MessageCircle,
        },

        {
          label: "Delhi, India",
          href: "#",
          icon: MapPin,
        },
      ],
    },

    {
      title: "Connect",

      links: [
        {
          label: "GitHub",
          href: "https://github.com/Khushboo1976",
          icon: GitBranch,
        },

        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/khushboo-goyal-32bab0291",
          icon: FaLinkedin,
        },

        {
          label: "LeetCode",
          href: "https://leetcode.com/u/khushboo_1976/",
          icon: Code2,
        },

        {
          label: "Email",
          href: "mailto:khushboo12244@gmail.com",
          icon: Mail,
        },
      ],
    },
  ],
};