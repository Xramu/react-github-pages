import React, { ComponentPropsWithoutRef, ReactNode } from "react"
import styled from "styled-components"
import { MediaPreviewMediaItemCSS } from "../StyledComponents"

// TODO: Get rid of empty space from the sides of the images that are not wide enough

// Styled Components

const ContainerStyledDiv = styled.div`
  ${MediaPreviewMediaItemCSS}
  display: flex;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(102%);
  }

  &:active {
    transform: scale(98%);
    transition: all var(--animation-speed-active-default) ease-in;
  }

  transition: all var(--animation-speed-hover-default) ease-in;
`

const ProjectStyledImage = styled.img`
  background-color: var(--color-shadow-primary);
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: pointer;
`

const AbsoluteInfoDiv = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 0;

  justify-content: center;
  text-align: center;

  background-color: #3336;
  p {
    font-size: min(2cqi, var(--font-size-primary));
    margin: 1cqi;
  }
`

// Component Props & Export

type ProjectImageProps = ComponentPropsWithoutRef<"img"> & {
  children?: ReactNode
}

function MediaPreviewImageItem({ children, alt, ...rest }: ProjectImageProps) {
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
    <ContainerStyledDiv>
      <ProjectStyledImage
        {...rest}
        id="mediaPreviewImage"
        onClick={onImageClick}
        alt={alt ? alt : "No Description Given"}
      />
      {children ? <AbsoluteInfoDiv>{children}</AbsoluteInfoDiv> : <></>}
    </ContainerStyledDiv>
  )
}

export default MediaPreviewImageItem
