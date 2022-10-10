import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Portfolio from "./page/Portfolio.page";

import NavbarRoute from "./routes/navbar.component";
import UltraMovie from "./routes/ultramovie";

function App() {

  return (
    <Routes>
      <Route path="/" element={<NavbarRoute />}>
        <Route index element={<Portfolio />}></Route>
      </Route>
      <Route path="project/:id" element={<UltraMovie />} ></Route>
    </Routes>
  );
}

export default App;
