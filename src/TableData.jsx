export default function TableData({ id, name, age, location }) {
  function handleDelete(id) {
    let confirmed = confirm(`Are you sure you want to delete ${name}?`);

    if (confirmed) {
      fetch(`http://localhost:3000/animals/${id}`, {
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
      <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap bg-gray-800">
        {name}
      </th>
      <td className="px-6 py-4 bg-gray-800 text-white">{age}</td>
      <td className="px-6 py-4 bg-gray-800 text-white">{location}</td>
      <td className="px-6 py-4 bg-gray-800 text-red-500" onClick={() => handleDelete(id)}>
        DELETE
      </td>
    </>
  );
}
