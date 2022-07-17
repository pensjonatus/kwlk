import { MutableRefObject, Ref, useRef, useState } from "react";
import Layout from "../../components/layout";
import styles from "./harmonica.module.css";
import Actor from "./actor";
import joziaAvatar from "./img/Josephka.png";

export const harmoniceDescription =
  "Drobna istota próbuje uciec przed wielką istotą. To oś fabuły naszej opowieści i oś fabuły naszego życia.";

export default function Harmonica() {
  const joziaWidth = 200;
  const roomRef: MutableRefObject<HTMLDivElement> = useRef();
  const [joziaTargetX, setJoziaTargetX] = useState(undefined);

  function updateJoziaPosition(event: React.MouseEvent<HTMLDivElement>) {
    const xCoordinate = event.pageX;
    setJoziaTargetX(xCoordinate - joziaWidth / 2);
  }

  return (
    <Layout title="Harmonijka" description={harmoniceDescription}>
      <div
        className={styles.wrapper}
        onClick={updateJoziaPosition}
        ref={roomRef}
      >
        <div className={styles.window} />
        <div className={styles.floor} />
        <div className={styles.ceiling} />
        <Actor
          targetX={joziaTargetX}
          avatar={joziaAvatar}
          className={styles.jozia}
          initialPosition={200}
          width={joziaWidth}
          movementSpeed={3}
          keepInView={true}
          initiallyFacingLeft={false}
        />
      </div>
    </Layout>
  );
}
