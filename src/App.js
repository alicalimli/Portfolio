import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Portfolio from "./page/Portfolio.page";

import NavbarRoute from "./routes/navbar.component";

function App() {

  return (
    <Routes>
      <Route path="/" element={<NavbarRoute />}>
        <Route index element={<Portfolio />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
