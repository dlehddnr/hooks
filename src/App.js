import React from "react";
import { useNotification } from "./useNotification";

const App = () => {
  const fireNotif = useNotification("Hello man", { body: "hi dude" });
  return (
    <div className="App">
      <button onClick={fireNotif}>Hello</button>
    </div>
  );
};

export default App;
