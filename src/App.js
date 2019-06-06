import React from "react";
import { useBeforeLeave } from "./useBeforeLeave";

const App = () => {
  const begging = () => console.log("noooooooooooo");
  useBeforeLeave(begging);
  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
};

export default App;
