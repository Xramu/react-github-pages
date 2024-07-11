import React from "react"
import { useNavigate } from "react-router-dom"
import NavigationButton from "./NavigationButton"
import Socials from "../components/Socials"
import routes from "../utils/Routes.json"
import styled from "styled-components"

// Styled Components

const NavigationBarStyledDiv = styled.div`
  box-shadow: 0px 5px 5px var(--primary-box-shadow-color);
  overflow: hidden;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const NavigationButtonsRowStyledDiv = styled.div`
  display: flex;
`

// Component Export

function NavigationBar() {
  const navigate = useNavigate()

  function OnNavigationButtonClick(route: string) {
    navigate(route)
  }

  return (
    <NavigationBarStyledDiv>
      <NavigationButtonsRowStyledDiv>
        <NavigationButton
          text="Home"
          onClick={() => {
            OnNavigationButtonClick(routes.Home)
          }}
        />
        <NavigationButton
          text="About Me"
          onClick={() => {
            OnNavigationButtonClick(routes.Info)
          }}
        />
      </NavigationButtonsRowStyledDiv>
      <Socials />
    </NavigationBarStyledDiv>
  )
}

export default NavigationBar
