import React from "react";
import { useInput } from "./useInput";

function App() {
  const maxLength = (value: any) => value.includes("@");
  const name = useInput("Mr.", maxLength);

  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;
