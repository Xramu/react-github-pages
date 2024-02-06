import React from "react";

function SocialButton(props: {text : string}) {
  return <button className="Socials-button">{props.text}</button>;
}

export default SocialButton;
