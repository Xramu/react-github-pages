import React from "react"

function NavigationButton(props: { onClick: Function; text: string }) {
  return (
    <button
      className="Navigation-button"
      onClick={() => {
        props.onClick()
      }}
    >
      {props.text}
    </button>
  )
}

export default NavigationButton
