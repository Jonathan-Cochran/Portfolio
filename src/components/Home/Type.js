import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Innovator",
          "Leader",
          "Father",
          "Developer",
          "Open Source Contributor",
          "Runner... (when I remind myself)..."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
