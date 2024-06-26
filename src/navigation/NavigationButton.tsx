import React from "react"

function NavigationButton({
  onClick,
  text,
}: {
  onClick: Function
  text: string
}) {
  return (
    <button
      className="Navigation-button"
      onClick={() => {
        onClick()
      }}
    >
      {text}
    </button>
  )
}

export default NavigationButton
