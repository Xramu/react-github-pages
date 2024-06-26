import React from "react"

type PageBoxProps = {
  children: JSX.Element
}

function PageBox({ children }: PageBoxProps) {
  return <div className="Page-box">{children}</div>
}

export default PageBox
