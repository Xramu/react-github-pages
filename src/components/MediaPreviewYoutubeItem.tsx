import React from "react"

type ProjectVideoProps = {
  url: URL
}

function ProjectVideo({ url }: ProjectVideoProps) {
  return <div>{url.toString()}</div>
}

export default ProjectVideo
