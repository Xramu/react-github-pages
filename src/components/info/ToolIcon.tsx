import React from "react"
import styled, { css } from "styled-components"
import { BouncyClickAnimationsCSS } from "../StyledComponents"
import NewTabAnchor from "../NewTabAnchor"

// Styled Components

const ToolIconMargin = css`
  margin: 0.5rem;
`

const ToolIconContainerStyledDiv = styled.div`
  ${BouncyClickAnimationsCSS}
  ${ToolIconMargin}
  text-align: center;
`

const ToolIconStyledImg = styled.img`
  height: 6.5rem;
`

const ToolIconTextStyledP = styled.p`
  ${ToolIconMargin}
  margin-top: 0;
  font-size: var(--font-size-primary);
  text-align: center;
`

// Component Props & Export

type ToolIconProps = {
  src?: string
  alt?: string
  link?: string
}

function ToolIcon({ src, alt, link }: ToolIconProps) {
  // Create image
  let icon = <ToolIconStyledImg alt={alt} src={src} />

  // Add possible anchor
  if (link && link.length > 0) {
    icon = <NewTabAnchor href={link}>{icon}</NewTabAnchor>
  }

  // Add everything into a container with a paragraph at the bottom
  icon = (
    <ToolIconContainerStyledDiv>
      {icon}
      <ToolIconTextStyledP>{alt}</ToolIconTextStyledP>
    </ToolIconContainerStyledDiv>
  )

  return icon
}

export { ToolIcon }
