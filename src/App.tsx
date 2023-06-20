import React, { useEffect, useState } from "react";
import { usePreventLeave } from "./hooks/usePreventLeave";

function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
}

export default App;
