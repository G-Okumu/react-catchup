import { Link } from "react-router-dom";

export default function TableData({ animal }) {
  /**
   *
   * @param {id}
   *
   * fn @handleDelete deletes an item by communicating with the server
   *
   * Rem here, we dont use useEffect hook bcoz, deleting doesnt cause any side effects to the program
   *
   */
  function handleDelete(id) {
    let confirmed = confirm(`Are you sure you want to delete ${animal.name}?`);

    if (confirmed) {
      fetch(`http://localhost:3000/animals/${animal.id}`, {
        method: "DELETE",
        body: {},
      }).then((res) => {
        if (res.ok) {
          alert("Animal deleted successfully");
        }
        window.location.reload();
      });
    }
  }
  return (
    <>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-white whitespace-nowrap bg-gray-800"
        title="Click to view more">
        <Link to={`/animal/${animal.id}`} state={{ animal }}>
          {animal.name}
        </Link>
      </th>
      <td className="px-6 py-4 bg-gray-800 text-white">{animal.location}</td>
      <td className="px-6 py-4 bg-gray-800 text-red-500">
        <button
          className="bg-red-600 text-white p-1.5 rounded-lg hover:bg-red-300"
          onClick={() => handleDelete(animal.id)}>
          DELETE
        </button>
      </td>
    </>
  );
}
