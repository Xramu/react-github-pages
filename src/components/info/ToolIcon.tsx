import React from "react";

function ToolIcon(props: { src?: string; alt?: string; link?: string }) {
  // Cleate image
  let icon = <img className="Tool-icon" alt={props.alt} src={props.src} />;

  // Add possible anchor
  if (props.link && props.link.length > 0) {
    icon = (
      <a
        className="Tool-icon-link"
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
      >
        {icon}
      </a>
    );
  }

  // Add everything into a container with a paragraph at the bottom
  icon = (
    <div className="Tool-icon-container">
      {icon}
      <p className="Tool-icon-container-text">{props.alt}</p>
    </div>
  );

  return icon;
}

export { ToolIcon };
