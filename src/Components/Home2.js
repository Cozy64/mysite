import React from "react";
import Home2BackgroundImage from "../Assets/kid.png";

const Home2 = () => {
  return (
    <div className="home2-section-container">
      <div className="home2-section-image-container">
        <img src={Home2BackgroundImage} alt="" />
      </div>
      <div className="home2-section-text-container">
        <h1 className="primary-heading">
	  		Risk free	
        </h1>
        <p className="primary-text">
	  		Our service ensures quality care for your loved ones.
        </p>
        <p className="primary-text">
	  		Refunds available for unsatisfied customers.
        </p>
        <div className="home2-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home2;
