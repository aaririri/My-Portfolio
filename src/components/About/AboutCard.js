import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I’m <span className="purple">Aarohi Dharmadhikari</span>{" "}
            from <span className="purple">Pune, Maharashtra</span>.
            <br />
            I’m currently a student at{" "}
            <span className="purple">Indian Institute of Technology, Jodhpur</span> in my{" "}
            <span className="purple">4th Semester</span> pursuing{" "} 
            <span className="purple">BTech. in Artificial Intelligence and Data Science</span>.
            
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball🏀
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking mountains⛰️
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music🎶
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Feel free to connect if you resonate with any of these!{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
