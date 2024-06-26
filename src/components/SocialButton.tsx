import React from "react"
import colors from "../utils/Colors.json"
import { SocialIcon } from "react-social-icons"

type SocialButtonProps = {
  url: string
}

function SocialButton({ url }: SocialButtonProps) {
  return (
    <SocialIcon
      className="Socials-icon"
      fgColor={colors["primary-text-color"]}
      bgColor={colors["secondary-color"]}
      url={url}
    />
  )
}

export default SocialButton
