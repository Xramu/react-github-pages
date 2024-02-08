import React from "react";

function ToolIcon(props: { src: string; alt: string; link?: string }) {
  let icon = <img className="Tool-icon" alt={props.alt} src={props.src} />;

  if (props.link && props.link.length > 0) {
    icon = (<a className="Tool-icon-link" href={props.link}>{icon}</a>)
  }

  return icon;
}

export default ToolIcon;
