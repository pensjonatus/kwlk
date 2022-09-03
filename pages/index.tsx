import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/dom.module.css";
import { featured } from "../components/featured";
import { Card, CardContent, CardActions } from "@mui/material";

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
          <div className={styles.featureList}>
            {featured.map(({ title, description, link }, key) => (
              <Card
                key={key}
                style={{
                  width: 400,
                }}
              >
                <CardContent>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </CardContent>
                <CardActions className={styles.featureActions}>
                  <Link href={link}>
                    <a>Zobacz</a>
                  </Link>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
