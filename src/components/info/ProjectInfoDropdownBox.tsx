import React, { ReactNode, useState } from "react"
import InfoTabButton from "../InfoTabButton"
import { StringReactNodePair } from "../../utils/Types"

// TODO: Style buttons and info box more. Make the text smoothly transition

type ProjectInfoDropdownBoxProps = {
  tileInfoSets: StringReactNodePair[]
}

function ProjectInfoDropdownBox(props: ProjectInfoDropdownBoxProps) {
  const [shownInfoNode, setShownInfoNode] = useState<ReactNode>(
    props.tileInfoSets[0]?.node,
  )

  return (
    <div className="Project-info-box">
      <div className="Project-info-button-row">
        {props.tileInfoSets.map((titleInfoSet) => {
          return (
            <>
              <InfoTabButton
                selected={shownInfoNode === titleInfoSet.node ? true : false}
                onClick={() => {
                  setShownInfoNode(titleInfoSet.node)
                }}
              >
                {titleInfoSet.string}
              </InfoTabButton>
            </>
          )
        })}
      </div>
      <div className="Project-info-box-content">{shownInfoNode}</div>
    </div>
  )
}

export default ProjectInfoDropdownBox
