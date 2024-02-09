import AnimalList from "./AnimalList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import TopNav from "./TopNav";
import NewAnimal from "./NewAnimal";
import AnimalDetail from "./AnimalDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNav />

        <Routes>
          <Route path="/" element={<AnimalList />} />

          {/* The below code takes you to Animal Detail and opens a new page */}
          <Route path="animal/:id" element={<AnimalDetail />} />

          <Route path="/newanimal" element={<NewAnimal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
