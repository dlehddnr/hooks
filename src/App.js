import React from "react";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "http://dummy.restapiexample.com/api/v1/employees"
  });
  console.log(loading, data, error);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>hi</h1>
      <p>{data && data.status}</p>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default App;
