import { fightDescription } from "../pages/fight/fight";
import { josephkaDescription } from "../pages/josephka/josephka";
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
    title: "Józefka",
    description: <>{josephkaDescription}</>,
    link: "/josephka",
  },
];
