import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/aarohi.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a final year student who loves to build robust real-time models
              Artificial Intelligence solutions. Over time, I've explored with many 
              tools and technologies and found my interests to lie in developing 
              Machine Learning solutions. 
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  C++, Python, SQL, and JavaScript{" "}
                </b>
              </i>
              — and I enjoy working to develop AI and ML frameworks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Machine Learning Models, LangChain Solutions,{" "}
                </b>
              </i>
              and exploring new ways to build automated systems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Python </b> and modern frameworks like{" "}
              <i>
                <b className="purple">PyTorch</b> and{" "}
                <b className="purple">TensorFlow</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
