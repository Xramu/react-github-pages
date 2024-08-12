import React from "react"
import { StringReactNodePair } from "../../../../utils/Types"
import ProjectInfoDropdownBox from "../../ProjectInfoDropdownBox"
import RamusRangeSocialMedia from "./RamusRangeSocialMedia"
import NewTabAnchor from "../../../NewTabAnchor"

const detailsInfoSet: StringReactNodePair = {
  string: "Details",
  node: (
    <p>
      This project is fully programmed by me using C# and VRChat's exposed Unity
      API.
      <br />
      The experience has been visited over 600,000 times and is available for
      anyone who has access to VRChat.
      <br />
      The world can be found{" "}
      <NewTabAnchor href="https://vrchat.com/home/launch?worldId=wrld_9870aa37-916c-4e90-ba71-b8703c8204b3">
        Here
      </NewTabAnchor>{" "}
      or through VRChat's in-game world search.
    </p>
  ),
}

const codeInfoSet: StringReactNodePair = {
  string: "Code",
  node: (
    <p>
      I heavily use object-oriented programming (
      <NewTabAnchor href="https://en.wikipedia.org/wiki/Object-oriented_programming">
        OOP
      </NewTabAnchor>
      ) for sharing functionality between different guns and challenges
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
  string: "Assets",
  node: (
    <p>
      3D gun models are bought from{" "}
      <NewTabAnchor href="https://tomcattoybox.booth.pm/">
        Tomcat's Booth Store.
      </NewTabAnchor>
      <br />
      All of the audio is{" "}
      <NewTabAnchor href="https://creativecommons.org/public-domain/cc0/">
        CC0
      </NewTabAnchor>{" "}
      licensed downloaded from{" "}
      <NewTabAnchor href="https://freesound.org/">Freesound.org</NewTabAnchor>
    </p>
  ),
}

const socialMediaInfoSet: StringReactNodePair = {
  string: "Social Media",
  node: <RamusRangeSocialMedia />,
}

function Details() {
  return (
    <ProjectInfoDropdownBox
      tileInfoSets={[
        detailsInfoSet,
        codeInfoSet,
        environmentInfoSet,
        gunsAndModelsInfoSet,
        socialMediaInfoSet,
      ]}
    />
  )
}

export default Details
