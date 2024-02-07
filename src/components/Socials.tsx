import React from "react";
import SocialButton from "./SocialButton";

// TODO: Use react-social-icons to create a row of social links
function Socials() {
  return (
    <div className="Socials-row">
      <SocialButton url="https://twitter.com/_Xramu"/>
      <SocialButton url="https://github.com/Xramu"/>
    </div>
  );
}

export default Socials;
