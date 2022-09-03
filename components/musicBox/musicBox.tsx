import { useEffect } from "react";
import { useAudio } from "../../hooks/useAudio";
import styles from "./musicBox.module.css";

type MusicBoxProps = {
  audioFilePath: string;
  autoPlay: boolean;
  loop: boolean;
  className: string;
};

export default function MusicBox({
  audioFilePath,
  autoPlay,
  loop,
  className
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
    
      <button onClick={togglePlaying} className={className}>
        {playing ? "Wyłącz" : "Włącz"} muzykę
      </button>
  );
}
