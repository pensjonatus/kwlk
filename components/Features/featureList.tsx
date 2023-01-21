import { eveningDescription } from "../../pages/evening";
import { retirementDescription } from "../../pages/retirement/retirement";
import { soapDescription } from "../../pages/soap";
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
    description: <>{eveningDescription}</>,
    image: require("../Evening/evening.png"),
    link: "/evening",
    alt: "widok świetlonego okna wieczorem",
  },
  {
    title: "Mydło",
    description: <>{soapDescription}</>,
    image: require("./img/soap.png"),
    link: "/soap",
    alt: "logo soap",
  },
  {
    title: "Na razie nic 3",
    description: <>Ta treść pewnie będzie kiedyś dostępna</>,
    image: require("./img/placeholder.png"),
    link: "/",
    alt: "pl 3",
  },
];
