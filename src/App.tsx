import React, { useEffect, useState } from "react";
import { useTitle } from "./hooks/useTitle";

function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);

  return (
    <div>
      <h3>Hello</h3>
    </div>
  );
}

export default App;
