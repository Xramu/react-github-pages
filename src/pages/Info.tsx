import React from "react";

import Socials from "../components/Socials";
import PersonalInfo from "../components/info/PersonalInfo";
import ProjectsInfo from "../components/info/ProjectsInfo";

function InfoView() {
  return (
    <div>
      <Socials />
      <PersonalInfo />
      <ProjectsInfo />
    </div>
  );
}

export default InfoView;
