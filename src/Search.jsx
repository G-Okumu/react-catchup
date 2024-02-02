export default function Search({ changeProp }) {
  /**
   *
   * Below function will be for:
   * 1. Getting the search value
   * 2. Passing the search value to its parent to be used in filtering.
   *
   * Rem: the best way to pass prop from child to parent is thru a back function.
   *
   */
  const handleChange = (e) => {
    changeProp(e.target.value);
  };

  return (
    <div className="mt-4 mb-8">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-4 ps-10 text-sm rounded-lg bg-gray-50 focus:ring-blue-500 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500"
          placeholder="Search animal by name"
          required
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
