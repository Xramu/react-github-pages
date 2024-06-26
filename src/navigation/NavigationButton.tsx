import React from "react"

type NavigationButtonProps = {
  onClick: Function
  text: string
}

function NavigationButton({ onClick, text }: NavigationButtonProps) {
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
