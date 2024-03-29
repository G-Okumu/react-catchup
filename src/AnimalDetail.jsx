import { useLocation, NavLink } from "react-router-dom";

export default function AnimalDetail() {
  const statefromurl = useLocation();
  const animal = statefromurl.state.animal;

  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg mt-8">
      <h1 className="text-center pb-4 text-green-600 font-bold">More Details.</h1>
      <img className="w-full" src={animal.image} alt={animal.name} height="200" width="100" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Age: {animal.age}</div>
        <p className="text-gray-700 text-base">{animal.description}</p>
      </div>

      <div classNameName="float-right mb-2 mr-2">
        <NavLink to="/" exact="true" className="bg-green-400 text-white p-2 rounded-lg">
          Go Back
        </NavLink>
      </div>
    </div>
  );
}
