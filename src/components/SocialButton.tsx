import React from "react"
import colors from "../utils/Colors.json"
import { SocialIcon } from "react-social-icons"
import styled from "styled-components"

// Styled Components

const StyledSocialIcon = styled(SocialIcon)`
  display: flex !important;
  margin: 5px 5px;
`

// Component Props & Export

type SocialButtonProps = {
  url: string
  fgColor?: string
  bgColor?: string
}

function SocialButton({ url, fgColor, bgColor }: SocialButtonProps) {
  fgColor = fgColor || colors["primary-text-color"]
  bgColor = bgColor || colors["secondary-color"]

  return <StyledSocialIcon fgColor={fgColor} bgColor={bgColor} url={url} />
}

export default SocialButton
