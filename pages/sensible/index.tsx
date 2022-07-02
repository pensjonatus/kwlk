import styles from "./sensible.module.css";
import Layout from "../../components/layout";
import Store from "../../components/store";

export default function Sensible() {
  return (
    <Layout
      title="Rozważna konsumpcja"
      description="Interaktywny plakat na temat rozważnej konsumpcji"
    >
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <h1 className={styles.heading}>Rozważna konsumpcja</h1>
          <Store />
          <div className={styles.description}>
            Zwiększa zadowolenie klienta i maksymalizuje zwrot z wydanych
            środków
          </div>
        </div>
      </div>
    </Layout>
  );
}
