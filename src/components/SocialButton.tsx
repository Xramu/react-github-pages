import React from "react"
import { SocialIcon } from "react-social-icons"
import styled from "styled-components"
import { BouncyClickAnimationsCSS } from "./StyledComponents"

// Styled Components

const StyledSocialIcon = styled(SocialIcon)`
  ${BouncyClickAnimationsCSS}
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
  fgColor = fgColor || "var(--color-primary)"
  bgColor = bgColor || "var(--color-text-primary)"

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
