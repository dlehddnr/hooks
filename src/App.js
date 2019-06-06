import React from "react";
import { useNetwork } from "./useNetwork";

const App = () => {
  const handleNetworkChange = online => {
    console.log(online ? "It's OnLine" : "No Internet connection");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "onLine" : "offLine"}</h1>
    </div>
  );
};

export default App;
