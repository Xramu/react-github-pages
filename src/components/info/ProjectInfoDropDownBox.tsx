import React, { ReactNode, useState } from "react"

function ProjectInfoDropdownBox(props: { title: string; children: ReactNode }) {
  const [isShowingInfo, setIsShowingInfo] = useState(false)

  function OnInfoDropdownPressed() {
    setIsShowingInfo(!isShowingInfo)
  }

  return (
    <div>
      <h4 onClick={() => OnInfoDropdownPressed()}>{props.title}</h4>
      {isShowingInfo ? props.children : null}
    </div>
  )
}

export default ProjectInfoDropdownBox
