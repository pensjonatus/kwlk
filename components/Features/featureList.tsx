import { retirementDescription } from "../../pages/retirement/retirement";
import { whichDescription } from "../../pages/which/which";

export type Feature = {
  title: string;
  description: React.ReactNode;
  link: string;
  image: string;
  alt: string;
};

export const featureList: Feature[] = [
  {
    title: "Ile do emerytury",
    description: <>{retirementDescription}</>,
    link: "/retirement",
    image: require("./img/retirement.jpg").default,
    alt: "Photo by Vlad Sargu on Unsplash",
  },
  {
    title: "Którym jesteś człowiekiem? 🤔",
    description: <>{whichDescription}</>,
    link: "/which",
    image: require("./img/people.jpg").default,
    alt: "Photo by Ryoji Iwata on Unsplash",
  },
  {
    title: "Wieczór",
    description: <>Wieczorem jest spokojnie i cicho.</>,
    image: require("../Evening/evening.png"),
    link: "/evening",
    alt: "pl 1",
  },
  {
    title: "Na razie nic 2",
    description: <>Ta treść też może będzie wkrótce dostępna</>,
    image: require("./img/placeholder.png"),
    link: "/",
    alt: "pl 2",
  },
  {
    title: "Na razie nic 3",
    description: <>Ta treść pewnie będzie kiedyś dostępna</>,
    image: require("./img/placeholder.png"),
    link: "/",
    alt: "pl 3",
  },
];
