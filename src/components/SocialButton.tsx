import React from "react"
import colors from "../utils/Colors.json"
import { SocialIcon } from "react-social-icons"

function SocialButton(props: { url: string }) {
  return (
    <SocialIcon
      className="Socials-icon"
      fgColor={colors["primary-text-color"]}
      bgColor={colors["secondary-color"]}
      url={props.url}
    />
  )
}

export default SocialButton
