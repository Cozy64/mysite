import React from "react";
import AboutBackgroundImage from "../Assets/kid.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
	  		Risk free	
        </h1>
        <p className="primary-text">
	  		Our service ensures quality care for your loved ones.
        </p>
        <p className="primary-text">
	  		Refunds available for unsatisfied customers.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
