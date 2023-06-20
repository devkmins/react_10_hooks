import React, { useEffect, useRef, useState } from "react";
import { useFullscreen } from "./hooks/useFullscreen";

function App() {
  const onFullScreen = (isFull: any) => {
    console.log(isFull ? "We are full" : "We are small");
  };

  const { element, triggerFull, exitFull } = useFullscreen();

  return (
    <div>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default App;
