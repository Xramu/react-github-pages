import React from "react"
import colors from "../utils/Colors.json"
import { SocialIcon } from "react-social-icons"

type SocialButtonProps = {
  url: string
  fgColor?: string
  bgColor?: string
}

function SocialButton({ url, fgColor, bgColor }: SocialButtonProps) {
  fgColor = fgColor || colors["primary-text-color"]
  bgColor = bgColor || colors["secondary-color"]

  return (
    <SocialIcon
      className="Socials-icon"
      fgColor={fgColor}
      bgColor={bgColor}
      url={url}
    />
  )
}

export default SocialButton
