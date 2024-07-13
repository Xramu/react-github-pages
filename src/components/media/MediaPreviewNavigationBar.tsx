import React from "react"
import styled from "styled-components"
import { MdCircle } from "react-icons/md"
import { BouncyClickAnimationsCSS } from "../StyledComponents"

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
  font-size: 2cqi;

  opacity: 0.2;
  color: var(--color-accent);

  &.${selectedDotClassName} {
    opacity: 0.4;
  }

  &:hover {
    opacity: 0.6;
  }
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
