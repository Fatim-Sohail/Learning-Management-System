// FixedContainer.js
import React from "react";
import "../css/FixedContainer.css";
import CourseFeatures from "./CourseFeatures";

const FixedContainer = () => {
  return (
    <div className="container-fixed">
      <img
        className="image"
        src="https://i.pinimg.com/originals/13/34/fd/1334fd5e90dd4f05919b25c76e3fa7e0.gif"
        alt="gif"
      />
      <h2 className="cost">$ 75.3</h2>
      <div className="content">
        <div className="btn-container">
          <button className="btn-fxx">Buy Now</button>
        </div>
        <p>30 days Money-Back Guarantee</p>
      </div>
      <CourseFeatures/>
    </div>
  );
};

export default FixedContainer;
