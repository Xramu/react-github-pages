import React from "react";
import { useNavigate } from "react-router-dom";

import NavigationButton from "./NavigationButton";
import Socials from "../components/Socials";

import routes from "../utils/Routes.json";

function NavigationBar() {
  const navigate = useNavigate();

  function OnNavigationButtonClick(route: string) {
    navigate(route);
  }

  return (
    <div className="Navigation-bar">
      <div className="Navigation-buttons">
        <NavigationButton text="Home" onClick={() => {OnNavigationButtonClick(routes.Home)}} />
        <NavigationButton text="About Me" onClick={() => {OnNavigationButtonClick(routes.Info)}} />
      </div>
      <Socials />
    </div>
  );
}

export default NavigationBar;
