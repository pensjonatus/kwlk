import styles from "./harmonica.module.css";

type WindowProps = {
  magicNumber: number;
};

export default function Window({ magicNumber }: WindowProps) {
  return (
    <div
      className={styles.window}
      key={magicNumber}
      style={{
        left: magicNumber * 1500 + 1000,
      }}
    >
        <div className={styles.windowView}>
          <div className={styles.windowPane} />
        </div>
    </div>
  );
}
