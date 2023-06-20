import { useRef } from "react";

export const useFullscreen = (onFullScreen: any) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullScreen();

      if (onFullScreen) {
        onFullScreen(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();

    if (onFullScreen) {
      onFullScreen(false);
    }
  };

  return { element, triggerFull, exitFull };
};
