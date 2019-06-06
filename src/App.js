import React from "react";
import { useClick } from "./useClick";

const App = () => {
  const Hi = () => {
    console.log("hi");
  };
  const boom = useClick(Hi);
  return (
    <div className="App">
      <h1 ref={boom}>Hello Hooks</h1>
    </div>
  );
};

export default App;
