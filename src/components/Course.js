import React from "react";
import "../css/Coursee.css";
import LearningObjectives from "./LearningObjectives";
import CourseOverview from "./CourseOverview";
import Instructor from "./Instructor";
import TargetAudienceAndPrerequisites from "./PreReq";
import CourseFormat from "./CourseFormat";
import CourseDescription from "./CourseDescription";
import Navbar from "./Navbar";
import FixedContainer from "./FixedContainer";
// import { Navbar } from "react-bootstrap";

const Course = () => {
  return (
    <>
    <Navbar/>
    <div className="page">
      <CourseOverview />
      <FixedContainer/>
      <div className="container p-5">
        <LearningObjectives />
        <CourseDescription/>
        <Instructor />
        <TargetAudienceAndPrerequisites/>
        <CourseFormat/>
      </div>
        {/* <Footer/> */}
    </div>
    </>
  );
};

export default Course;
