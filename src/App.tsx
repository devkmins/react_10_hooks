import React, { useEffect, useRef, useState } from "react";
import { useFadeIn } from "./hooks/useFadeIn";

function App() {
  const FadeInH1 = useFadeIn(1, 2);
  const FadeInP = useFadeIn(3, 6);

  return (
    <div>
      <h1 {...FadeInH1}>Hi</h1>
      <p {...FadeInP}>HIHIHIHIHHIHI</p>
    </div>
  );
}

export default App;
