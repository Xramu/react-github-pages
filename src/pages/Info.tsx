import React from "react";

import PersonalInfo from "../components/info/PersonalInfo";
import ProjectsInfo from "../components/info/ProjectsInfo";

function InfoView() {
  return (
    <div>
      <PersonalInfo />
      <ProjectsInfo />
    </div>
  );
}

export default InfoView;
