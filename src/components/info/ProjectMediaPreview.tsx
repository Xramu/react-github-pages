import React, { Children, ReactNode, useState } from "react"
import styled from "styled-components"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"

// TODO: Make media nodes slide smoothly left to right and vice versa

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
  const [imageId, setImageId] = useState(0)

  const mediaNodes = Children.toArray(children)

  function onPressLeftArrow() {
    // Make sure value loops back to max if about to reach negative
    setImageId(imageId - 1 < 0 ? mediaNodes.length : imageId - 1)
  }

  function onPressRightArrow() {
    // Use mod to cap the id within the array length
    setImageId((imageId + 1) % mediaNodes.length)
  }

  return (
    <MediaPreviewContainerStyledDiv>
      <MediaNavigationStyledButton
        onClick={onPressLeftArrow}
        gradientDirection="to right"
      >
        <MdArrowBackIos className={buttonIconClassName} />
      </MediaNavigationStyledButton>
      <MediaCenterStyledDiv>{mediaNodes[imageId]}</MediaCenterStyledDiv>
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
