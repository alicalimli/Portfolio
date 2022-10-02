import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.component";
import Header from "./components/Header/Header.component";

import NavbarRoute from "./routes/navbar.component";
import Story from "./routes/story.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavbarRoute />}>
        <Route index element={<Header />}></Route>
        <Route path="story" element={<Story />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
