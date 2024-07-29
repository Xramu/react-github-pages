import { useEffect, useState } from "react"
import { Vector2 } from "../utils/Types"

/**
 * Gets current window size as Vector 2
 * @returns x as window width, y as window height.
 */
function getWindowDimensions(): Vector2 {
  return {
    x: window.innerWidth,
    y: window.innerHeight,
  }
}

/**
 * Hook that listens for window resize and updates the dimensions to the new ones.
 * @returns Hook of the window dimensions.
 */
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    function onWindowResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", onWindowResize)
    return () => window.removeEventListener("resize", onWindowResize)
  }, [])

  return windowDimensions
}

export default useWindowDimensions
