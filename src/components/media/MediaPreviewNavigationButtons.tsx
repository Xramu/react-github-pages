import React from "react"
import styled from "styled-components"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"

const buttonIconClassName = "button-icon"

type GradientDirection = "to right" | "to left"

const MediaNavigationStyledButton = styled.button<{
  $gradientDirection: GradientDirection
}>`
  cursor: pointer;
  background-color: #00000000;
  border: none;
  height: 100%;
  width: 10%;

  transition: all var(--animation-speed-hover-default) ease-in;

  .${buttonIconClassName} {
    opacity: 0.2;
    color: var(--color-accent);
    width: 50%;
    height: auto;
    transition: all var(--animation-speed-hover-default) ease-in;
  }

  &:hover {
    background-image: linear-gradient(
      ${(props) => props.$gradientDirection},
      #ffffff33,
      #00000000
    );
    transition: all var(--animation-speed-hover-default) ease-in;
  }

  &:hover > .${buttonIconClassName} {
    opacity: 0.6;
    transform: scale(110%);
    transition: all var(--animation-speed-hover-default) ease-in;
  }

  &:active > .${buttonIconClassName} {
    opacity: 1;
    transform: scale(100%);
    transition: all var(--animation-speed-active-default) ease-in;
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
