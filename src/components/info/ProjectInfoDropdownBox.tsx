import React, { ReactNode, useState } from "react"

// TODO: Create a row of buttons with the given titles that smoothly changes the content shown in a box underneath.
// TODO: Also to set default node on load up

type ProjectInfoDropdownBoxProps = {
  tileInfoSets: {
    title: string
    infoNode: ReactNode
  }[]
}

function ProjectInfoDropdownBox(props: ProjectInfoDropdownBoxProps) {
  const [shownInfoNode, setShownInfoNode] = useState<ReactNode>()

  return (
    <div>
      {props.tileInfoSets.map((titleInfoSet) => {
        return (
          <>
            <h4
              onClick={() => {
                setShownInfoNode(titleInfoSet.infoNode)
              }}
            >
              {titleInfoSet.title}
            </h4>
          </>
        )
      })}
      {shownInfoNode}
    </div>
  )
}

export default ProjectInfoDropdownBox
