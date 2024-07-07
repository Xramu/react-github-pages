import React, { ComponentPropsWithoutRef, ReactNode } from "react"

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
    <button
      className={selected ? "Info-tab-button-active" : "Info-tab-button"}
      {...rest}
    >
      {children ? children : <></>}
    </button>
  )
}

export default InfoTabButton
