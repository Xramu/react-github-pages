import React, { ComponentPropsWithoutRef, ReactNode } from "react"

type ProjectTitleProps = ComponentPropsWithoutRef<"h2"> & {
  children?: ReactNode
}

function ProjectTitle({ children, ...rest }: ProjectTitleProps) {
  return (
    <h2 {...rest}>
      <u>{children ? children : "No Title"}</u>
    </h2>
  )
}

export default ProjectTitle
