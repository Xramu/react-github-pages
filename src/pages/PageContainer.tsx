import React, { ReactNode } from "react"

type PageContainerProps = {
  children?: ReactNode
}

function PageContainer({ children }: PageContainerProps) {
  return <div className="Page-container">{children ?? children}</div>
}

export default PageContainer
