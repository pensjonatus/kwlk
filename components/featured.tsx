import { fightDescription } from "../pages/fight/fight";
import { harmoniceDescription } from "../pages/harmonica/harmonica";
import { retirementDescription } from "../pages/retirement/retirement";
import { sensibleDescription } from "../pages/sensible";
import { whichDescription } from "../pages/which/which";

type Feature = {
  title: string;
  description: React.ReactNode;
  link: string;
};

export const featured: Feature[] = [
  {
    title: "Ile do emerytury",
    description: <>{retirementDescription}</>,
    link: "/retirement",
  },
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
  {
    title: "Którym jesteś człowiekiem? 🤔",
    description: <>{whichDescription}</>,
    link: "/which",
  },
];
