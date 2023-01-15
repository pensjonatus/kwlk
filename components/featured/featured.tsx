import { fightDescription } from "../../pages/fight/fight";
import { retirementDescription } from "../../pages/retirement/retirement";
import { sensibleDescription } from "../../pages/sensible";
import { whichDescription } from "../../pages/which/which";

export type Feature = {
  title: string;
  description: React.ReactNode;
  link: string;
  image: string;
  alt: string;
};

export const featured: Feature[] = [
  {
    title: "Ile do emerytury",
    description: <>{retirementDescription}</>,
    link: "/retirement",
    image: require("./img/vlad-sargu-ItphH2lGzuI-unsplash.jpg").default,
    alt: "Photo by Vlad Sargu on Unsplash",
  },
  {
    title: "Rozważna konsumpcja",
    description: <>{sensibleDescription}</>,
    link: "/sensible",
    image: require("./img/heidi-fin-2TLREZi7BUg-unsplash.jpg").default,
    alt: "Photo by Heidi Fin on Unsplash",
  },
  {
    title: "Walcz z systemem!",
    description: <>{fightDescription}</>,
    link: "/fight",
    image: require("./img/jonathan-harrison-G4UAlDJeJFk-unsplash.jpg").default,
    alt: "Photo by Jonathan Harrison on Unsplash",
  },
  {
    title: "Którym jesteś człowiekiem? 🤔",
    description: <>{whichDescription}</>,
    link: "/which",
    image: require("./img/ryoji-iwata-IBaVuZsJJTo-unsplash.jpg").default,
    alt: "Photo by Ryoji Iwata on Unsplash",
  },
];
