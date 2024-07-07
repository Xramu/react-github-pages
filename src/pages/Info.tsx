import React from "react"

import PersonalInfo from "../components/info/PersonalInfo"
import ProjectsInfo from "../components/info/ProjectsInfo"
import HorizontalLine from "../components/HorizontalLine"
import PageContainer from "./PageContainer"

function InfoView() {
  return (
    <PageContainer>
      <PersonalInfo />
      <HorizontalLine />
      <ProjectsInfo />
    </PageContainer>
  )
}

export default InfoView
