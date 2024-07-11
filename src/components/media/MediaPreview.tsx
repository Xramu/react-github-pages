import React, { Children, ReactNode, useRef, useState } from "react"
import styled from "styled-components"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import {
  MediaPreviewLeftNavigationButton,
  MediaPreviewRightNavigationButton,
} from "./MediaPreviewNavigationButtons"
import MediaPreviewNavigationBar from "./MediaPreviewNavigationBar"
import { BasicBoxShadowCSS } from "../StyledComponents"

/* TODO: 
  Make media slide from the correct slide instead of appearing/disappearing.
  Use a loading throbber for media that has not loaded yet.
*/

// Animation Constants

const mediaItemSwitchAnimationTime = 300

// Styled Components

const MediaPreviewContainerStyledDiv = styled.div`
  ${BasicBoxShadowCSS}
  margin: auto;
  overflow: hidden;
  background-image: radial-gradient(
    var(--media-background-color-center),
    var(--media-background-color-outside)
  );
  border: solid 4px;
  border-radius: 0.5rem;
  display: flex;
  aspect-ratio: 16/7.5;
  width: 100%;
`

const MediaCenterStyledDiv = styled.div`
  padding: 1rem;
  padding-bottom: 0;
  width: 80%;
  display: flex;
  flex-direction: column;
`

const mediaItemTransitionName = "media-item-transition"

const MediaItemStyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 85%;

  &.${mediaItemTransitionName}-enter {
    opacity: 0;
    transform: scale(50%);
  }

  &.${mediaItemTransitionName}-enter-active {
    opacity: 1;
    transform: scale(100%);
    transition: all ${mediaItemSwitchAnimationTime}ms ease-out;
  }

  &.${mediaItemTransitionName}-exit {
    opacity: 1;
    transform: scale(100%);
  }

  &.${mediaItemTransitionName}-exit-active {
    opacity: 0;
    transform: scale(50%);
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
