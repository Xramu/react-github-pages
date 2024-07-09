import React, { Children, ReactNode } from "react"
import styled from "styled-components"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"

// Animation Constants

const buttonHoverAnimationTimeMs = 150
const buttonActiveAnimationTimeMs = 70

// Styled Components

const MediaPreviewContainerStyledDiv = styled.div`
  margin: auto;
  overflow: hidden;
  background-color: var(--media-background-color);
  border: solid 4px;
  border-radius: 4px;
  display: flex;
  width: 70cqi;
  height: 40cqi;
`

const MediaCenterStyledDiv = styled.div`
  width: 80%;
  display: flex;
  margin: auto;
`

const buttonIconClassName = "button-icon"

type GradientDirection = "to right" | "to left"

const MediaNavigationStyledButton = styled.button<{
  gradientDirection: GradientDirection
}>`
  cursor: pointer;
  color: white;
  background-color: #00000000;
  border: none;
  height: 100%;
  width: 20%;

  transition: all ${buttonHoverAnimationTimeMs}ms ease-in;

  .${buttonIconClassName} {
    color: #ffffff55;
    width: 50%;
    height: auto;
    transition: all ${buttonHoverAnimationTimeMs}ms ease-in;
  }

  &:hover {
    background-image: linear-gradient(
      ${(props) => props.gradientDirection},
      #ffffff33,
      #00000000
    );
    transition: all ${buttonHoverAnimationTimeMs}ms ease-in;
  }

  &:hover > .${buttonIconClassName} {
    color: #ffffffff;
    transform: scale(110%);
    transition: all ${buttonHoverAnimationTimeMs}ms ease-in;
  }

  &:active > .${buttonIconClassName} {
    transform: scale(100%);
    transition: all ${buttonActiveAnimationTimeMs}ms ease-in;
  }
`

// Component Props & Export

type ProjectMediaPreviewProps = {
  children: ReactNode
}

function ProjectMediaPreview({ children }: ProjectMediaPreviewProps) {
  const mediaNodes = Children.toArray(children)

  function onPressLeftArrow() {}

  function onPressRightArrow() {}

  return (
    <MediaPreviewContainerStyledDiv>
      <MediaNavigationStyledButton
        onClick={onPressLeftArrow}
        gradientDirection="to right"
      >
        <MdArrowBackIos className={buttonIconClassName} />
      </MediaNavigationStyledButton>
      <MediaCenterStyledDiv>
        {mediaNodes.map((node) => node)}
      </MediaCenterStyledDiv>
      <MediaNavigationStyledButton
        onClick={onPressRightArrow}
        gradientDirection="to left"
      >
        <MdArrowForwardIos className={buttonIconClassName} />
      </MediaNavigationStyledButton>
    </MediaPreviewContainerStyledDiv>
  )
}

export default ProjectMediaPreview
