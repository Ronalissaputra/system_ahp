import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";
import Kriteriapage from "./page/Kriteriapage";
import Alternatifpage from "./page/Alternatifpage";
import Perbandingankriteriapage from "./page/Perbandingankriteriapage";
import Perbandinganalternatifpage from "./page/Perbandinganalternatifpage";
import Rankingpage from "./page/Rankingpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/kriteria" element={<Kriteriapage />} />
        <Route path="/alternatif" element={<Alternatifpage />} />
        <Route
          path="/perbandinganalternatif"
          element={<Perbandinganalternatifpage />}
        />
        <Route
          path="/perbandingankriteria"
          element={<Perbandingankriteriapage />}
        />
        <Route path="/ranking" element={<Rankingpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
