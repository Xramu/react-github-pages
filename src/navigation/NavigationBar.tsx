import React from "react";
import { useNavigate } from "react-router-dom";

import NavigationButton from "./NavigationButton";

import routes from "../utils/Routes.json";

function NavigationBar() {
  const navigate = useNavigate();

  function OnNavigationButtonClick(route: string) {
    navigate(route);
  }

  return (
    <div>
      <NavigationButton text="Home" onClick={() => {OnNavigationButtonClick(routes.Home)}} />
      <NavigationButton text="About Me" onClick={() => {OnNavigationButtonClick(routes.Info)}} />
    </div>
  );
}

export default NavigationBar;
