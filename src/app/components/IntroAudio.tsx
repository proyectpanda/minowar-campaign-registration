import { useEffect } from "react";

const INTRO_AUDIO_SRC = "/audio/epic-intro.mp3";
const INTRO_PLAYED_KEY = "great-warsaw-intro-played";

export function IntroAudio() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(INTRO_PLAYED_KEY) === "true") return;

    const audio = new Audio(INTRO_AUDIO_SRC);
    audio.preload = "auto";
    audio.volume = 0.75;

    const markAsPlayed = () => {
      window.sessionStorage.setItem(INTRO_PLAYED_KEY, "true");
    };

    const tryPlay = async () => {
      try {
        await audio.play();
        markAsPlayed();
        cleanupInteractionListeners();
      } catch (error) {
        addInteractionListeners();
      }
    };

    const playAfterInteraction = () => {
      tryPlay();
    };

    const addInteractionListeners = () => {
      window.addEventListener("pointerdown", playAfterInteraction, { once: true });
      window.addEventListener("keydown", playAfterInteraction, { once: true });
      window.addEventListener("touchstart", playAfterInteraction, { once: true });
    };

    const cleanupInteractionListeners = () => {
      window.removeEventListener("pointerdown", playAfterInteraction);
      window.removeEventListener("keydown", playAfterInteraction);
      window.removeEventListener("touchstart", playAfterInteraction);
    };

    tryPlay();

    return () => {
      cleanupInteractionListeners();
      audio.pause();
      audio.src = "";
    };
  }, []);

  return null;
}
