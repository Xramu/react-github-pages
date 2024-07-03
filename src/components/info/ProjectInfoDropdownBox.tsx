import React, { ReactNode, useState } from "react"
import InfoTabButton from "../InfoTabButton"

// TODO: Style buttons and info box more. Make the text smoothly transition

type ProjectInfoDropdownBoxProps = {
  tileInfoSets: {
    title: string
    infoNode: ReactNode
  }[]
}

function ProjectInfoDropdownBox(props: ProjectInfoDropdownBoxProps) {
  const [shownInfoNode, setShownInfoNode] = useState<ReactNode>(
    props.tileInfoSets[0]?.infoNode,
  )

  return (
    <>
      <div className="Project-preview-info-button-row">
        {props.tileInfoSets.map((titleInfoSet) => {
          return (
            <>
              <InfoTabButton
                selected={
                  shownInfoNode === titleInfoSet.infoNode ? true : false
                }
                onClick={() => {
                  setShownInfoNode(titleInfoSet.infoNode)
                }}
              >
                {titleInfoSet.title}
              </InfoTabButton>
            </>
          )
        })}
      </div>
      {shownInfoNode}
    </>
  )
}

export default ProjectInfoDropdownBox
