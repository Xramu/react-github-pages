import React from "react";

function ToolIcon(props: { src: string; alt: string }) {
  return (
    <img
      className="Tool-icon"
      alt={props.alt}
      src={props.src}
    />
  );
}

export default ToolIcon;
