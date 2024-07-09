import React from "react"
import colors from "../utils/Colors.json"
import { SocialIcon } from "react-social-icons"
import styled from "styled-components"

// Animation Constants

const socialIconHoverAnimationTimeMs = 100
const socialIconActiveAnimationTimeMs = 70

// Styled Components

const StyledSocialIcon = styled(SocialIcon)`
  display: flex !important;
  margin: 5px 5px;

  transition: all ${socialIconHoverAnimationTimeMs}ms ease-in;

  &:hover {
    transform: scale(110%);
    transition: all ${socialIconHoverAnimationTimeMs}ms ease-in;
  }

  &:active {
    transform: scale(90%);
    transition: all ${socialIconActiveAnimationTimeMs}ms ease-in;
  }
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

  return (
    <StyledSocialIcon
      fgColor={fgColor}
      bgColor={bgColor}
      url={url}
      target="_blank"
      rel="noopener noreferrer"
    />
  )
}

export default SocialButton
