import BoxLink, { BoxLinkProps } from "@/components/boxLink";
import Image from "next/image";

const homeLinks: BoxLinkProps[] = [
  {
    href: "https://techwriterkoduje.pl",
    external: true,
    label: "Podcast",
    description:
      "A podcast (in Polish) which I run with my friend, Michał Skowron",
  },
  {
    href: "https://techwriter.pl",
    external: true,
    label: "Blog",
    description:
      "The blog in the Polish tech writing space which I co-run with an amazing group of talented individuals",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/k-logo-black.png"
          alt="Kowaluk Logo"
          width={180}
          height={180}
          priority
        />
      </div>
      <h1>Paweł Kowaluk</h1>
      <div className="flex gap-12 flex-wrap pt-12 pb-12">
        {homeLinks.map((linkProps) => (
          <BoxLink {...linkProps} key={linkProps.href} />
        ))}
      </div>
    </div>
  );
}
