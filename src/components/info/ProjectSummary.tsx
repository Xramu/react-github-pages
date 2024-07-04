import React, { ComponentPropsWithoutRef, ReactNode } from "react"

type ProjectSummaryProps = ComponentPropsWithoutRef<"p"> & {
  children?: ReactNode
}

function ProjectSummary({ children, ...rest }: ProjectSummaryProps) {
  return <p {...rest}>{children ? children : "No Summary Provided"}</p>
}

export default ProjectSummary
