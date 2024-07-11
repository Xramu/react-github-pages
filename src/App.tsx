import React from "react"
import "./styles/App.css"
import colors from "./utils/variables/css/ColorVariables.json"
import Navigation from "./navigation/Navigation"
import styled from "styled-components"

// Styled Components

const AppStyledDiv = styled.div`
  font-family: var(--primary-font-family);
  text-align: center;
  background-color: var(--background-color);
  min-height: 100vh;
  flex-direction: column;
  font-size: var(--primary-font-size);
  color: var(--primary-text-color);
`

// Root Property Setup

const root = document.documentElement

/**
 * Sets a variable to the given value in the root style of the document.
 * @param propertyName Name of the property to change
 * @param value Value to change the property to
 */
function SetStyleProperty(propertyName: string, value: string) {
  root.style.setProperty(propertyName, value)
}

/**
 * Sets up all the colors from the CSS document to match the ones in Colors.json
 */
function SetUpColors() {
  SetStyleProperty("--primary-color", colors["primary-color"])
  SetStyleProperty("--secondary-color", colors["secondary-color"])
  SetStyleProperty("--background-color", colors["background-color"])
  SetStyleProperty("--primary-text-color", colors["primary-text-color"])
  SetStyleProperty(
    "--media-background-color-center",
    colors["media-background-color-center"],
  )
  SetStyleProperty(
    "--media-background-color-outside",
    colors["media-background-color-outside"],
  )
  SetStyleProperty(
    "--primary-box-shadow-color",
    colors["primary-box-shadow-color"],
  )
}

// Component Export

function App() {
  // Make sure that the CSS color variables are matched to the JSON colors
  SetUpColors()

  return (
    <AppStyledDiv>
      <Navigation />
    </AppStyledDiv>
  )
}

export default App
