import React, { ComponentPropsWithoutRef, ReactNode } from "react"
import styled from "styled-components"
import { BouncyClickAnimationsCSS } from "./StyledComponents"

// Animation Constants

const activeButtonName = "Info-tab-button-active"

// Styled Components

const StyledInfoButton = styled.button`
  ${BouncyClickAnimationsCSS}

  cursor: pointer;
  margin: 10px 0px 0px 0px;
  border: none;
  border-bottom: solid 2px var(--color-text-primary);
  background-color: #00000000;

  transition: border var(--info-tab-button-animation-speed) ease-in;

  &:hover {
    border-bottom: solid 4px var(--color-text-primary);
    transition: border var(--info-tab-button-animation-speed) ease-in;
  }

  &.${activeButtonName} {
    border-bottom: solid 4px var(--color-primary);
    transition: border var(--info-tab-button-animation-speed) ease-in;
  }
`

// Components Props & Export

type InfoTabButtonProps = ComponentPropsWithoutRef<"button"> & {
  children?: ReactNode
  selected?: boolean
}

function InfoTabButton({
  children,
  selected = false,
  ...rest
}: InfoTabButtonProps) {
  return (
    <StyledInfoButton className={selected ? activeButtonName : ""} {...rest}>
      {children ? children : <></>}
    </StyledInfoButton>
  )
}

export default InfoTabButton
