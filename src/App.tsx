import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "./hooks/useScroll";

function App() {
  const { y } = useScroll();

  return (
    <div style={{ height: "200vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
}

export default App;
