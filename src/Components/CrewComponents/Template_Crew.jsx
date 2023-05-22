import React from "react";
import "./Template_Crew.css";

const Template_Crew = ({ crews, image, width }) => {
  return (
    <div>
      <div className="app__crew-content-title">
        <span>02</span> MEET YOUR CREW
      </div>
      <div className="app__crew__wrapper">
        <div className="app__crew-content">
          <div className="app__crew-content-info">
            <h2>{crews.role}</h2>
            <h1>{crews.name}</h1>
            <p>{crews.bio}</p>
          </div>
        </div>

        <div className="app__crew-content-img">
          <img src={image} alt="empty" style={{ width: width }} />
        </div>
      </div>
    </div>
  );
};

export default Template_Crew;
