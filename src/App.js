import "./App.css";
import Axios from "axios";
import React, { useState } from "react";
import DisplayData from "./DisplayData";

function App() {
  const [data, setData] = useState("");
  const [id, setId] = useState("");
  const [isLoaded, setIsLoaded] = useState("false");

  const GetData = () => {
    Axios.get("https://localhost:44397/api/Product/" + id)
      .then((response) => {
        setData(response.data);
        setIsLoaded("true");
      })
      .catch((error) => console.error(`Error: ${error}`), setIsLoaded("false"));
  };

  return (
    <div className="App">
      Product Id :
      <input
        type="text"
        value={id}
        id="productId"
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button onClick={(e) => GetData()}>Get Data</button>
      {isLoaded === "true" && <DisplayData data={data} />}
      {isLoaded === "false" && <DisplayData data={null} />}
    </div>
  );
}

export default App;
