import { useState } from "react";
import SoundOff from "./components/SoundOff";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SoundOff />
    </>
  );
}

export default App;
