import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Portfolio from "./page/Portfolio.page";

import NavbarRoute from "./routes/navbar.component";
import EachProject from "./routes/Each Project/EachProject.component";

function App() {

  return (
    // Main-Project
    <Routes>
      <Route path="/" element={<NavbarRoute />}>
        <Route index element={<Portfolio />}></Route>
      </Route>
      <Route path="project/:id" element={<EachProject />} ></Route>
    </Routes>
  );
}

export default App;
