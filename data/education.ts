import { Education } from "@/types/education";

export const education: Education[] = [
  {
    id: 1,
    type: "school",
    icon: "🏫",

    institute: "Greenway Modern School",
    board: "CBSE",

    duration: "2010 – 2023",

    scoreLabel: "Academic Performance",
    score: "87% • Class X\n85% • Class XII (PCM + CS)",

    highlights: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
    ],

    activities: [
      {
        title: "NCC Cadet",
        href: "/certificates/achievements/NCC_cert-A.jpeg",
      },
      {
        title: "NCC Camp",
        href: "/certificates/achievements/Ncc_camp.jpeg",
      },
      {
        title: "ATL Innovation Lab",
        href: "/certificates/achievements/Atal-Lab.png",
      },
    ],
  },

  {
    id: 2,
    type: "college",
    icon: "🎓",

    institute: "Dronacharya Group of Institutions",

    board: "Dr. A.P.J. Abdul Kalam Technical University",

    degree: "B.Tech • Computer Science & Information Technology",

    duration: "2023 – June 2027",

    scoreLabel: "Current CGPA",

    score: "8.03 / 10",

    status: "Expected Graduation • June 2027",

    highlights: [
      "Machine Learning",
      "Artificial Intelligence",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Data Structures",
      "Algorithms",
    ],

    activities: [
      {
        title: "AKTU Zonal Basketball Silver Medal",
        href: "/certificates/achievements/BasketBall.jpeg",
      },
      {
        title: "Technical Poster Presentation",
        href: "/certificates/research/Technical_poster.jpeg",
      },
      {
        title: "Quiz Mania Coordinator",
      },
    ],
  },
];