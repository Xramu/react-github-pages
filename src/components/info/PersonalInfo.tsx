import React from "react";

import ToolIcon from "./ToolIcon";

function getLanguagesRow() {
  return (
    <div className="Tool-icon-row">
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
        link="https://learn.microsoft.com/en-us/dotnet/csharp/"
        alt="C#"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
        link="https://isocpp.org/"
        alt="C++"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
        link="https://en.wikipedia.org/wiki/C_(programming_language)"
        alt="C"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        link="https://www.java.com/en/"
        alt="Java"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
        link="https://kotlinlang.org/"
        alt="Kotlin"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        alt="JavaScript"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        link="https://www.typescriptlang.org/"
        alt="TypeScript"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg"
        link="https://www.lua.org/"
        alt="Lua"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        link="https://developer.mozilla.org/en-US/docs/Web/HTML"
        alt="HTML"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        alt="CSS"
      />
    </div>
  );
}

function getToolsRow() {
  return (
    <div className="Tool-icon-row">
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
        link="https://unity.com/"
        alt="Unity"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        link="https://react.dev/"
        alt="React"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
        link="https://developer.android.com/studio"
        alt="Android Studio"
      />
      <ToolIcon
        src="https://upload.wikimedia.org/wikipedia/commons/5/58/Roblox_Studio_logo_2021_present.svg"
        link="https://create.roblox.com/"
        alt="Roblox Studio"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg"
        link="https://visualstudio.microsoft.com/"
        alt="Visual Studio"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
        link="https://code.visualstudio.com/"
        alt="Visual Studio Code"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        link="https://nodejs.org/en"
        alt="Node.js"
      />
      <ToolIcon
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        link="https://git-scm.com/"
        alt="Git"
      />
    </div>
  );
}

function PersonalInfo() {
  return (
    <div>
      <h1>About Me</h1>

      <p>
        Hi, I am known as Xramu online and I am a game and software developer
        from Espoo, Finland.
        <br />I enjoy solving problems and learning something new from them!
      </p>

      <h2>What I Am Familiar With</h2>

      {getLanguagesRow()}
      {getToolsRow()}

      <div className="Page-inline">
        <div className="Page-inline-list">
          <h3>Programming Languages</h3>
          <ul>
            <li>C#, C++ & C</li>
            <li>Java & Kotlin</li>
            <li>JavaScript & TypeScript</li>
            <li>Lua & Luau</li>
            <li>HTML & CSS</li>
          </ul>
        </div>

        <div className="Page-inline-list">
          <h3>Frameworks & Tools</h3>
          <ul>
            <li>Unity</li>
            <li>React & React Native</li>
            <li>Android Studio</li>
            <li>Roblox Studio</li>
            <li>Visual Studio & VSCode</li>
            <li>Node.js</li>
            <li>Git</li>
          </ul>
        </div>

        <div className="Page-inline-list">
          <h3>Other Skills</h3>
          <ul>
            <li>Scrum and week-based sprints</li>
            <li>Object-oriented principles & patterns</li>
            <li>Keeping code readable and commented</li>
          </ul>
        </div>
      </div>

      <p>
        Learning new frameworks, languages, language features and tools gives me
        satisfaction as I look back at all that I've learned.
      </p>
    </div>
  );
}

export default PersonalInfo;
