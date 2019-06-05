import React from "react";
import { useInput } from "./useInput";

const App = () => {
  const maxLen = value => value.length <= 10 && !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello Hooks</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
