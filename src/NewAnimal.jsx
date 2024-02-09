import { useNavigate } from "react-router-dom";

export default function NewAnimal() {
  // useNavigate
  // useHistory

  const navigate = useNavigate();

  const handlSubmit = () => {
    navigate("/");
  };

  function handleLogout(){
    data.clear()
    navigate("/")
  }
  return (
    <div className="w-full max-w-xs mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handlSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
            name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Animal name"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Sign In
          </button>
        </div>
      </form>

      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}
