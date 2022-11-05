import Layout from "../components/layout";
import styles from "../styles/dom.module.css";
import { featured } from "../components/featured/featured";
import FeatureCard from "../components/featureCard/featureCard";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

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
          <Container>
            <Grid container spacing={2} sx={{ padding: "3rem 0" }}>
              {featured.map((feature, key) => (
                <Grid xs={12} sm={6} md={3} key={key}>
                  <FeatureCard {...feature} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </div>
    </Layout>
  );
}
