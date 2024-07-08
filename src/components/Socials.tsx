import React from "react"
import SocialButton from "./SocialButton"
import styled from "styled-components"

// Styled Components

const SocialsRowStyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`

// Component Export

function Socials() {
  return (
    <SocialsRowStyledDiv>
      <SocialButton url="https://twitter.com/_Xramu" />
      <SocialButton url="https://github.com/Xramu" />
    </SocialsRowStyledDiv>
  )
}

export default Socials
