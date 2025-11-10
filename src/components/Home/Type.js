import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Final-Year Student",
          "Indian Institute of Technology, Jodhpur",
          "BTech. in Artificial Intelligence and Data Science",
          "Undergraduate Researcher",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
