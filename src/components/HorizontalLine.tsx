import styled from "styled-components"
import { PageVerticalMargin } from "./StyledComponents"

const LineStyledDiv = styled.div`
  ${PageVerticalMargin}
  border: solid 2px var(--color-accent);
`

function HorizontalLine() {
  return <LineStyledDiv />
}

export default HorizontalLine
