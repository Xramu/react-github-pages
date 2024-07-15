import React, { ComponentPropsWithoutRef, ReactNode } from "react"
import styled from "styled-components"
import { MediaPreviewMediaItemCSS } from "../StyledComponents"

// TODO: Get rid of empty space from the sides of the images that are not wide enough

// Styled Components

const absoluteDivClassName = "ImageTextClass"

const ContainerStyledDiv = styled.div`
  ${MediaPreviewMediaItemCSS}
  display: flex;
  justify-content: center;

  height: 100%;
  width: 100%;

  position: relative;

  overflow: hidden;

  background-color: var(--color-shadow-primary);

  &:hover {
    transform: scale(102%);

    > .${absoluteDivClassName} {
      opacity: 1;
    }
  }

  transition: all var(--animation-speed-hover-default) ease-in;
`

const ProjectStyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: pointer;
`

const AbsoluteInfoDiv = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;

  justify-content: center;
  text-align: center;

  opacity: 0;

  background-color: #2229;

  transition: all var(--animation-speed-hover-default) ease-in;

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
      {children ? (
        <AbsoluteInfoDiv className={absoluteDivClassName}>
          {children}
        </AbsoluteInfoDiv>
      ) : (
        <></>
      )}
    </ContainerStyledDiv>
  )
}

export default MediaPreviewImageItem
