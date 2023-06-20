import React, { useEffect, useRef, useState } from "react";
import { useNotification } from "./hooks/useNotification";

function App() {
  const triggerNotification = useNotification("HI", { body: "HELLO" });

  return (
    <div>
      <button onClick={triggerNotification}>Click</button>
    </div>
  );
}

export default App;
