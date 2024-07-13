import React, { ComponentPropsWithoutRef } from "react"
import styled from "styled-components"
import { MediaPreviewMediaItemCSS } from "../StyledComponents"

// Styled Components

const ProjectStyledImage = styled.img`
  ${MediaPreviewMediaItemCSS}
  cursor: pointer;

  &:hover {
    transform: scale(102%);
  }

  &:active {
    transform: scale(98%);
    transition: all var(--animation-speed-active-default) ease-in;
  }

  transition: all var(--animation-speed-hover-default) ease-in;
`

// Component Props & Export

type ProjectImageProps = ComponentPropsWithoutRef<"img"> & {}

function MediaPreviewImageItem(props: ProjectImageProps) {
  function onImageClick() {
    // Exit when already in fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen()
      return
    }

    // Fullscreen the image
    document.querySelector("#mediaPreviewImage")?.requestFullscreen()
  }

  return (
    <ProjectStyledImage
      {...props}
      id="mediaPreviewImage"
      onClick={onImageClick}
      alt={props.alt ? props.alt : "No Description Given"}
    />
  )
}

export default MediaPreviewImageItem
