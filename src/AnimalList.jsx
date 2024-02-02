import { useEffect, useState } from "react";

export default function AnimalList() {
  const [animals, setAnimal] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/animals")
      .then((response) => response.json())
      .then((data) => setAnimal(data));
  }, []);

  return (
    <>
      <p>Displaying a list of animals.</p>

      {animals.length ? (
        animals.map((animal) => (
          <div key={animal.age}>
            <h1>{animal.name}</h1>
            <p>{animal.age}</p>
            <p>{animal.location}</p>
          </div>
        ))
      ) : (
        <p>Animals doesn't exist</p>
      )}
    </>
  );
}
