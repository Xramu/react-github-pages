import React from "react";
import "./styles/App.css";
import colors from "./utils/Colors.json";
import Navigation from "./navigation/Navigation";

const root = document.documentElement;

function SetStyleProperty(propertyName: string, value: string) {
  root.style.setProperty(propertyName, value);
}

function SetUpColors() {
  SetStyleProperty("--primary-color", colors["primary-color"]);
  SetStyleProperty("--secondary-color", colors["secondary-color"]);
  SetStyleProperty("--background-color", colors["background-color"]);
  SetStyleProperty("--primary-text-color", colors["primary-text-color"]);
}

function App() {
  // Make sure that the CSS color variables are matched to the JSON colors
  SetUpColors();

  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
