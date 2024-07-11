import React, { ComponentPropsWithoutRef, ReactNode } from "react"

type ProjectTitleProps = ComponentPropsWithoutRef<"h2"> & {
  children?: ReactNode
}

function ProjectTitle({ children, ...rest }: ProjectTitleProps) {
  return <h2 {...rest}>{children ? children : "No Title"}</h2>
}

export default ProjectTitle
