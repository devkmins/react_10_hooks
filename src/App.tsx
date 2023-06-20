import React, { useEffect, useState } from "react";
import { useBeforeLeave } from "./hooks/useBeforeLeave";

function App() {
  const begForLife = () => console.log("Plz dont leave");
  useBeforeLeave(begForLife);

  return <div></div>;
}

export default App;
