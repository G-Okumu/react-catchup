export default function TableData({ name, age, location }) {
  return (
    <>
      <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap bg-gray-800">
        {name}
      </th>
      <td className="px-6 py-4 bg-gray-800 text-white">{age}</td>
      <td className="px-6 py-4 bg-gray-800 text-white">{location}</td>
      <td className="px-6 py-4 bg-gray-800 text-red-500">DELETE</td>
    </>
  );
}
