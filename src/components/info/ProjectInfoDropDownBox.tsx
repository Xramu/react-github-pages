import React, { useState } from "react"

function ProjectInfoDropdownBox({
  title,
  children,
}: {
  title: string
  children: JSX.Element
}) {
  const [isShowingInfo, setIsShowingInfo] = useState(false)

  function OnInfoDropdownPressed() {
    setIsShowingInfo(!isShowingInfo)
  }

  return (
    <div>
      <h4 onClick={() => OnInfoDropdownPressed()}>{title}</h4>
      {isShowingInfo ? children : null}
    </div>
  )
}

export default ProjectInfoDropdownBox
