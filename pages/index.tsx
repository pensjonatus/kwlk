import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/dom.module.css";
import { featured } from "./featured";

const pageDescription = "Strona artysty Paweł Kowaluk";

export default function Home() {
  return (
    <Layout title="Dom" description={pageDescription}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h1 className={styles.title}>kwlk</h1>
            <p>{pageDescription}</p>
          </div>
          {featured.map(({ title, description, link }, key) => (
            <section key={key} className={styles.feature}>
              <h2>{title}</h2>
              <p>{description}</p>
              <Link href={link}>
                <a className={styles.featureLink}>Zobacz</a>
              </Link>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
}
