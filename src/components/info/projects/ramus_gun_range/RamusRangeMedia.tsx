import React from "react"
import MediaPreview from "../../../media/MediaPreview"
import MediaPreviewImageItem from "../../../media/MediaPreviewImageItem"
import MediaPreviewYoutubeItem from "../../../media/MediaPreviewYoutubeItem"

import RamusRangeBanner from "../../../../img/ramus_range/RamusRangeBanner.jpg"
import Mahiro from "../../../../img/mahiro.png"
import TestImageHorizontal from "../../../../img/test_images/test_image_horizontal.png"
import TestImageHorizontalLong from "../../../../img/test_images/test_image_horizontal_long.png"
import TestImageVertical from "../../../../img/test_images/test_image_vertical.png"
import TestImageVerticalLong from "../../../../img/test_images/test_image_vertical_long.png"

// Video URLs

const projectVideoUrlStrings = [
  "https://www.youtube.com/embed/PiHyEHoeFao?si=Gwx9oMGYv4x3O2H5",
  "https://www.youtube.com/embed/SmYlYPNIFCQ?si=CBqLcSLthYP1k4_k",
]

// Component Export

function Media() {
  return (
    <MediaPreview>
      <MediaPreviewImageItem
        src={RamusRangeBanner}
        alt="Banner of Ramu's Gun Range"
      >
        <p>Banner of the Gun Range Experience</p>
      </MediaPreviewImageItem>
      <MediaPreviewImageItem src={TestImageHorizontal}>
        <p>1920x1080 Image</p>
      </MediaPreviewImageItem>
      <MediaPreviewImageItem src={TestImageHorizontalLong}>
        <p>3840x1080 Image</p>
      </MediaPreviewImageItem>
      <MediaPreviewImageItem src={TestImageVertical}>
        <p>1080x1920 Image</p>
      </MediaPreviewImageItem>
      <MediaPreviewImageItem src={TestImageVerticalLong}>
        <p>1080x3840 Image</p>
      </MediaPreviewImageItem>
      <MediaPreviewImageItem src={Mahiro} alt="Banner of Ramu's Gun Range">
        <p>Test Image of Mahiro Thinking</p>
      </MediaPreviewImageItem>
      {projectVideoUrlStrings.map((urlString) => (
        <MediaPreviewYoutubeItem key={urlString} url={new URL(urlString)} />
      ))}
    </MediaPreview>
  )
}

export default Media
