import React from "react";

function PersonalInfo() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi, I am known as Xramu online and I am a game and software developer
        from Espoo, Finland.
        <br />
        I enjoy solving problems and learning something new from them!
      </p>
      <h2>What I Am Familiar With</h2>
      <div className="Page-inline">
        <div>
          <h3>Programming Languages</h3>
          <ul>
            <li>C#, C++, C</li>
            <li>Java, Kotlin</li>
            <li>JavaScript, TypeScript</li>
            <li>Lua, Luau</li>
          </ul>
        </div>
        <div>
          <h3>Frameworks & Tools</h3>
          <ul>
            <li>Unity</li>
            <li>React & React Native</li>
            <li>Android Studio</li>
            <li>Roblox Studio</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
      <p>Learning new frameworks, languages, language features and tools gives me satisfaction as I look back at all that I've learned.</p>
    </div>
  );
}

export default PersonalInfo;
