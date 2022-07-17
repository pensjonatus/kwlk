import { MutableRefObject, useRef, useState } from "react";
import Layout from "../../components/layout";
import styles from "./harmonica.module.css";
import Actor from "./actor";
import joziaAvatar from "./img/Josephka.png";
import grandpaAvatar from "./img/GrandpaMark.png";
import plant from "./img/plant.png";
import MusicBox from "../../components/musicBox";
import Image from "next/image";
import Window from "./window";

export const harmoniceDescription =
  "Drobna istota próbuje uciec przed wielką istotą. To oś fabuły naszej opowieści i oś fabuły naszego życia.";

export default function Harmonica() {
  const joziaWidth = 300;
  const roomRef: MutableRefObject<HTMLDivElement> = useRef();
  const [joziaTargetX, setJoziaTargetX] = useState(undefined);

  function updateJoziaPosition(event: React.MouseEvent<HTMLDivElement>) {
    const xCoordinate = event.pageX;
    setJoziaTargetX(xCoordinate - joziaWidth / 2);
  }

  return (
    <Layout title="Harmonijka" description={harmoniceDescription}>
      <MusicBox
        audioFilePath="/sfx/symphony.mp3"
        autoPlay={false}
        loop={true}
        className={styles.musicBoxButton}
      />
      <div className={styles.wrapper}>
        <div
          className={styles.room}
          onClick={updateJoziaPosition}
          ref={roomRef}
        >
          {[1, 2, 3, 4, 5, 6].map((o, i) => (
            <Window magicNumber={i} key={i} />
          ))}
          {[1, 2, 3, 4, 5, 6].map((o, i) => (
            <div
              key={i}
              className={styles.backgroundPlant}
              style={{
                left: i * 1200,
              }}
            >
              <Image alt="roślina doniczkowa" src={plant} objectFit="cover" />
            </div>
          ))}
          <Actor
            targetX={joziaTargetX - 100}
            avatar={grandpaAvatar}
            className={styles.grandpa}
            initialPosition={250}
            width={300}
            height={800}
            movementSpeed={2}
            keepInView={false}
            initiallyFacingLeft={false}
          />
          <Actor
            targetX={joziaTargetX}
            avatar={joziaAvatar}
            className={styles.jozia}
            initialPosition={200}
            width={joziaWidth}
            height={200}
            movementSpeed={3}
            keepInView={true}
            initiallyFacingLeft={false}
          />
          {[1, 2, 3, 4, 5, 6].map((o, i) => (
            <div
              key={i}
              className={styles.backgroundPlant}
              style={{
                left: i * 2000,
              }}
            >
              <Image alt="roślina doniczkowa" src={plant} objectFit="cover" />
            </div>
          ))}
          <div className={styles.floor} />
        </div>
      </div>
    </Layout>
  );
}
