import { Project, ProjectCategory } from "@/types/project";

import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCode,
} from "react-icons/fa";

import {
  SiFastapi,
  SiFlask,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiStreamlit,
  SiJupyter,
  SiGoogle,
} from "react-icons/si";

/* ===========================================================
   FILTERS
=========================================================== */

export const FILTERS = [
  {
    id: "featured",
    label: "Featured",
    emoji: "⭐",
  },
  {
    id: "ai",
    label: "AI & GenAI",
    emoji: "🤖",
  },
  {
    id: "analytics",
    label: "Data Analytics",
    emoji: "📊",
  },
  {
    id: "ml",
    label: "Machine Learning",
    emoji: "🧠",
  },
  {
    id: "social",
    label: "Social Impact",
    emoji: "🌍",
  },
  {
    id: "fullstack",
    label: "Full Stack",
    emoji: "🌐",
  },
  {
    id: "academic",
    label: "Academic",
    emoji: "🎓",
  },
  {
    id: "mini",
    label: "Mini Projects",
    emoji: "⚡",
  },
] as const;

/* ===========================================================
   PROJECTS
=========================================================== */

export const PROJECTS: Project[] = [

/* ========================================================================
   GREENPOINTS 2.0
======================================================================== */

{
    id: "greenpoints",

    title: "GreenPoints 2.0",

    shortDescription:
        "AI-powered eco reward platform that encourages sustainable activities through gamification, community engagement, and intelligent recommendations.",

    image: "/images/projects/sustainability/hero.png",

    badge: "Social Impact",

    badgeColor: "#22c55e",

    featured: true,

    categories: [
        "featured",
        "ai",
        "social",
        "fullstack",
    ] as ProjectCategory[],

    technologies: [

        { name: "React", icon: FaReact },

        { name: "FastAPI", icon: SiFastapi },

        { name: "Python", icon: FaPython },

        { name: "MySQL", icon: SiMysql },

    ],

    details: {

        problem:
            "People often perform eco-friendly activities but receive little recognition or motivation to continue contributing consistently.",

        solution:
            "Developed an AI-enabled reward platform where users complete sustainability challenges, upload proof, earn GreenPoints, and receive intelligent recommendations.",

        impact:
            "Encourages environmental awareness while building long-term community participation through gamification.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Green-Points-2.o",

        live: "",

    },

},

/* ========================================================================
   AWAAZIFY
======================================================================== */

{

    id: "awaazify",

    title: "Awaazify",

    shortDescription:
        "Community-driven civic engagement platform enabling citizens to raise issues, gain support, and encourage authorities to take action.",

    image: "/images/projects/education/hero.png",

    badge: "Featured",

    badgeColor: "#0ea5e9",

    featured: true,

    categories: [

        "featured",

        "social",

        "fullstack",

    ] as ProjectCategory[],

    technologies: [

        { name: "Next.js", icon: SiNextdotjs },

        { name: "TypeScript", icon: SiTypescript },

        { name: "React", icon: FaReact },

        { name: "Firebase", icon: SiFirebase },

    ],

    details: {

        problem:
            "Public concerns often go unheard because there is no centralized community-driven platform to amplify issues.",

        solution:
            "Created a digital public grievance platform where community votes determine issue visibility, helping concerns reach the right audience.",

        impact:
            "Promotes civic participation, transparency, and stronger collaboration between citizens and authorities.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Awaazify--Raise-your-Voice",

        live: "",

    },

},

/* ========================================================================
   AUTONOMOUS AGENT
======================================================================== */

{

    id: "autonomous-agent",

    title: "Autonomous Agent",

    shortDescription:
        "Agentic AI system that automatically processes customer support tickets using intelligent workflows and decision-making.",

    image: "/images/projects/ai-ml/hero.png",

    badge: "AI",

    badgeColor: "#8b5cf6",

    featured: true,

    categories: [

        "featured",

        "ai",

        "fullstack",

    ] as ProjectCategory[],

    technologies: [

        { name: "Python", icon: FaPython },

        { name: "FastAPI", icon: SiFastapi },

        { name: "Flask", icon: SiFlask },

    ],

    details: {

        problem:
            "Manual customer support workflows increase response time and operational costs.",

        solution:
            "Designed an autonomous AI pipeline capable of classifying tickets, retrieving customer information, making decisions, and generating automated responses.",

        impact:
            "Reduces manual effort while improving customer support efficiency and response speed.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Autonomous-Agent",

        live: "https://autonomous-agent-swis.onrender.com/",

    },

},

/* ========================================================================
   AUSHAD.AI
======================================================================== */

{

    id: "aushad-ai",

    title: "Aushad.AI",

    shortDescription:
        "Healthcare intelligence platform focused on preventive wellness through AI-driven recommendations and personalized guidance.",

    image: "/images/projects/healthcare/hero.png",

    badge: "Healthcare AI",

    badgeColor: "#ef4444",

    featured: true,

    categories: [

        "featured",

        "ai",

        "social",

    ] as ProjectCategory[],

    technologies: [

        { name: "React", icon: FaReact },

        { name: "Python", icon: FaPython },

        { name: "FastAPI", icon: SiFastapi },

    ],

    details: {

        problem:
            "Healthcare systems primarily focus on treatment rather than preventive wellness and personalized guidance.",

        solution:
            "Developed an AI-assisted healthcare platform that provides intelligent recommendations and proactive wellness support.",

        impact:
            "Encourages preventive healthcare while making personalized assistance more accessible.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Aushad.Ai",

        live: "",

    },

},

/* ========================================================================
   CREDIT CARD FRAUD DETECTION
======================================================================== */

{

    id: "credit-card-fraud",

    title: "Credit Card Fraud Detection",

    shortDescription:
        "End-to-end Machine Learning system for identifying fraudulent financial transactions using advanced classification models.",

    image: "/images/projects/data-analytics/hero.png",

    badge: "Machine Learning",

    badgeColor: "#a855f7",

    featured: true,

    categories: [

        "featured",

        "analytics",

        "ml",

    ] as ProjectCategory[],

    technologies: [

        { name: "Python", icon: FaPython },

        { name: "Pandas", icon: SiPandas },

        { name: "NumPy", icon: SiNumpy },

        { name: "Scikit Learn", icon: SiScikitlearn },

    ],

    details: {

        problem:
            "Financial fraud causes significant monetary losses and requires accurate real-time detection.",

        solution:
            "Implemented multiple machine learning models including Random Forest, Logistic Regression, and XGBoost with SMOTE balancing techniques.",

        impact:
            "Improves fraud detection accuracy while reducing false positives for financial institutions.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Credit-Card-Fraud-Detection",

        live: "",

    },

},
/* ========================================================================
   CUSTOMER CHURN PREDICTION
======================================================================== */

{

    id: "customer-churn",

    title: "CUSTOMER CHURN PREDICTION",

    shortDescription:
        "End-to-end machine learning solution that predicts customer churn using EDA, feature engineering, and classification models.",

    image: "/images/projects/data-analytics/hero.png",

    badge: "Data Analytics",

    badgeColor: "#06b6d4",

    featured: false,

    categories: [

        "analytics",

        "ml",

    ] as ProjectCategory[],

    technologies: [

        { name: "Python", icon: FaPython },

        { name: "Pandas", icon: SiPandas },

        { name: "NumPy", icon: SiNumpy },

        { name: "Scikit Learn", icon: SiScikitlearn },

    ],

    details: {

        problem:
            "Telecom companies lose revenue when customers leave without identifying the warning signs.",

        solution:
            "Performed data cleaning, exploratory analysis, feature engineering, and trained Logistic Regression, Decision Tree, and Random Forest models.",

        impact:
            "Helps organizations identify customers likely to churn so retention strategies can be applied early.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Customer-Churn-Prediction-and-Analysis",

        live: "",

    },

},

/* ========================================================================
   CUSTOMER SEGMENTATION
======================================================================== */

{

    id: "customer-segmentation",

    title: "Customer Segmentation System",

    shortDescription:
        "Customer segmentation using RFM Analysis, PCA visualization, and K-Means clustering for business intelligence.",

    image: "/images/projects/ai-ml/hero.png",

    badge: "Machine Learning",

    badgeColor: "#3b82f6",

    featured: false,

    categories: [

        "analytics",

        "ml",

    ] as ProjectCategory[],

    technologies: [

        { name: "Python", icon: FaPython },

        { name: "Pandas", icon: SiPandas },

        { name: "NumPy", icon: SiNumpy },

        { name: "Scikit Learn", icon: SiScikitlearn },

    ],

    details: {

        problem:
            "Businesses struggle to identify valuable customer groups and personalize marketing campaigns.",

        solution:
            "Applied RFM analysis with K-Means clustering and PCA visualization to discover meaningful customer segments.",

        impact:
            "Supports data-driven marketing decisions and improves customer engagement strategies.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Customer-Segmentation-System",

        live: "",

    },

},

/* ========================================================================
   EMPLOYEE ATTRITION ANALYSIS
======================================================================== */

{

    id: "employee-attrition",

    title: "Employee Attrition Analysis",

    shortDescription:
        "Machine Learning project predicting employee attrition through advanced analytics, feature engineering, and model comparison.",

    image: "/images/projects/ai-ml/hero.png",

    badge: "Featured",

    badgeColor: "#22c55e",

    featured: true,

    categories: [

        "featured",

        "analytics",

        "ml",

    ] as ProjectCategory[],

    technologies: [

        { name: "Python", icon: FaPython },

        { name: "Pandas", icon: SiPandas },

        { name: "Scikit Learn", icon: SiScikitlearn },

        { name: "Streamlit", icon: SiStreamlit },

    ],

    details: {

        problem:
            "Organizations often fail to identify employees likely to resign until it is too late.",

        solution:
            "Performed EDA, feature engineering, predictive modeling, hyperparameter tuning, and model comparison using HR datasets.",

        impact:
            "Provides HR teams with predictive insights to improve employee retention and workforce planning.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Employee-Attrition-Analysis",

        live: "",

    },

},

/* ========================================================================
   CAPTION CRAFTER
======================================================================== */

{

    id: "caption-crafter",

    title: "Caption Crafter",

    shortDescription:
        "AI-powered caption generation application that creates engaging captions for images using Generative AI.",

    image: "/images/projects/default/hero.png",

    badge: "GenAI",

    badgeColor: "#f97316",

    featured: false,

    categories: [

        "ai",

    ] as ProjectCategory[],

    technologies: [

        { name: "Python", icon: FaPython },

        { name: "Flask", icon: SiFlask },

        { name: "Google AI", icon: SiGoogle },

    ],

    details: {

        problem:
            "Creating creative captions manually for images is time-consuming and inconsistent.",

        solution:
            "Built an AI-powered application that automatically generates meaningful captions from uploaded images.",

        impact:
            "Improves content creation productivity for creators and social media users.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Caption-Crafter",

        live: "",

    },

},

/* ========================================================================
   SPIRITUAL JARVIS
======================================================================== */

{

    id: "spiritual-jarvis",

    title: "Spiritual Jarvis",

    shortDescription:
        "AI-powered spiritual assistant that retrieves relevant Bhagavad Gita and Yoga Sutra wisdom using LLMs and information retrieval.",

    image: "/images/projects/default/hero.png",

    badge: "AI Assistant",

    badgeColor: "#ec4899",

    featured: false,

    categories: [

        "ai",

    ] as ProjectCategory[],

    technologies: [

        { name: "Python", icon: FaPython },

        { name: "Google AI", icon: SiGoogle },

        { name: "FastAPI", icon: SiFastapi },

    ],

    details: {

        problem:
            "People often seek meaningful spiritual guidance but struggle to find relevant teachings quickly.",

        solution:
            "Designed an AI assistant that retrieves and presents relevant verses using LLMs combined with information retrieval techniques.",

        impact:
            "Makes ancient spiritual knowledge more accessible through conversational AI.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Spiritual-Jarvis",

        live: "",

    },

},
/* ========================================================================
   PREDICTION OF SPAM SMS
======================================================================== */

{

    id: "prediction-spam-sms",

    title: "Prediction of Spam SMS",

    shortDescription:
        "Machine Learning project for classifying SMS messages as spam or legitimate using NLP and text classification techniques.",

    image: "/images/projects/data-analytics/hero.png",

    badge: "Academic",

    badgeColor: "#0ea5e9",

    featured: false,

    categories: [

        "academic",

        "ml",

        "ai",

    ] as ProjectCategory[],

    technologies: [

        { name: "Python", icon: FaPython },

        { name: "Jupyter", icon: SiJupyter },

        { name: "Pandas", icon: SiPandas },

        { name: "Scikit Learn", icon: SiScikitlearn },

    ],

    details: {

        problem:
            "Spam SMS messages reduce communication reliability and expose users to phishing attacks.",

        solution:
            "Applied Natural Language Processing and supervised machine learning algorithms to classify SMS messages accurately.",

        impact:
            "Improves user safety by automatically filtering unwanted spam messages.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Prediction-of-Spam-SMS",
        live: "",

    },

},

/* ========================================================================
   REBLOOM
======================================================================== */

{

    id: "rebloom",

    title: "REBLOOM",

    shortDescription:
        "Community platform promoting meaningful experiences, collaboration, and sustainable personal growth.",

    image: "/images/projects/sustainability/hero.png",

    badge: "Full Stack",

    badgeColor: "#10b981",

    featured: false,

    categories: [

        "social",

        "fullstack",

    ] as ProjectCategory[],

    technologies: [

        { name: "Next.js", icon: SiNextdotjs },

        { name: "React", icon: FaReact },

        { name: "TypeScript", icon: SiTypescript },

        { name: "Tailwind", icon: SiTailwindcss },

    ],

    details: {

        problem:
            "People often struggle to discover meaningful learning resources and collaborative opportunities.",

        solution:
            "Designed a modern web platform connecting users with personalized experiences and valuable community resources.",

        impact:
            "Encourages continuous learning, collaboration, and sustainable engagement.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/REBLOOM",

        live: "",

    },

},

/* ========================================================================
   TEENURE
======================================================================== */

{

    id: "teenure",

    title: "Teenure",

    shortDescription:
        "AI-powered career guidance platform helping students discover opportunities, mentors, and career paths.",

    image: "/images/projects/education/hero.png",

    badge: "Full Stack",

    badgeColor: "#6366f1",

    featured: false,

    categories: [

        "fullstack",

    ] as ProjectCategory[],

    technologies: [

        { name: "React", icon: FaReact },

        { name: "Next.js", icon: SiNextdotjs },

        { name: "TypeScript", icon: SiTypescript },

        { name: "Firebase", icon: SiFirebase },

    ],

    details: {

        problem:
            "Students often lack proper career guidance and personalized mentorship opportunities.",

        solution:
            "Developed a web platform that connects students with mentors and AI-driven career recommendations.",

        impact:
            "Helps students make informed academic and career decisions.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Teenure",

        live: "",

    },

},

/* ========================================================================
   SOS HOSPITAL MANAGEMENT SYSTEM
======================================================================== */

{

    id: "sos-hospital",

    title: "SOS Hospital Management System",

    shortDescription:
        "Desktop-based hospital management system developed using Python, Tkinter, SQL, and Twilio integration.",

    image: "/images/projects/healthcare/hero.png",

    badge: "Academic",

    badgeColor: "#ef4444",

    featured: false,

    categories: [

        "academic",

        "fullstack",

    ] as ProjectCategory[],

    technologies: [

        { name: "Python", icon: FaPython },

        { name: "MySQL", icon: SiMysql },

    ],

    details: {

        problem:
            "Hospitals require efficient systems to manage patient records and emergency communication.",

        solution:
            "Developed a desktop application integrating patient management, database storage, and Twilio-based notifications.",

        impact:
            "Simplifies hospital operations while improving communication and record management.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/SOS-hospital-management-System",

        live: "",

    },

},
/* ========================================================================
   SALESFORCE WEBSITE FRONTEND
======================================================================== */

{

    id: "salesforce-website",

    title: "Salesforce Website Frontend",

    shortDescription:
        "Responsive frontend inspired by Salesforce, showcasing modern UI/UX principles, reusable components, and responsive layouts.",

    image: "/images/projects/web/hero.png",

    badge: "Frontend",

    badgeColor: "#00A1E0",

    featured: false,

    categories: [

        "academic",

        "fullstack",

    ] as ProjectCategory[],

    technologies: [

        { name: "React", icon: FaReact },

        { name: "HTML5", icon: FaHtml5 },

        { name: "CSS3", icon: FaCss3Alt },

        { name: "JavaScript", icon: FaJs },

    ],

    details: {

        problem:
            "Understanding enterprise-grade frontend architecture requires practical implementation.",

        solution:
            "Recreated a Salesforce-inspired responsive interface using reusable React components and modern UI design principles.",

        impact:
            "Strengthened frontend development skills while demonstrating responsive web design practices.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Salesforce-Website-Frontend",

        live: "",

    },

},

/* ========================================================================
   WEB PROFILE
======================================================================== */

{

    id: "web-profile",

    title: "Web Profile",

    shortDescription:
        "Personal portfolio website showcasing projects, achievements, skills, certifications, and professional journey.",

    image: "/images/projects/web/hero.png",

    badge: "Portfolio",

    badgeColor: "#6366F1",

    featured: false,

    categories: [

        "fullstack",

    ] as ProjectCategory[],

    technologies: [

        { name: "Next.js", icon: SiNextdotjs },

        { name: "React", icon: FaReact },

        { name: "Tailwind CSS", icon: SiTailwindcss },

        { name: "TypeScript", icon: SiTypescript },

    ],

    details: {

        problem:
            "Recruiters need a centralized platform to explore projects, skills, and experience.",

        solution:
            "Developed a responsive portfolio website with animations, project showcases, certifications, and interactive sections.",

        impact:
            "Creates a professional online presence and improves visibility for internships and full-time opportunities.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Web-Profile",

        live: "",

    },

},

/* ========================================================================
   FUN WEB DESIGNS
======================================================================== */

{

    id: "fun-web-designs",

    title: "Fun Web Designs",

    shortDescription:
        "A collection of creative frontend experiments featuring modern animations, layouts, hover effects, and UI concepts.",

    image: "/images/projects/web/hero.png",

    badge: "UI",

    badgeColor: "#F59E0B",

    featured: false,

    categories: [

        "mini",

    ] as ProjectCategory[],

    technologies: [

        { name: "HTML5", icon: FaHtml5 },

        { name: "CSS3", icon: FaCss3Alt },

        { name: "JavaScript", icon: FaJs },

    ],

    details: {

        problem:
            "Learning frontend design requires experimenting with layouts and animations beyond tutorials.",

        solution:
            "Created multiple interactive UI concepts, transitions, animations, and responsive webpage designs.",

        impact:
            "Improved UI creativity and frontend development skills through practical experimentation.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Fun-Web-designs",

        live: "",

    },

},

/* ========================================================================
   CARD GAME
======================================================================== */

{

    id: "card-game",

    title: "Card Game",

    shortDescription:
        "Interactive browser-based card matching game demonstrating JavaScript logic, animations, and DOM manipulation.",

    image: "/images/projects/web/hero.png",

    badge: "Mini Project",

    badgeColor: "#EC4899",

    featured: false,

    categories: [

        "mini",

    ] as ProjectCategory[],

    technologies: [

        { name: "HTML5", icon: FaHtml5 },

        { name: "CSS3", icon: FaCss3Alt },

        { name: "JavaScript", icon: FaJs },

    ],

    details: {

        problem:
            "Create an engaging browser game to practice JavaScript fundamentals.",

        solution:
            "Built a responsive memory card game with animations, score tracking, and interactive gameplay.",

        impact:
            "Strengthened JavaScript logic, DOM manipulation, and event-handling skills.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Card-Game",

        live: "",

    },

},

/* ========================================================================
   SHAPES GAME
======================================================================== */

{

    id: "shapes-game",

    title: "Shapes Game",

    shortDescription:
        "Educational browser game focused on recognizing geometric shapes through interactive gameplay and animations.",

    image: "/images/projects/web/hero.png",

    badge: "Mini Project",

    badgeColor: "#22C55E",

    featured: false,

    categories: [

        "mini",

    ] as ProjectCategory[],

    technologies: [

        { name: "HTML5", icon: FaHtml5 },

        { name: "CSS3", icon: FaCss3Alt },

        { name: "JavaScript", icon: FaJs },

    ],

    details: {

        problem:
            "Children learn better through interactive educational experiences rather than static content.",

        solution:
            "Designed an educational web game where users identify and interact with geometric shapes.",

        impact:
            "Demonstrates game development concepts while promoting engaging educational experiences.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Shapes-Game",

        live: "",

    },

},
/* ========================================================================
   TIC TAC TOE
======================================================================== */

{

    id: "tic-tac-toe",

    title: "Tic Tac Toe",

    shortDescription:
        "Classic browser-based Tic Tac Toe game built using JavaScript with responsive gameplay and interactive UI.",

    image: "/images/projects/upskill/hero.png",

    badge: "Mini Project",

    badgeColor: "#8b5cf6",

    featured: false,

    categories: [

        "mini",

    ] as ProjectCategory[],

    technologies: [

        { name: "HTML5", icon: FaHtml5 },

        { name: "CSS3", icon: FaCss3Alt },

        { name: "JavaScript", icon: FaJs },

    ],

    details: {

        problem:
            "Implement a classic strategy game while learning JavaScript game logic.",

        solution:
            "Built a responsive Tic Tac Toe game with winner detection, draw logic, and restart functionality.",

        impact:
            "Strengthened JavaScript programming fundamentals, event handling, and game state management.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/Tic-Tae-Toe",

        live: "",

    },

},

/* ========================================================================
   C & C++
======================================================================== */

{

    id: "c-cpp",

    title: "C & C++ Programs",

    shortDescription:
        "Collection of C and C++ programs covering data structures, algorithms, OOP concepts, and problem-solving exercises.",

    image: "/images/projects/upskill/hero.png",

    badge: "Programming",

    badgeColor: "#3b82f6",

    featured: false,

    categories: [

        "mini",

    ] as ProjectCategory[],

    technologies: [

        { name: "C", icon: FaCode },

        { name: "C++", icon: FaCode },

    ],

    details: {

        problem:
            "Practice core programming concepts and improve logical thinking through hands-on coding exercises.",

        solution:
            "Implemented numerous C and C++ programs covering loops, arrays, functions, pointers, OOP, and data structures.",

        impact:
            "Built a strong programming foundation useful for interviews and competitive coding.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/C-and-C--",

        live: "",

    },

},

/* ========================================================================
   AFFORDMED TEST
======================================================================== */

{

    id: "affordmed-test",

    title: "AffordMed Technical Assessment",

    shortDescription:
        "Technical assessment project demonstrating frontend development, API integration, clean architecture, and coding best practices.",

    image: "/images/projects/upskill/hero.png",

    badge: "Assessment",

    badgeColor: "#f97316",

    featured: false,

    categories: [

        "mini",

    ] as ProjectCategory[],

    technologies: [

        { name: "React", icon: FaReact },

        { name: "TypeScript", icon: SiTypescript },

        { name: "Node.js", icon: FaNodeJs },

    ],

    details: {

        problem:
            "Complete a real-world technical assessment within a limited time while following coding standards.",

        solution:
            "Developed the required application with reusable components, API integration, responsive layouts, and clean code practices.",

        impact:
            "Demonstrates problem-solving ability, technical proficiency, and readiness for software engineering interviews.",

    },

    links: {

        github:
            "https://github.com/Khushboo1976/18317",

        live: "",

    },

},

];
