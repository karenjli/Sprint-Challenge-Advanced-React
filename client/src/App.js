import React from "react";

import "./App.css";

//component
import PlayerList from "./components/player-list";
import Navbar from "./components/dark-mode";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PlayerList />
    </div>
  );
}

export default App;
