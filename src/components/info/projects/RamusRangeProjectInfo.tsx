import RamusRangeBanner from "../../../img/ramus_range/RamusRangeBanner.jpg"
import ProjectInfoDropdownBox from "../ProjectInfoDropdownBox"
import { StringReactNodePair } from "../../../utils/Types"
import ProjectImage from "../ProjectImage"
import ProjectTitle from "../ProjectTitle"
import ProjectSummary from "../ProjectSummary"

// Info Tabs of this project

const detailsInfoSet: StringReactNodePair = {
  string: "Details",
  node: (
    <p>
      This project is fully programmed by me using C# and VRChat's exposed Unity
      API.
      <br />
      The experience has been visited over 450,000 times and is available for
      anyone who has access to VRChat.
      <br />
      The world can be found{" "}
      <a href="https://vrchat.com/home/launch?worldId=wrld_9870aa37-916c-4e90-ba71-b8703c8204b3">
        Here
      </a>{" "}
      or through VRChat's in-game world search.
    </p>
  ),
}

const codeInfoSet: StringReactNodePair = {
  string: "Code",
  node: (
    <p>
      I heavily use object-oriented programming (
      <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">
        OOP
      </a>
      ) for sharing functionality between different guns and challenges.
      <br />
      Total length of the written code exceeds over 20,000 lines including
      comments and summaries.
    </p>
  ),
}

const environmentInfoSet: StringReactNodePair = {
  string: "Environment",
  node: (
    <p>
      The environment and lighting is fully set up and made by me using Unity's
      baked lighting, baked reflections and occlusion culling.
      <br />
      For modelling the environment and small furniture sets, I used Unity's
      ProBuilder package.
    </p>
  ),
}

const gunsAndModelsInfoSet: StringReactNodePair = {
  string: "Gun Models & Sounds",
  node: (
    <p>
      Almost all of the 3D gun models are bought from{" "}
      <a href="https://tomcattoybox.booth.pm/">Tomcat's Booth Store.</a>
      <br />
    </p>
  ),
}

// Component export

function RamusRangeProjectInfo() {
  return (
    <div>
      <ProjectTitle>Ramu's Gun Range</ProjectTitle>

      <ProjectSummary>
        Ramu's Gun Range is an interactive VRChat shooting range experience with
        detailed gunplay and functionality created with Unity and C#.
      </ProjectSummary>

      <ProjectImage src={RamusRangeBanner} alt="Banner of Ramu's Gun Range" />

      <ProjectInfoDropdownBox
        tileInfoSets={[
          detailsInfoSet,
          codeInfoSet,
          environmentInfoSet,
          gunsAndModelsInfoSet,
        ]}
      />
    </div>
  )
}

export default RamusRangeProjectInfo
