import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout title="Dom" description="Strona artysty Paweł Kowaluk">
      <Link href="/sensible">
        <a>Rozważna konsumpcja</a>
      </Link>
    </Layout>
  );
}
