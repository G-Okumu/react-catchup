import { useEffect, useState } from "react";
import Table from "./Table";
import Search from "./Search";

export default function AnimalList() {
  const [animals, setAnimal] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://api.npoint.io/af830bf6c18519f60274")
      .then((response) => response.json())
      .then((data) => setAnimal(data.animals));
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
