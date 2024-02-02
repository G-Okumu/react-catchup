import AnimalList from "./AnimalList";
import { useEffect, useState } from "react";
import NewAnimal from "./NewAnimal";

function App() {
  // const [name, setName] = useState("Lion");
  // const [count, setCount] = useState(0);

  // function increase() {
  //   setCount(count + 1);
  // }

  // console.log("one");

  // useEffect(() => {
  //   console.log("two");
  // }, [count]);

  // console.log("three");

  return (
    <>
      <h1>Animal Tracker</h1>

      {/* <p>Animal count {count}</p>

      <button onClick={increase}>increase animal count</button>

      <ul>
        <li>{name}</li>
      </ul>

      <input value={name} onChange={(e) => setName(e.target.value)} /> */}

      <AnimalList />
    </>
  );
}

export default App;
