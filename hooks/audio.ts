import { useEffect, useState } from "react";

export function useAudio(url: string, loop: boolean) {
  const [audio, setAudio] = useState<HTMLAudioElement>(undefined);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    setPlaying(!playing);
  }

  useEffect(() => {
    if (audio) {
      playing ? audio.play() : audio.pause();
    }
  }, [playing, audio]);

  useEffect(() => {
    function handlePlaybackEnded() {
      if (loop) {
        audio.currentTime = 0;
      } else {
        setPlaying(false);
      }
    }
    if (audio) {
      audio.addEventListener("ended", handlePlaybackEnded);
      return () => {
        audio.removeEventListener("ended", handlePlaybackEnded);
      };
    }
  }, [audio, loop]);

  useEffect(
    function () {
      setAudio(new Audio(url));
    },
    [url]
  );

  return [playing, toggle, setPlaying] as const;
}
