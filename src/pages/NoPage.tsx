import React from "react";
import "../utils/App.css";

import logo from "../img/mahiro.png";

function NoPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>404 No Page Here...</p>
      </header>
    </div>
  );
}

export default NoPage;
