import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsCheck } from "react-icons/bs";
import "../css/PreReq.css"; 

const TargetAudienceAndPrerequisites = () => {
  return (
    <Container className="mt-3" style={{ maxWidth: "600px", textAlign: "justify", textJustify: "inter-word", marginLeft: "0"}}>
      <Row>
        <Col>
          <h4 className="heading">Who this course is for?</h4>
          <ul className="content">
            <li>
              <BsCheck className="bullet-icon" /> Beginners with no prior programming experience looking to start their programming journey with Python.
            </li>
            <li>
              <BsCheck className="bullet-icon" /> Individuals with some experience in other programming languages who want to explore Python's applications.
            </li>
            <li>
              <BsCheck className="bullet-icon" /> Students, professionals, hobbyists, and aspiring developers seeking to gain a solid foundation in Python.
            </li>
            <li>
              <BsCheck className="bullet-icon" /> Those interested in web development, data analysis, automation, artificial intelligence, and more.
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="heading">Prerequisites:</h4>
          <ul className="content">
            <li>
              <BsCheck className="bullet-icon" /> No prior programming knowledge required, making it accessible for learners of all levels.
            </li>
            <li>
              <BsCheck className="bullet-icon" /> Basic understanding of computer operations, file management, and directories is beneficial.
            </li>
            <li>
              <BsCheck className="bullet-icon" /> Strong desire to learn, problem-solving skills, and an open mind are essential.
            </li>
            <li>
              <BsCheck className="bullet-icon" /> Python's simplicity and readability make it suitable for learners of all ages and backgrounds.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default TargetAudienceAndPrerequisites;
