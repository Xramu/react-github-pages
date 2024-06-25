import React from "react"

import PersonalInfo from "../components/info/PersonalInfo"
import ProjectsInfo from "../components/info/ProjectsInfo"
import HorizontalLine from "../components/HorizontalLine"

function InfoView() {
  return (
    <div>
      <PersonalInfo />
      <HorizontalLine />
      <ProjectsInfo />
    </div>
  )
}

export default InfoView
