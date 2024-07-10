import React, { Children, ReactNode, useRef, useState } from "react"
import styled from "styled-components"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import { CSSTransition, SwitchTransition } from "react-transition-group"

/* TODO: 
  Make media slide from the correct slide instead of appearing/disappearing.
  Use a loading throbber for media that has not loaded yet.
*/

// Animation Constants

const mediaItemSwitchAnimationTime = 300

const arrowButtonHoverAnimationTimeMs = 150
const arrowButtonActiveAnimationTimeMs = 70

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
  margin: auto;
`

const buttonIconClassName = "button-icon"

type GradientDirection = "to right" | "to left"

const MediaNavigationStyledButton = styled.button<{
  $gradientDirection: GradientDirection
}>`
  cursor: pointer;
  color: white;
  background-color: #00000000;
  border: none;
  height: 100%;
  width: 10%;

  transition: all ${arrowButtonHoverAnimationTimeMs}ms ease-in;

  .${buttonIconClassName} {
    color: #ffffff55;
    width: 50%;
    height: auto;
    transition: all ${arrowButtonHoverAnimationTimeMs}ms ease-in;
  }

  &:hover {
    background-image: linear-gradient(
      ${(props) => props.$gradientDirection},
      #ffffff33,
      #00000000
    );
    transition: all ${arrowButtonHoverAnimationTimeMs}ms ease-in;
  }

  &:hover > .${buttonIconClassName} {
    color: #ffffffff;
    transform: scale(110%);
    transition: all ${arrowButtonHoverAnimationTimeMs}ms ease-in;
  }

  &:active > .${buttonIconClassName} {
    transform: scale(100%);
    transition: all ${arrowButtonActiveAnimationTimeMs}ms ease-in;
  }
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

function LeftArrowButton(props: { onClick: () => void }) {
  return (
    <MediaNavigationStyledButton
      style={{ float: "left" }}
      onClick={props.onClick}
      $gradientDirection="to right"
    >
      <MdArrowBackIos className={buttonIconClassName} />
    </MediaNavigationStyledButton>
  )
}

function RightArrowButton(props: { onClick: () => void }) {
  return (
    <MediaNavigationStyledButton
      style={{ float: "right" }}
      onClick={props.onClick}
      $gradientDirection="to left"
    >
      <MdArrowForwardIos className={buttonIconClassName} />
    </MediaNavigationStyledButton>
  )
}

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

  return (
    <MediaPreviewContainerStyledDiv>
      <LeftArrowButton onClick={onPressLeftArrow} />

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
      </MediaCenterStyledDiv>

      <RightArrowButton onClick={onPressRightArrow} />
    </MediaPreviewContainerStyledDiv>
  )
}

export default ProjectMediaPreview
