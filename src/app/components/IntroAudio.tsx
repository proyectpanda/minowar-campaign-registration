import { useEffect } from "react";

const INTRO_AUDIO_SRC = "/audio/epic-intro.mp3";

export function IntroAudio() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio(INTRO_AUDIO_SRC);
    audio.preload = "auto";
    audio.volume = 0.75;

    let disposed = false;
    let started = false;

    const tryPlay = async () => {
      if (disposed || started) return;
      try {
        await audio.play();
        if (disposed) return;
        started = true;
        cleanupInteractionListeners();
      } catch {
        // Keep listening until a browser-approved user gesture starts playback.
      }
    };

    const playAfterInteraction = () => {
      tryPlay();
    };

    const addInteractionListeners = () => {
      window.addEventListener("click", playAfterInteraction);
      window.addEventListener("keydown", playAfterInteraction);
      window.addEventListener("touchend", playAfterInteraction);
    };

    const cleanupInteractionListeners = () => {
      window.removeEventListener("click", playAfterInteraction);
      window.removeEventListener("keydown", playAfterInteraction);
      window.removeEventListener("touchend", playAfterInteraction);
    };

    addInteractionListeners();
    void tryPlay();

    return () => {
      disposed = true;
      cleanupInteractionListeners();
      audio.pause();
      audio.src = "";
    };
  }, []);

  return null;
}
