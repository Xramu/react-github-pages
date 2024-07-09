import React, { ComponentPropsWithoutRef, ReactNode } from "react"
import styled from "styled-components"
import { BouncyClickAnimationsCSS } from "./StyledComponents"

// Animation Constants

const inactiveButtonName = "Info-tab-button-inactive"
const activeButtonName = "Info-tab-button-active"

// Styled Components

const StyledInfoButton = styled.button`
  &.${inactiveButtonName} {
    ${BouncyClickAnimationsCSS}
    cursor: pointer;
    font-size: calc(10px + 1vmin);
    margin: 10px 0px 0px 0px;

    border: none;
    border-bottom: solid 2px var(--primary-text-color);
    color: var(--primary-text-color);
    background-color: #00000000;
    transition: all var(--info-tab-button-animation-speed) ease-in;

    &:hover {
      border-bottom: solid 4px var(--primary-text-color);
      transition: all var(--info-tab-button-animation-speed) ease-in;
    }
  }

  &.${activeButtonName} {
    cursor: auto;
    font-size: calc(10px + 1vmin);
    margin: 10px 0px 0px 0px;

    border: none;
    border-bottom: solid 4px var(--primary-color);
    color: var(--primary-text-color);
    background-color: #00000000;
    transition: all var(--info-tab-button-animation-speed) ease-in;
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
    <StyledInfoButton
      className={selected ? activeButtonName : inactiveButtonName}
      {...rest}
    >
      {children ? children : <></>}
    </StyledInfoButton>
  )
}

export default InfoTabButton
