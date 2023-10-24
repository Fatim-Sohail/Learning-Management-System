import React from "react";
import "../css/CourseFeatures.css";
import { FaVideo, FaClipboard, FaDownload, FaNewspaper, FaInfinity, FaTrophy } from "react-icons/fa";

const CourseFeatures = () => {
  return (
    <div className="icp">
      <div className="icon-text-container">
        <FaVideo size={14}  className="faa" />
        <p className="icp-text">60 hours on-demand videos</p>
      </div>
      <div className="icon-text-container">
        <FaClipboard size={14} className="faa" />
        <p className="icp-text">Articles</p>
      </div>
      <div className="icon-text-container">
        <FaDownload size={14} className="faa" />
        <p className="icp-text">100 Downloadable Resources</p>
      </div>
      <div className="icon-text-container">
        <FaNewspaper size={14} className="faa" />
        <p className="icp-text">Assignments and Quizzes</p>
      </div>
      <div className="icon-text-container">
        <FaInfinity size={14} className="faa"/>
        <p className="icp-text">Full lifetime Access</p>
      </div>
      <div className="icon-text-container">
        <FaTrophy size={14} className="faa" />
        <p className="icp-text">Certification of Completion</p>
      </div>
    </div>
  );
};

export default CourseFeatures;
