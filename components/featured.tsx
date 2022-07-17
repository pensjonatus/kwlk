import { fightDescription } from "../pages/fight/fight";
import { harmoniceDescription } from "../pages/harmonica/harmonica";
import { sensibleDescription } from "../pages/sensible";

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
