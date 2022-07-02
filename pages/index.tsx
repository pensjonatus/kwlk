import Link from "next/link";
import Layout from "../components/layout";
import Sensible from "./sensible";

export default function Home() {
  return (
    <Layout
      title="Rozważna konsumpcja"
      description="Interaktywny plakat na temat rozważnej konsumpcji"
    >
      <Link href="/sensible">
        <a>Rozważna konsumpcja</a>
      </Link>
    </Layout>
  );
}
