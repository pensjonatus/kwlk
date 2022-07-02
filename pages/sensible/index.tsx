import styles from "./sensible.module.css";
import Layout from "../../components/layout";
import Store from "../../components/store";
import { getImagePaths } from "../../lib/products";
import { GetStaticProps } from "next/types";

type SensibleProps = {
  allImages: string[];
};

export default function Sensible({ allImages }: SensibleProps) {
  console.log("ALL IMAGES IN THE PAGE COMPONENT", allImages);

  return (
    <Layout
      title="Rozważna konsumpcja"
      description="Interaktywny plakat na temat rozważnej konsumpcji"
    >
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <h1 className={styles.heading}>Rozważna konsumpcja</h1>
          {allImages && <Store images={allImages} />}
          <div className={styles.description}>
            Zwiększa zadowolenie klienta i maksymalizuje zwrot z wydanych
            środków
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allImages = getImagePaths();
  return {
    props: {
      allImages: allImages,
    },
  };
};