import React from "react";
import { TopBar } from "./Components/Navigation/TopBar";
import { Home } from "./Pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Menu } from "./Pages/Menu";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
