import React, { useRef, useState } from "react"
import InfoTabButton from "../InfoTabButton"
import { StringReactNodePair } from "../../utils/Types"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import styled from "styled-components"

// Animation Constants

const infoSetTransitionName = "Info-set-transition"
const infoSetTransitionTimeMs = 300

// Styled Components

const MainContainerDiv = styled.div`
  margin: 10px 0px 0px 0px;
`

const ButtonRowContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
`

const BottomContainerDiv = styled.div`
  margin-top: 10px;
  padding-left: 20px;
  border-left: solid 4px var(--color-primary);
  overflow: hidden;
`

const InfoSetContainerDiv = styled.div`
  &.${infoSetTransitionName}-enter {
    opacity: 0.01;
    translate: -110% 0%;
  }

  &.${infoSetTransitionName}-enter-active {
    opacity: 1;
    translate: 0% 0%;
    transition: all ${infoSetTransitionTimeMs}ms ease-in;
  }

  &.${infoSetTransitionName}-exit {
    opacity: 1;
    translate: 0% 0%;
  }

  &.${infoSetTransitionName}-exit-active {
    opacity: 0.01;
    translate: -110% 0%;
    transition: all ${infoSetTransitionTimeMs}ms ease-in;
  }
`

// Component Props & Export

type ProjectInfoDropdownBoxProps = {
  tileInfoSets: StringReactNodePair[]
}

function ProjectInfoDropdownBox(props: ProjectInfoDropdownBoxProps) {
  const [shownInfoSet, setShownInfoSet] = useState<StringReactNodePair>(
    props.tileInfoSets[0],
  )

  const contentNodeRef = useRef(null)

  return (
    <MainContainerDiv>
      <ButtonRowContainerDiv>
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
      </ButtonRowContainerDiv>
      <BottomContainerDiv>
        <SwitchTransition>
          <CSSTransition
            nodeRef={contentNodeRef}
            key={shownInfoSet.string}
            timeout={infoSetTransitionTimeMs}
            classNames={infoSetTransitionName}
          >
            <InfoSetContainerDiv ref={contentNodeRef}>
              {shownInfoSet.node}
            </InfoSetContainerDiv>
          </CSSTransition>
        </SwitchTransition>
      </BottomContainerDiv>
    </MainContainerDiv>
  )
}

export default ProjectInfoDropdownBox
