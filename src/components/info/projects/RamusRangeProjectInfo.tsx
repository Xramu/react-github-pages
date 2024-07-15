import RamusRangeBanner from "../../../img/ramus_range/RamusRangeBanner.jpg"
import Mahiro from "../../../img/mahiro.png"
import TestImageHorizontal from "../../../img/test_images/test_image_horizontal.png"
import TestImageHorizontalLong from "../../../img/test_images/test_image_horizontal_long.png"
import TestImageVertical from "../../../img/test_images/test_image_vertical.png"
import TestImageVerticalLong from "../../../img/test_images/test_image_vertical_long.png"
import ProjectInfoDropdownBox from "../ProjectInfoDropdownBox"
import { StringReactNodePair } from "../../../utils/Types"
import ProjectTitle from "../ProjectTitle"
import ProjectSummary from "../ProjectSummary"
import MediaPreview from "../../media/MediaPreview"
import MediaPreviewImageItem from "../../media/MediaPreviewImageItem"
import MediaPreviewYoutubeItem from "../../media/MediaPreviewYoutubeItem"
import { useTranslation } from "react-i18next"

// Project Videos

const projectVideoUrlStrings = [
  "https://www.youtube.com/embed/PiHyEHoeFao?si=Gwx9oMGYv4x3O2H5",
  "https://www.youtube.com/embed/SmYlYPNIFCQ?si=CBqLcSLthYP1k4_k",
]

// Component export

function RamusRangeProjectInfo() {
  const { t } = useTranslation()

  // Info Tabs of this project

  const detailsInfoSet: StringReactNodePair = {
    string: t("info.projects.ramus-gun-range.details-tab.title"),
    node: (
      <p>
        {t("info.projects.ramus-gun-range.details-tab.text-first") + " "}
        <a href="https://vrchat.com/home/launch?worldId=wrld_9870aa37-916c-4e90-ba71-b8703c8204b3">
          {t("info.projects.ramus-gun-range.details-tab.text-world-link")}
        </a>{" "}
        {t("info.projects.ramus-gun-range.details-tab.text-second")}
      </p>
    ),
  }

  const codeInfoSet: StringReactNodePair = {
    string: t("info.projects.ramus-gun-range.code-tab.title"),
    node: (
      <p>
        {t("info.projects.ramus-gun-range.code-tab.text-first")} (
        <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">
          OOP
        </a>
        ) {t("info.projects.ramus-gun-range.code-tab.text-second")}
      </p>
    ),
  }

  const environmentInfoSet: StringReactNodePair = {
    string: t("info.projects.ramus-gun-range.environment-tab.title"),
    node: <p>{t("info.projects.ramus-gun-range.environment-tab.text")}</p>,
  }

  const gunsAndModelsInfoSet: StringReactNodePair = {
    string: t("info.projects.ramus-gun-range.assets-tab.title"),
    node: (
      <p>
        {t("info.projects.ramus-gun-range.assets-tab.text-first") + " "}
        <a href="https://tomcattoybox.booth.pm/">
          {t("info.projects.ramus-gun-range.assets-tab.text-link-tomcat")}
        </a>
        <br />
        {t("info.projects.ramus-gun-range.assets-tab.text-second") + " "}
        <a href="https://creativecommons.org/public-domain/cc0/">CC0</a>{" "}
        {t("info.projects.ramus-gun-range.assets-tab.text-third") + " "}
        <a href="https://freesound.org/">Freesound.org</a>
      </p>
    ),
  }

  return (
    <>
      <ProjectTitle>Ramu's Gun Range</ProjectTitle>

      <ProjectSummary>
        {t("info.projects.ramus-gun-range.summary")}
      </ProjectSummary>

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

      <ProjectInfoDropdownBox
        tileInfoSets={[
          detailsInfoSet,
          codeInfoSet,
          environmentInfoSet,
          gunsAndModelsInfoSet,
        ]}
      />
    </>
  )
}

export default RamusRangeProjectInfo
