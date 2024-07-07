import React from "react"

import logo from "../img/mahiro.png"
import PageContainer from "./PageContainer"

function NoPage() {
  return (
    <PageContainer>
      <img src={logo} alt="logo" />
      <p>404 No Page Here...</p>
    </PageContainer>
  )
}

export default NoPage
