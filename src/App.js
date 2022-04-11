// Css
import "./App.css";

import React from "react";

//  Components
import Header from "./components/Header";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
