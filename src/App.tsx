import React from "react"
import "./styles/App.css"
import Navigation from "./navigation/Navigation"
import styled from "styled-components"

// Styled Components

const AppStyledDiv = styled.div`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-primary);
  color: var(--color-text-primary);
  background-color: var(--color-background);
  text-align: center;
  min-height: 100vh;
  flex-direction: column;
`

// Component Export

function App() {
  return (
    <AppStyledDiv>
      <Navigation />
    </AppStyledDiv>
  )
}

export default App
