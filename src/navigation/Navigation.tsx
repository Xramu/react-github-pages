import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import routes from "../utils/Routes.json"
import NavigationBar from "./NavigationBar"
import Home from "../pages/Home"
import Info from "../pages/Info"
import NoPage from "../pages/NoPage"
import styled from "styled-components"

// Styled Components

const PageStyledDiv = styled.div`
  font-size: max(5px, 2.5vmin);
  display: flex;
  justify-content: center;
  text-align: left;
  margin: 0px max(4px, 6vmin);
`

// Component Export

function Navigation() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <PageStyledDiv>
        <Routes>
          <Route index element={<Info />} />
          <Route path={routes.Info} element={<Info />} />
          <Route path={routes.Home} element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </PageStyledDiv>
    </BrowserRouter>
  )
}

export default Navigation
