import React, { ReactNode } from "react"

type PageBoxProps = {
  children: ReactNode
}

function PageBox({ children }: PageBoxProps) {
  return <div className="Page-box">{children}</div>
}

export default PageBox
