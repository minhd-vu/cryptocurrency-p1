import "./App.css";
import Minter from "./Minter";
import Map from "./Map";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Minter />} />
        <Route path="map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
