import React from "react"
import styled from "styled-components"
import { BouncyClickAnimationsCSS } from "../StyledComponents"

// Styled Components

const ToolIconContainerStyledDiv = styled.div`
  ${BouncyClickAnimationsCSS}
  margin: 0.5rem;
  text-align: center;
`

const ToolIconStyledImg = styled.img`
  margin-bottom: 0px;
  height: 6.5rem;
`

const ToolIconTextStyledP = styled.p`
  font-size: var(--font-size-primary);
  text-align: center;
  margin: 0px 0.5vmin;
  margin-bottom: 0.5vmin;
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
    icon = (
      <a target="_blank" rel="noopener noreferrer" href={link}>
        {icon}
      </a>
    )
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
