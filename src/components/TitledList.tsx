import React, { ReactNode } from "react"
import styled from "styled-components"

// Styled Components

const TitledListStyledDiv = styled.div``

const TitledListHeaderStyledH3 = styled.h3`
  margin-top: 0;
`

// Component Props & Export

type TitledListProps = {
  title?: string
  listItems: ReactNode[]
}

function createListFromNodes(listItems: ReactNode[]): ReactNode {
  return listItems.map((item) => {
    return <li key={item?.toString()}>{item}</li>
  })
}

function TitledList({ title, listItems }: TitledListProps) {
  return (
    <TitledListStyledDiv>
      {title && <TitledListHeaderStyledH3>{title}</TitledListHeaderStyledH3>}
      {createListFromNodes(listItems)}
    </TitledListStyledDiv>
  )
}

export default TitledList
