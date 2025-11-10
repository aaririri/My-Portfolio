import React from "react";
import { Col, Row } from "react-bootstrap";
import Python from "../../Assets/TechIcons/Python.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
// import VSCode from "../../Assets/TechIcons/vscode.svg";
import Linux from "../../Assets/TechIcons/linux.svg";
// import Windows from "../../Assets/TechIcons/Windows.svg";
import Flask from "../../Assets/TechIcons/flask.svg";
import Pytorch from "../../Assets/TechIcons/pytorch.svg";
import Tensorflow from "../../Assets/TechIcons/tensorflow.svg";
import Pandas from "../../Assets/TechIcons/pandas.svg";
import Numpy from "../../Assets/TechIcons/numpy.svg";
// import Matplotlib from "../../Assets/TechIcons/Matplotlib.svg";
// import Seaborn from "../../Assets/TechIcons/Seaborn.svg";
import Sklearn from "../../Assets/TechIcons/scikitlearn.svg";
import LangChain from "../../Assets/TechIcons/langchain.svg";
// import RAG from "../../Assets/TechIcons/RAG.svg";
import PyG from "../../Assets/TechIcons/pyg.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons"><img src={Python} alt="Python" /><div className="tech-icons-text">Python</div></Col>
      <Col xs={4} md={2} className="tech-icons"><img src={SQL} alt="SQL" /><div className="tech-icons-text">SQL</div></Col>
      <Col xs={4} md={2} className="tech-icons"><img src={C} alt="C++" /><div className="tech-icons-text">C++ / C</div></Col>
      <Col xs={4} md={2} className="tech-icons"><img src={Javascript} alt="Javascript" /><div className="tech-icons-text">JavaScript</div></Col>

      {/* Tools & Technologies */}
      <Col xs={4} md={2} className="tech-icons"><img src={Git} alt="Git" /><div className="tech-icons-text">Git / GitHub</div></Col>
      <Col xs={4} md={2} className="tech-icons"><img src={Docker} alt="Docker" /><div className="tech-icons-text">Docker</div></Col>
      {/* <Col xs={4} md={2} className="tech-icons"><img src={VSCode} alt="VSCode" /><div className="tech-icons-text">VS Code</div></Col> */}
      {/* <Col xs={4} md={2} className="tech-icons"><img src={Linux} alt="Linux" /><div className="tech-icons-text">Linux</div></Col> */}
      {/* <Col xs={4} md={2} className="tech-icons"><img src={Windows} alt="Windows" /><div className="tech-icons-text">Windows</div></Col> */}

      {/* Libraries & Frameworks */}
      {/* <Col xs={4} md={2} className="tech-icons"><img src={Pandas} alt="Pandas" /><div className="tech-icons-text">Pandas</div></Col>
      <Col xs={4} md={2} className="tech-icons"><img src={Numpy} alt="Numpy" /><div className="tech-icons-text">NumPy</div></Col>
      <Col xs={4} md={2} className="tech-icons"><img src={Sklearn} alt="Sklearn" /><div className="tech-icons-text">Scikit-learn</div></Col>
      <Col xs={4} md={2} className="tech-icons"><img src={Pytorch} alt="Pytorch" /><div className="tech-icons-text">PyTorch</div></Col>
      <Col xs={4} md={2} className="tech-icons"><img src={Tensorflow} alt="Tensorflow" /><div className="tech-icons-text">TensorFlow / Keras</div></Col>
      {/* <Col xs={4} md={2} className="tech-icons"><img src={Matplotlib} alt="Matplotlib" /><div className="tech-icons-text">Matplotlib</div></Col> */}
      {/* <Col xs={4} md={2} className="tech-icons"><img src={Seaborn} alt="Seaborn" /><div className="tech-icons-text">Seaborn</div></Col> */}
      {/* <Col xs={4} md={2} className="tech-icons"><img src={Flask} alt="Flask" /><div className="tech-icons-text">Flask</div></Col>
      <Col xs={4} md={2} className="tech-icons"><img src={LangChain} alt="LangChain" /><div className="tech-icons-text">LangChain</div></Col> */}
      {/* <Col xs={4} md={2} className="tech-icons"><img src={RAG} alt="RAG" /><div className="tech-icons-text">RAG</div></Col> */}
      {/* <Col xs={4} md={2} className="tech-icons"><img src={PyG} alt="PyG" /><div className="tech-icons-text">PyG</div></Col> */} 
    </Row>
  );
}

export default Techstack;
