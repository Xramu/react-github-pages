import React from "react"

function ToolIcon({
  src,
  alt,
  link,
}: {
  src?: string
  alt?: string
  link?: string
}) {
  // Cleate image
  let icon = <img className="Tool-icon" alt={alt} src={src} />

  // Add possible anchor
  if (link && link.length > 0) {
    icon = (
      <a
        className="Tool-icon-link"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {icon}
      </a>
    )
  }

  // Add everything into a container with a paragraph at the bottom
  icon = (
    <div className="Tool-icon-container">
      {icon}
      <p className="Tool-icon-container-text">{alt}</p>
    </div>
  )

  return icon
}

export { ToolIcon }
