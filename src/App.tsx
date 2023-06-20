import React, { useEffect, useRef, useState } from "react";
import { useNetwork } from "./hooks/useNetwork";

function App() {
  const handleNetworkChange = (online: any) => {
    console.log(online ? "Online" : "Offline");
  };
  const onLine = useNetwork(handleNetworkChange);

  return (
    <div>
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
}

export default App;
