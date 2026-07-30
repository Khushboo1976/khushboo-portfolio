export interface Activity {
  title: string;
  href?: string;
}

export interface Education {
  id: number;
  type: "school" | "college";
  icon: string;

  institute: string;
  board: string;

  degree?: string;

  duration: string;

  scoreLabel: string;
  score: string;

  status?: string;

  highlights: string[];

  activities: Activity[];
}