import React, { ReactNode } from "react"
import styled from "styled-components"

// Styled Components

const PageContainerStyledDiv = styled.div`
  width: 100%;
`

// Component Props & Export

type PageContainerProps = {
  children?: ReactNode
}

function PageContainer({ children }: PageContainerProps) {
  return <PageContainerStyledDiv>{children ?? children}</PageContainerStyledDiv>
}

export default PageContainer
