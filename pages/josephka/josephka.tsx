import Head from "next/head";
import Engine from "../../components/engine";

export const josephkaDescription =
  "Znaleźliście się kiedyś w zupełnie nowym, nieznanym świecie, który rządził się niezrozumiałymi regułami? Tak, przecież każdy z nas tak zaczynał.";

export default function Josephka() {
  return (
    <>
      <Head>
        <title>Józefka!</title>
        <meta name="description" content={josephkaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Engine />
    </>
  );
}
