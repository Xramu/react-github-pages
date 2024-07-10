import React from "react"
import styled from "styled-components"
import { MediaPreviewMediaItemCSS } from "./StyledComponents"

// Styled Components

const EmbedYoutubeVideoStyledIFrame = styled.iframe`
  ${MediaPreviewMediaItemCSS}
  aspect-ratio: 16 / 9;
  height: auto;
  width: 100%;
`

// Component Props & Export

type MediaPreviewYoutubeItemProps = {
  url: URL
}

function MediaPreviewYoutubeItem({ url }: MediaPreviewYoutubeItemProps) {
  return (
    <EmbedYoutubeVideoStyledIFrame
      src={url.toString()}
      title="YouTube video player"
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
    />
  )
}

export default MediaPreviewYoutubeItem
