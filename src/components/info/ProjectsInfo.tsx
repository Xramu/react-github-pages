import React from "react";
import HorizontalLine from "../HorizontalLine";

function ProjectsInfo() {
  return (
    <div className="Page-section">
      <h1>Unity Projects</h1>

      <h2><u>Ramu's Gun Range</u></h2>

      <p>
        Ramu's Gun Range is an interactive VRChat shooting range experience with
        detailed gunplay and functionality created with Unity and C#.
      </p>

      <h3>Details</h3>

      <p>
        This project is fully programmed by me using C# and VRChat's exposed
        Unity API.
        <br />
        The experience has been visited over 450,000 times and is available for
        anyone who has access to VRChat.
        <br />
        The world can be found{" "}
        <a href="https://vrchat.com/home/launch?worldId=wrld_9870aa37-916c-4e90-ba71-b8703c8204b3">
          Here
        </a>{" "}
        or through VRChat's in-game world search.
      </p>

      <h4>Code</h4>

      <p>
        I heavily use object-oriented programming (
        <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">
          OOP
        </a>
        ) for sharing functionality between different guns and challenges.
        <br />
        Total length of the written code exceeds over 20,000 lines including
        comments and summaries.
      </p>

      <h4>Environment</h4>

      <p>
        The environment and lighting is fully set up and made by me using
        Unity's baked lighting, baked reflections and occlusion culling.
        <br />
        For modelling the environment and small furniture sets, I used Unity's
        ProBuilder package.
      </p>

      <h4>Gun Models & Sounds</h4>

      <p>
        Almost all of the 3D gun models are bought from{" "}
        <a href="https://tomcattoybox.booth.pm/">Tomcat's Booth Store.</a>
        <br />
      </p>

      <h2><u>First-Person and Third-Person Character Controller Demo</u></h2>

      <HorizontalLine />

      <h1>React Projects</h1>

      <h2><u>Github Page</u></h2>

      <h2><u>Yahtzee Scoreboard App</u></h2>
    </div>
  );
}

export default ProjectsInfo;
