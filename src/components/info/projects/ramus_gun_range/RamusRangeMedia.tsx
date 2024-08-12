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

const DemoVideo = () => (
  <MediaPreviewYoutubeItem
    url={
      new URL("https://www.youtube.com/embed/hUw9CITWAxU?si=wyPKJLEpNQCIUr46")
    }
  />
)

const TopGunMapVideo = () => (
  <MediaPreviewYoutubeItem
    url={
      new URL(
        "https://www.youtube.com/embed/PW2583SlGcQ?si=Ywv_XkR_9nQ45VVK&amp;start=252",
      )
    }
  />
)

const FurryGunRangeVideo = () => (
  <MediaPreviewYoutubeItem
    url={
      new URL("https://www.youtube.com/embed/PiHyEHoeFao?si=Gwx9oMGYv4x3O2H5")
    }
  />
)

const LockedAndLoadedVideo = () => (
  <MediaPreviewYoutubeItem
    url={
      new URL("https://www.youtube.com/embed/CSezAolVc0s?si=OWOcZP9EhqjfIokq")
    }
  />
)

const ThisIsVRChatVideo = () => (
  <MediaPreviewYoutubeItem
    url={
      new URL("https://www.youtube.com/embed/EvrMVE26BWc?si=-0dtLb551CNViaRT")
    }
  />
)

const CursedGunsVideo = () => (
  <MediaPreviewYoutubeItem
    url={
      new URL("https://www.youtube.com/embed/SK1-cckmu60?si=ElRZk-if-QAChyta")
    }
  />
)

const JapaneseFoxVideo = () => (
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
      <TopGunMapVideo />
      <JapaneseFoxVideo />
      <FurryGunRangeVideo />
      <ThisIsVRChatVideo />
      <LockedAndLoadedVideo />
      <CursedGunsVideo />
      <DemoVideo />
    </MediaPreview>
  )
}

export default Media
