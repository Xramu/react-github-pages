import React, { ComponentPropsWithoutRef } from "react"
import styled from "styled-components"
import { MediaPreviewMediaItemCSS } from "../StyledComponents"

// Styled Components

const ProjectStyledImage = styled.img`
  ${MediaPreviewMediaItemCSS}
`

// Component Props & Export

type ProjectImageProps = ComponentPropsWithoutRef<"img"> & {}

function ProjectImage(props: ProjectImageProps) {
  return (
    <ProjectStyledImage
      {...props}
      alt={props.alt ? props.alt : "No Description Given"}
    />
  )
}

export default ProjectImage
