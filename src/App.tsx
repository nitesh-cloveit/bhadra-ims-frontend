import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import Table from "./components/table";

function App() {
  const [name, setName] = useState("John");
  // const [count2, setCount2] = useState(5);

  return (
    <>
      <Counter />
      <Table />

      {/* <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} />
      <p>{name}</p> */}
    </>
  );
}

export default App;
