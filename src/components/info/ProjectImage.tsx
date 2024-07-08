import React, { ComponentPropsWithoutRef } from "react"
import styled from "styled-components"

// Styled Components

const ProjectStyledImg = styled.img`
  border: solid 4px;
  border-radius: 4px;
  display: block;
  justify-content: center;
  width: 70cqi;
`

// Component Props & Export

type ProjectImageProps = ComponentPropsWithoutRef<"img"> & {}

function ProjectImage(props: ProjectImageProps) {
  return (
    <ProjectStyledImg
      {...props}
      alt={props.alt ? props.alt : "Banner of the project"}
    />
  )
}

export default ProjectImage
