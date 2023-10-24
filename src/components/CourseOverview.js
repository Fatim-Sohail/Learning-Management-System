import React from "react";
import "../css/CourseOverview.css";

const CourseOverview = () => {
  return (
    <div className="intro">
      <div className="links">
        <a href="/#development" className="small-link">
          Development
        </a>{" "}
        &gt;
        <a href="/#programming-languages" className="small-link">
          {" "}
          Programming Languages
        </a>{" "}
        &gt;
        <a href="/#python" className="small-link">
          {" "}
          Python
        </a>
      </div>
      <div>
        <h1>Introduction to Python Programming</h1>
        <h3>Course Overview:</h3>
        <p>
          In this module, you will be introduced to the fundamentals of Python
          programming. You will learn about the language's history, its
          applications, and why it is widely used in various industries. By the
          end of this module, you will have a solid understanding of Python's
          basic syntax and be ready to start writing simple programs.
        </p>
        <p>
          Created by
          <a href="/#"> Dr. Angela Andrew</a>
        </p>
      </div>
    </div>
  );
};

export default CourseOverview;
