import React, { useState } from "react"

type ProjectInfoDropdownBoxProps = {
  title: string
  children: JSX.Element
}

function ProjectInfoDropdownBox({
  title,
  children,
}: ProjectInfoDropdownBoxProps) {
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
