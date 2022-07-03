import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/dom.module.css";

export default function Home() {
  return (
    <Layout title="Dom" description="Strona artysty Paweł Kowaluk">
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h1 className={styles.title}>kwlk</h1>
            <p>Strona artysty Paweł Kowaluk</p>
          </div>
          <Link href="/sensible">
            <a>Rozważna konsumpcja</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
