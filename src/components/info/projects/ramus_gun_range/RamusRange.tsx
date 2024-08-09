import React from "react"
import RamusRangeSummary from "./RamusRangeSummary"
import RamusRangeMedia from "./RamusRangeMedia"
import RamusRangeDetails from "./RamusRangeDetails"

// Component export

function RamusRangeProjectInfo() {
  // Info Tabs of this project

  return (
    <>
      <RamusRangeSummary />
      <RamusRangeMedia />
      <RamusRangeDetails />
    </>
  )
}

export default RamusRangeProjectInfo
