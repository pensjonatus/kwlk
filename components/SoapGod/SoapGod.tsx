import Image from "next/image";
import soapyPhoto from "./soap-god.jpg";

export default function SoapGod() {
  return (
    <Image
      src={soapyPhoto}
      alt="Człowiek, który się cieszy, że jest na konferencji. Ale nie wiemy o nim nic a nic."
      fill
    />
  );
}
