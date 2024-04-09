import { Routes, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Edit } from "./pages/Edit";
import { BeerDetails } from "./components/BeerDetails";

export const App = () => {
  const objects = Array.from({ length: 50 }, (_, i) => `Object ${i + 1}`);

  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/breweries/:id" element={<BeerDetails />} />
        </Routes>
      </div>
    </div>
  );
};
