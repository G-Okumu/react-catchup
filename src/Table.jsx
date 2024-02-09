import TableData from "./TableData";

export default function Table({ allAnimalList }) {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50">
                Animal name
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50">
                Location
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allAnimalList.length ? (
              allAnimalList.map((animal) => (
                <tr key={animal.id}>
                  <TableData animal={animal} />
                </tr>
              ))
            ) : (
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap bg-gray-800">
                  No data present
                </th>
                <td className="px-6 py-4 bg-gray-800 text-white"></td>
                <td className="px-6 py-4 bg-gray-800 text-white"></td>
                <td className="px-6 py-4 bg-gray-800 text-white"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
