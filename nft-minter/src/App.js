import "./App.css";
import Minter from "./Minter";
import Map from "./Map";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/" element={<Minter />} />
      </Routes>
    </div>
  );
}

export default App;
