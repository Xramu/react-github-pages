import React from "react"
import styled from "styled-components"
import { MdCircle } from "react-icons/md"
import { BouncyClickAnimationsCSS } from "../StyledComponents"

// Animation Constants

const dotHoverAnimationTimeMs = 100

// Styled Components

const MediaPreviewNavigationBarStyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
`

const selectedDotClassName = "selected-navigation-dot"

const MediaPreviewNavigationStyledDot = styled(MdCircle)`
  ${BouncyClickAnimationsCSS}
  cursor: pointer;
  color: #ffffff33;
  font-size: 2cqi;

  &.${selectedDotClassName} {
    color: #ffffff88;
  }

  &:hover {
    color: #ffffffff;
  }

  transition: color ${dotHoverAnimationTimeMs}ms ease-in;
`

// Component Props & Export

type MediaPreviewNavigationBarProps = {
  itemAmount: number
  currentlySelectedItem: number
  onItemSelected: (selectedItem: number) => void
}

function MediaPreviewNavigationBar({
  itemAmount,
  currentlySelectedItem,
  onItemSelected,
}: MediaPreviewNavigationBarProps) {
  return (
    <MediaPreviewNavigationBarStyledDiv>
      {[...Array(itemAmount)].map((x, index) => (
        <MediaPreviewNavigationStyledDot
          className={
            index === currentlySelectedItem ? selectedDotClassName : ""
          }
          onClick={() => onItemSelected(index)}
          key={index}
        />
      ))}
    </MediaPreviewNavigationBarStyledDiv>
  )
}

export default MediaPreviewNavigationBar
