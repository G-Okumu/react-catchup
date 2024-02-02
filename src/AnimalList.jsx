import { useEffect, useState } from "react";
import Table from "./Table";
import Search from "./Search";

export default function AnimalList() {
  const [animals, setAnimal] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/animals")
      .then((response) => response.json())
      .then((data) => setAnimal(data));
  }, []);

  // This function will be resposible to manage communication btn child and parent

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  // This will hold the data, and use filter incase.
  const dataToDisplay = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-20 mt-20">
      <Search changeProp={handleSearch} />
      <Table allAnimalList={dataToDisplay} />
    </div>
  );
}
