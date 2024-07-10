import React, { Children, ReactNode, useRef, useState } from "react"
import styled from "styled-components"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import {
  MediaPreviewLeftNavigationButton,
  MediaPreviewRightNavigationButton,
} from "./MediaPreviewNavigationButtons"
import MediaPreviewNavigationBar from "./MediaPreviewNavigationBar"

/* TODO: 
  Make media slide from the correct slide instead of appearing/disappearing.
  Use a loading throbber for media that has not loaded yet.
*/

// Animation Constants

const mediaItemSwitchAnimationTime = 300

// Styled Components

const MediaPreviewContainerStyledDiv = styled.div`
  margin: auto;
  overflow: hidden;
  background-color: var(--media-background-color);
  border: solid 4px;
  display: flex;
  width: 70cqi;
  height: 40cqi;
`

const MediaCenterStyledDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`

const mediaItemTransitionName = "media-item-transition"

const MediaItemStyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  &.${mediaItemTransitionName}-enter {
    opacity: 0;
  }

  &.${mediaItemTransitionName}-enter-active {
    opacity: 1;
    transition: all ${mediaItemSwitchAnimationTime}ms ease-out;
  }

  &.${mediaItemTransitionName}-exit {
    opacity: 1;
  }

  &.${mediaItemTransitionName}-exit-active {
    opacity: 0;
    transition: all ${mediaItemSwitchAnimationTime}ms ease-out;
  }
`

// Component Props & Export

type ProjectMediaPreviewProps = {
  children: ReactNode
}

type MediaIdState = {
  id: number
  slidLeftLast: boolean
}

function ProjectMediaPreview({ children }: ProjectMediaPreviewProps) {
  const [imageIdState, setImageIdState] = useState<MediaIdState>({
    id: 0,
    slidLeftLast: false,
  })
  const mediaItemDivRef = useRef(null)

  const mediaNodes = Children.toArray(children)

  function onPressLeftArrow() {
    // Make sure value loops back to max if about to reach negative
    setImageIdState((prevState) => ({
      id: prevState.id - 1 < 0 ? mediaNodes.length - 1 : prevState.id - 1,
      slidLeftLast: true,
    }))
  }

  function onPressRightArrow() {
    // Use mod to cap the id within the array length
    setImageIdState((prevState) => ({
      id: (prevState.id + 1) % mediaNodes.length,
      slidLeftLast: false,
    }))
  }

  function onPressNavigationButton(selectedItem: number) {
    setImageIdState({ ...imageIdState, id: selectedItem })
  }

  return (
    <MediaPreviewContainerStyledDiv>
      <MediaPreviewLeftNavigationButton onClick={onPressLeftArrow} />

      <MediaCenterStyledDiv>
        <SwitchTransition>
          <CSSTransition
            timeout={mediaItemSwitchAnimationTime}
            key={imageIdState.id}
            nodeRef={mediaItemDivRef}
            classNames={mediaItemTransitionName}
          >
            <MediaItemStyledDiv ref={mediaItemDivRef}>
              {mediaNodes[imageIdState.id]}
            </MediaItemStyledDiv>
          </CSSTransition>
        </SwitchTransition>
        <MediaPreviewNavigationBar
          onItemSelected={onPressNavigationButton}
          itemAmount={mediaNodes.length}
          currentlySelectedItem={imageIdState.id}
        />
      </MediaCenterStyledDiv>

      <MediaPreviewRightNavigationButton onClick={onPressRightArrow} />
    </MediaPreviewContainerStyledDiv>
  )
}

export default ProjectMediaPreview
