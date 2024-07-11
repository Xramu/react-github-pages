import React, { ReactNode } from "react"
import styled from "styled-components"

// Styled Components

const TitledListStyledDiv = styled.div``

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
      {title && <h3>{title}</h3>}
      {createListFromNodes(listItems)}
    </TitledListStyledDiv>
  )
}

export default TitledList
