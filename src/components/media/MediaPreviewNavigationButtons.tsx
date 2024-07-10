import React from "react"
import styled from "styled-components"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"

const arrowButtonHoverAnimationTimeMs = 150
const arrowButtonActiveAnimationTimeMs = 70

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

export function MediaPreviewLeftNavigationButton(props: {
  onClick: () => void
}) {
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

export function MediaPreviewRightNavigationButton(props: {
  onClick: () => void
}) {
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
