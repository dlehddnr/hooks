import React from "react";
import { useInput } from "./useInput";
import { useTabs } from "./useTabs";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section2"
  }
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      <h1>Hello Hooks</h1>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
