import { useEffect } from "react";
import { useAudio } from "../../lib/audio";
import styles from "./musicBox.module.css";

type MusicBoxProps = {
  audioFilePath: string;
  autoPlay: boolean;
  loop: boolean;
};

export default function MusicBox({
  audioFilePath,
  autoPlay,
  loop,
}: MusicBoxProps) {
  const [playing, togglePlaying, setPlaying] = useAudio(audioFilePath, loop);

  useEffect(
    function () {
      if (autoPlay && !playing) {
        setPlaying(true);
      }
    },
    [autoPlay, playing, setPlaying]
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 50,
        left: 50,
        zIndex: 500,
      }}
    >
      <button onClick={togglePlaying} className={styles.button}>
        {playing ? "Wyłącz" : "Włącz"} muzykę
      </button>
    </div>
  );
}
