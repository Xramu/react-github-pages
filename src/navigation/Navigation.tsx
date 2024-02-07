import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "../utils/Routes.json";

import NavigationBar from "./NavigationBar";

import Home from "../pages/Home";
import Info from "../pages/Info";
import NoPage from "../pages/NoPage";

function Navigation() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="Page">
        <Routes>
          <Route index element={<Home />} />
          <Route path={routes.Home} element={<Home />} />
          <Route path={routes.Info} element={<Info />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navigation;
