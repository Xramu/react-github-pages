import React, { useRef, useState } from "react"
import InfoTabButton from "../InfoTabButton"
import { StringReactNodePair } from "../../utils/Types"
import { CSSTransition, SwitchTransition } from "react-transition-group"

type ProjectInfoDropdownBoxProps = {
  tileInfoSets: StringReactNodePair[]
}

function ProjectInfoDropdownBox(props: ProjectInfoDropdownBoxProps) {
  const [shownInfoSet, setShownInfoSet] = useState<StringReactNodePair>(
    props.tileInfoSets[0],
  )

  const contentNodeRef = useRef(null)

  return (
    <div className="Project-info-box">
      <div className="Project-info-button-row">
        {props.tileInfoSets.map((titleInfoSet) => {
          return (
            <div key={titleInfoSet.string}>
              <InfoTabButton
                selected={
                  shownInfoSet.string === titleInfoSet.string ? true : false
                }
                onClick={() => {
                  setShownInfoSet(titleInfoSet)
                }}
              >
                {titleInfoSet.string}
              </InfoTabButton>
            </div>
          )
        })}
      </div>
      <div className="Project-info-box-content">
        <SwitchTransition>
          <CSSTransition
            nodeRef={contentNodeRef}
            key={shownInfoSet.string}
            timeout={300}
            classNames={"Info-set"}
          >
            <div ref={contentNodeRef}>{shownInfoSet.node}</div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  )
}

export default ProjectInfoDropdownBox
