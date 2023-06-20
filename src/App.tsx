import React from "react";
import { useTabs } from "./hooks/useTabs";

function App() {
  const content = [
    {
      tab: "Section 1",
      content: "I'm the content of the Section 1",
    },
    {
      tab: "Section 2",
      content: "I'm the content of the Section 2",
    },
  ];
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <h3>{currentItem.content}</h3>
    </div>
  );
}

export default App;
