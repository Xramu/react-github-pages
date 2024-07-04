import React, { ComponentPropsWithoutRef } from "react"

type ProjectImageProps = ComponentPropsWithoutRef<"img"> & {}

function ProjectImage(props: ProjectImageProps) {
  return (
    <img
      {...props}
      className="Project-preview-banner"
      alt={props.alt ? props.alt : "Banner of the project"}
    />
  )
}

export default ProjectImage
