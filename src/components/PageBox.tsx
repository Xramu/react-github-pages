import React from "react"

function PageBox(props: { children: React.ReactNode }) {
  return <div className="Page-box">{props.children}</div>
}

export default PageBox
