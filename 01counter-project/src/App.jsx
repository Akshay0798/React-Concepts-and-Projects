import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    // setCounter(counter + 1);

    if (counter < 20) {
      setCounter((prevCounter) => Math.min(prevCounter + 1, 20));
    }
  };

  const removeValue = () => {
    // setCounter(counter - 1);

    if (counter > 0) {
      setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
