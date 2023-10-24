import React, { useState } from "react";
import "../css/CourseDescription.css";

const modules = [
  {
    id: "module1",
    title: "1.1 What is Python?",
    duration: "3h 30m",
    content: `
      Introduction to Python as a high-level, interpreted programming language.
      Python's history and development.
      Understanding the role of Python in web development, data science, automation, and more.
    `
  },
  {
    id: "module2",
    title: "1.2 Setting Up the Development Environment",
    duration: "2h 45m",
    content: `
      Installing Python on different platforms (Windows, macOS, Linux).
      Configuring the Integrated Development Environment (IDE) for Python programming.
    `
  },
  {
    id: "module3",
    title: "1.3 Python Basics: Variables and Data Types",
    duration: "4h 15m",
    content: ` 
      Variables and their importance in programming.
      Data types: integers, floating-point numbers, strings, booleans, and more.
      Declaring and using variables in Python.
    `
  },
  {
    id: "module4",
    title: "1.4 Working with Python: Operators and Expressions",
    duration: "3h 00m",
    content: `
      Arithmetic operators (+, -, *, /, %, etc.).
      Comparison operators (==, !=, <, >, etc.).
      Logical operators (and, or, not) and their usage.
    `
  },
  {
    id: "module5",
    title: "1.5 Control Flow: Conditional Statements",
    duration: "3h 30m",
    content: `
      If statements and their syntax.
      Using if-else and if-elif-else constructs for decision-making.
      Examples of conditional statements in practical scenarios.
    `
  },
  {
    id: "module6",
    title: "1.6 Control Flow: Loops",
    duration: "2h 15m",
    content: `
      Using the 'for' loop for iteration over lists, tuples, and strings.
      The 'while' loop and its application in repetitive tasks.
      Loop control statements: 'break' and 'continue'.
    `
  },
  {
    id: "module7",
    title: "1.7 Functions in Python",
    duration: "3h 15m",
    content: `
      Understanding functions as reusable blocks of code.
      Defining functions with parameters and return values.
      Local and global variables in function scope.
    `
  },
  {
    id: "module8",
    title: "1.8 Python Lists and Dictionaries",
    duration: "2h 45m",
    content: `
      Lists: creating, accessing, and manipulating lists.
      Dictionaries: key-value pairs and their usage in Python.
    `
  },
];

const CourseDescription = () => {
  const [expandedModuleId, setExpandedModuleId] = useState(null);

  const handleModuleToggle = (moduleId) => {
    setExpandedModuleId((prevId) => (prevId === moduleId ? null : moduleId));
  };

  return (
    <div className="course-container">
      <h2>Course Content</h2>
      <div className="white-container">
        {modules.map((module) => (
          <div key={module.id} className={`module-item ${expandedModuleId === module.id ? "active" : ""}`} onClick={() => handleModuleToggle(module.id)}>
            <div className="module-header">
              <div className="icon-column">{expandedModuleId === module.id ? <span>▲</span> : <span>▼</span>}</div>
              <div className="title-column">{module.title}</div>
              <div className="duration-column">{module.duration}</div>
            </div>
            {expandedModuleId === module.id && (
              <div className="module-details">
                {module.content.split("\n").map((point, index) => {
                  const trimmedPoint = point.trim();
                  if (trimmedPoint.length > 0) {
                    return (
                      <div key={index} className="module-point">
                        <span className="video-sign">▶</span>
                        {trimmedPoint}
                        <span className="video-duration">05:30</span>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDescription;
