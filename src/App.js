import "./App.css";
import { createContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListaPersonajes from "./Hooks/MultipleHooks/ListaPersonajes";
import MultipleHooks from "./Hooks/MultipleHooks/MultipleHooks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaPersonajes />} />
          <Route path="/personaje/:id" element={<MultipleHooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
