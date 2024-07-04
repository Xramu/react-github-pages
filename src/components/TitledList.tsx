import React, { ReactNode } from "react"

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
    <div className="Page-inline-list">
      {title && <h3>{title}</h3>}
      {createListFromNodes(listItems)}
    </div>
  )
}

export default TitledList
