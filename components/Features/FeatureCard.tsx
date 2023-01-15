import Card from "@mui/material/Card";
import { Feature } from "./featureList";
import Image from "next/image";
import Link from "next/link";

type FeatureCardProps = {
  link: Feature["link"];
  alt: Feature["alt"];
  image: Feature["image"];
};

export const cardDiameter = 300;

export default function FeatureCard({ link, alt, image }: FeatureCardProps) {
  return (
    <Link href={link}>
      <Card
        sx={{
          width: cardDiameter,
          height: cardDiameter,
          borderRadius: "50%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src={image}
          width={cardDiameter}
          height={cardDiameter}
          alt={alt}
        />
      </Card>
    </Link>
  );
}
