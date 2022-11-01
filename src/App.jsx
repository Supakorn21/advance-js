import { useState } from "react";

import "./App.css";

export default function App() {
  const [dataAsync, setDataAsync] = useState("No message");

  const showDataAsync = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let randomNum = Math.floor(Math.random() * 90 + 10);
        resolve(randomNum);
      }, 3000);
    });
  };

  const clickDataAsync = async () => {
    setDataAsync("Loading...");
    let data = await showDataAsync();
    setDataAsync(`Data is ${data}`);
  };

  const clickDataThenCatch = () => {
    setDataAsync("Loading...");
    showDataAsync()
      .then((response) => {
        // console.log("response", response);
        setDataAsync(`Data is ${response}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>Live Test Advanced Javascript</h1>

      <div className="number"> {dataAsync}</div>
      <div>
        <button onClick={() => clickDataAsync()}>Get Data Async</button>
        <button onClick={() => clickDataThenCatch()}>
          Get Data Then Catch
        </button>
      </div>
    </div>
  );
}
