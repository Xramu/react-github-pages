import React from "react"
import MediaPreview from "../../../media/MediaPreview"
import MediaPreviewImageItem from "../../../media/MediaPreviewImageItem"
import MediaPreviewYoutubeItem from "../../../media/MediaPreviewYoutubeItem"

import RamusRangeBanner from "../../../../img/ramus_range/RamusRangeBanner.jpg"

// Images

const GunRangeBannerPicture = () => (
  <MediaPreviewImageItem
    src={RamusRangeBanner}
    alt="Banner of Ramu's Gun Range"
  >
    <p>Banner of the Gun Range Experience</p>
  </MediaPreviewImageItem>
)

// Videos

const FurryGunRangeVideo = () => (
  <MediaPreviewYoutubeItem
    url={
      new URL("https://www.youtube.com/embed/PiHyEHoeFao?si=Gwx9oMGYv4x3O2H5")
    }
  />
)

const JapaneseFoxGunRangeVideo = () => (
  <MediaPreviewYoutubeItem
    url={
      new URL("https://www.youtube.com/embed/SmYlYPNIFCQ?si=CBqLcSLthYP1k4_k")
    }
  />
)

// Component Export

function Media() {
  return (
    <MediaPreview>
      <GunRangeBannerPicture />
      <FurryGunRangeVideo />
      <JapaneseFoxGunRangeVideo />
    </MediaPreview>
  )
}

export default Media
