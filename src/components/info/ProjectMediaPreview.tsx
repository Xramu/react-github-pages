import React, { Children, ReactNode } from "react"
import styled from "styled-components"

// Styled Components

const MediaPreviewContainerStyledDiv = styled.div`
  border: solid 4px;
  border-radius: 4px;
  display: block;
  width: 70cqi;
  height: 40cqi;
`

// Component Props & Export

type ProjectMediaPreviewProps = {
  children: ReactNode
}

function ProjectMediaPreview({ children }: ProjectMediaPreviewProps) {
  const mediaNodes = Children.toArray(children)

  return (
    <MediaPreviewContainerStyledDiv>
      {mediaNodes.map((node) => node)}
    </MediaPreviewContainerStyledDiv>
  )
}

export default ProjectMediaPreview
