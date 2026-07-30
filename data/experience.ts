import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "edunet",

    company: "Edunet Foundation",

    role: "AI / ML Intern",

    duration: "Jan 2025 – Feb 2025",

    timeline: "January 2025",

    location: "India",

    companyLogo: "/companies/edunet-foundation-logo.svg",

    certificate: "/certificates/internships/edunet.jpeg",

    accent: "#0EA5E9",

    aicte: true,

    stipend: false,

    technologies: [
      "Python",
      "Machine Learning",
      "SQL",
      "Scikit-learn",
    ],

    highlights: [
      "Built an end-to-end spam detection pipeline using Python and Scikit-learn.",
      "Performed preprocessing, feature engineering and model evaluation.",
      "Validated datasets using SQL.",
      "Evaluated models using Precision, Recall, F1-score and Confusion Matrix.",
    ],
  },

  {
    id: "ibm",

    company: "IBM SkillsBuild",

    role: "Generative AI Intern",

    duration: "Jul 2025 – Aug 2025",

    timeline: "July 2025",

    location: "Delhi, India",

    companyLogo: "/companies/ibm.svg",

    certificate: "/certificates/internships/ibm.jpeg",

    accent: "#1261FE",

    aicte: false,

    stipend: true,

    technologies: [
      "Python",
      "Google Gemini API",
      "LLMs",
      "Prompt Engineering",
      "Git",
    ],

    highlights: [
      "Developed an AI-powered Image Caption Generator using Google Gemini API.",
      "Explored Large Language Models and Prompt Engineering.",
      "Integrated AI APIs into a production-ready Python application.",
      "Completed a stipend-supported industry internship under IBM SkillsBuild.",
    ],
  },

  {
    id: "synkoc",

    company: "Synkoc IT Services",

    role: "AI / ML Intern",

    duration: "May 2026 – Jun 2026",

    timeline: "May 2026",

    location: "New Delhi",

    companyLogo: "/companies/synkoc-logo.svg",

    certificate: "/certificates/internships/synkoc.png",

    lor: "/certificates/internships/synkoc-lor.png",

    accent: "#8B5CF6",

    aicte: true,

    stipend: false,

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
    ],

    highlights: [
      "Completed a 6-week AICTE-approved AI & Machine Learning Internship.",
      "Developed Credit Card Fraud Detection and Customer Segmentation projects.",
      "Applied feature engineering, model evaluation and visualization techniques.",
      "Worked under continuous mentor guidance on industry-oriented assignments.",
    ],
  },

  {
    id: "codec",

    company: "Codec Technologies",

    role: "Data Analytics Intern",

    duration: "Jun 2026",

    timeline: "June 2026",

    location: "New Delhi",

    companyLogo: "/companies/codec-technologies-logo.svg",

    certificate: "/certificates/internships/codect.jpeg",

    lor: "/certificates/internships/codec-lor.jpeg",

    accent: "#F97316",

    aicte: true,

    stipend: false,

    technologies: [
      "Python",
      "SQL",
      "Pandas",
      "Scikit-learn",
      "Data Analytics",
    ],

    highlights: [
      "Developed Customer Churn Prediction and Employee Attrition Analysis models.",
      "Performed EDA, preprocessing and predictive analytics.",
      "Built analytical reports supporting data-driven decision making.",
      "Completed a project-based AICTE-approved Data Analytics Internship.",
    ],
  },
];