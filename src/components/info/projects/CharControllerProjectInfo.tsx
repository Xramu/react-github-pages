import React from "react"
import ProjectTitle from "../ProjectTitle"
import ProjectInfoDropdownBox from "../ProjectInfoDropdownBox"
import { StringReactNodePair } from "../../../utils/Types"
import ProjectSummary from "../ProjectSummary"
import SocialButton from "../../SocialButton"

const detailsInfoSet: StringReactNodePair = {
  string: "Details",
  node: (
    <p>
      This is a small character controller demo I made using Unity and C#.
      <br />
      The movement system includes different animations for any rigged humanoid
      set as the player model.
      <br />
      Support for changing between first-person and third-person views.
    </p>
  ),
}

const movementsInfoSet: StringReactNodePair = {
  string: "Movement",
  node: (
    <>
      <p>
        The different types of movements and features of the controller include:
      </p>

      <li>Smoothed acceleration and deceleration when moving</li>
      <li>Walking, running and sprinting</li>
      <li>Going under obstacles by crouching</li>
      <li>Jump heigh that can be controlled by the button press length</li>
      <li>Smoothed out air control when the player is airborne</li>

      <p>
        Everything is exposed and customizable through the editor window on the
        player controller script.
      </p>
    </>
  ),
}

const cameraInfoSet: StringReactNodePair = {
  string: "Camera",
  node: (
    <>
      <p>Camera control and features:</p>
      <li>Toggling between first-person and third-person</li>
      <li>
        Looking around while keeping your movement direction when using the free
        look mode
      </li>
      <li>
        Dynamic camera preventing occlusion behind obstacles when in
        third-person
      </li>
      <p>
        The camera also includes a small dynamic field of view change based on
        the character's speed.
      </p>
    </>
  ),
}

const inputInfoSet: StringReactNodePair = {
  string: "Input",
  node: (
    <p>
      In addition to mouse and keyboard, the project has Unity's Input System
      set up to allow the player to control the character with a gamepad.
    </p>
  ),
}

function CharControllerProjectInfo() {
  return (
    <>
      <ProjectTitle>
        First-Person and Third-Person Character Controller Demo
      </ProjectTitle>

      <SocialButton
        fgColor={"var(--color-text-primary)"}
        bgColor={"var(--color-primary)"}
        url="https://github.com/Xramu/Player-Controller-Demo"
      />

      <ProjectSummary>
        Character controller Unity project.
        <br />
        The goal was to create a character controller capable of platforming and
        running through obstacle courses.
      </ProjectSummary>

      <ProjectInfoDropdownBox
        tileInfoSets={[
          detailsInfoSet,
          movementsInfoSet,
          cameraInfoSet,
          inputInfoSet,
        ]}
      />
    </>
  )
}

export default CharControllerProjectInfo
