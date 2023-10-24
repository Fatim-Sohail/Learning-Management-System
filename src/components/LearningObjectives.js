import React from 'react';
import '../css/LearningObjectives.css';
import { Container, Row, Col } from 'react-bootstrap';

const CourseModule = ({ title, content }) => {
  return (
    <section>
      <h2>{title}</h2>
      {content}
    </section>
  );
};

const LearningObjectives = () => {
  return (
    <Container className="course-module" style={{ width: '100%', maxWidth: '600px', border: '1px solid #ccc', padding: '20px', margin: '0' }}>
      <CourseModule title="Learning Objectives" content={
        <ul className="lo">
          <Row>
            <Col xs={12} md={6}>
              <li className='hdng'><span className="tick-mark">&#10003;</span> Learning Objective 1:</li>
              <p>
                Understand the fundamentals of Python programming, including
                its history and development, and recognize its significance in
                web development, data science, automation, and various
                industries.
              </p>
              <li className='hdng'><span className="tick-mark">&#10003;</span> Learning Objective 2:</li>
              <p>
                Acquire proficiency in Python's basic syntax, variables, and
                data types (integers, floating-point numbers, strings, and
                booleans), enabling the creation and manipulation of data in
                Python programs.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <li className='hdng'><span className="tick-mark">&#10003;</span> Learning Objective 3:</li>
              <p>
                Master the usage of control flow structures, such as
                conditional statements (if, if-else, if-elif-else) and loops
                (for and while), to implement decision-making and iterative
                processes in Python code effectively.
              </p>
            </Col>
          </Row>
        </ul>
      } />
    </Container>
  );
};

export default LearningObjectives;
