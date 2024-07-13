import styled from "styled-components"

const LineStyledDiv = styled.div`
  margin: var(--margin-page-vertical-primary) 0px;
  border: solid 2px var(--color-accent);
`

function HorizontalLine() {
  return <LineStyledDiv />
}

export default HorizontalLine
