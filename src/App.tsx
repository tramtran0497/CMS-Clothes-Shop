import React from "react";
import { TopBar } from "./Components/Navigation/TopBar";
import { Home } from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <TopBar />
      <Home/>
    </div>
  );
}

export default App;
