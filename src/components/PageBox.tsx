import React, { ReactNode } from "react"
import styled from "styled-components"

// Styled Components

const PageBoxStyledDiv = styled.div`
  border: solid 4px;
  border-radius: 2px;
`

// Component Props & Export

type PageBoxProps = {
  children: ReactNode
}

function PageBox({ children }: PageBoxProps) {
  return <PageBoxStyledDiv>{children}</PageBoxStyledDiv>
}

export default PageBox
