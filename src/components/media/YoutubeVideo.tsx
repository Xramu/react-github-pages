import React from "react"
import styled from "styled-components"
import { MediaPreviewMediaItemCSS } from "../StyledComponents"

// Styled Components

const EmbedYoutubeVideoStyledIFrame = styled.iframe`
  ${MediaPreviewMediaItemCSS}
  aspect-ratio: 16 / 9;
  width: 80%;
  margin: auto;
`

// Component Props & Export

type YoutubeVideoProps = {
  url: URL
}

function YoutubeVideo({ url }: YoutubeVideoProps) {
  return (
    <EmbedYoutubeVideoStyledIFrame
      src={url.toString()}
      title="YouTube Video Player"
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
    />
  )
}

export default YoutubeVideo
