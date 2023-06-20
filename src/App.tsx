import React, { useEffect, useState } from "react";
import { useConfirm } from "./hooks/useConfirm";

function App() {
  const deleteTheWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteTheWorld, abort);

  return (
    <div>
      <button>Delete the world</button>
    </div>
  );
}

export default App;
