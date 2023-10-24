import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import "../css/Instructor.css";

const Instructor = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="instructor-card container">
      <h2>Course Instructor</h2>
      <div className="row">
        <div className="col-4 col-md-2">
          <div className="profile-picture">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToB5Qj0g1uqHO2HVXDdJWH1-JpKQ8Rsl8r0w&usqp=CAU"
              alt="Instructor"
            />
          </div>
        </div>
        <div className="col-8 col-md-10 mt-3 mt-md-0">
          <h3>Angela Andrew</h3>
          <div className="ratings">
            <span className="rating-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span className="ratings-text">4.9 (240 Reviews)</span>
          </div>
          <a href="#ratings-reviews">View Ratings and Reviews</a>
        </div>
        <div className="instructor-description col-12">
          <br />
          <p className={!showMore ? "show-less" : ""}>
            Hello aspiring developers!
            <br />
            Welcome aboard the Python Programming Express. I'm{" "}
            <strong>Angela</strong>, your fearless guide on this coding
            adventure! As a passionate developer and lead instructor at the
            <strong> London App Brewery</strong>, I've helped countless students,
            just like you, discover the magic of coding. With Python as our
            trusty companion, we'll explore the incredible world of programming
            together. From
            <strong>crafting web applications</strong> to unlocking the secrets
            of <strong>data science</strong>, we're in for an exhilarating ride!
          </p>
          {showMore && (
            <>
              {" "}
              But wait, there's more! Besides my coding expertise, I'm a coffee
              enthusiast and a puzzle aficionado. When I'm not geeking out over
              code, you'll find me exploring new coffee shops or challenging
              myself with brain-teasing puzzles.
              <br />
              I'm excited to be your mentor and share my knowledge and
              experiences. We'll laugh, learn, and code our way to success! So,
              buckle up and get ready to unleash your coding superpowers.
              Together, we'll create something extraordinary
              <br />
              Let's dive in and make magic happen!
            </>
          )}
        </div>
        <div className="col-12 mt-3">
          <button onClick={handleShowMoreClick}>
            {showMore ? "Show Less " : "Show More "}
            {showMore ? <FaCaretUp /> : <FaCaretDown />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
