import "./App.css";
import IndexPage from "./pages/IndexPage";
import ExperimentalPage from "./pages/ExperimentalPage";

import {BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/experimental" element={<ExperimentalPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

// <Route path="/experimental" element={<ComunicadosPage />} />