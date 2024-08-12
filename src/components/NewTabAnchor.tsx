import React, { ComponentPropsWithoutRef } from "react"

type NewTabAnchorProps = ComponentPropsWithoutRef<"a">

/**
 * Anchor element that opens the link in a new tab when clicked.
 */
function NewTabAnchor({ children, ...rest }: NewTabAnchorProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}

export default NewTabAnchor
