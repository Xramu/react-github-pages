import React from "react";
import colors from "../utils/Colors.json"
import { SocialIcon } from "react-social-icons";

function SocialButton(props: {url : string}) {
  return <SocialIcon bgColor={colors["primary-color"]} url={props.url}/>;
}

export default SocialButton;
