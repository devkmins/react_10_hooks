import React, { useEffect, useRef, useState } from "react";
import { useClick } from "./hooks/useClick";

function App() {
  const sayHello = () => console.log("Hello");
  const title = useClick(sayHello);

  return (
    <div>
      <h3 ref={title}>Hello</h3>
    </div>
  );
}

export default App;
