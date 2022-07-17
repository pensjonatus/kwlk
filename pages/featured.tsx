import { fightDescription } from "./fight/fight";
import { harmoniceDescription } from "./harmonica/harmonica";
import { sensibleDescription } from "./sensible";

type Feature = {
  title: string;
  description: React.ReactNode;
  link: string;
};

export const featured: Feature[] = [
  {
    title: "Rozważna konsumpcja",
    description: <>{sensibleDescription}</>,
    link: "/sensible",
  },
  {
    title: "Walcz z systemem!",
    description: <>{fightDescription}</>,
    link: "/fight",
  },
  {
    title: "Harmonijka",
    description: <>{harmoniceDescription}</>,
    link: "/harmonica",
  },
];
