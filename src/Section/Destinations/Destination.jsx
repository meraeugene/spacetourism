import React, { useState } from "react";
import "./Destination.css";
import { TemplateHeader } from "../../Components";
import { images } from "../../Constants";
import { Component } from "../../Components";
import data from "../../Constants/data.json";

const Destination = () => {
  const [toggle, setToggle] = useState(1);

  const { destinations } = data;

  return (
    <div className="app__destination ">
      <TemplateHeader />

      <div className="app__moon ">
        <div className="app__destination-title ">
          <span>01</span> PICK YOUR DESTINATION
        </div>

        {destinations && (
          <Component
            key={destinations[0].name}
            className={toggle === 1 ? "show-content" : "hide-content"}
            active={toggle}
            setToggle={setToggle}
            img={images.moon}
            title={destinations[0].name}
            body={destinations[0].description}
            distance={destinations[0].distance}
            travel={destinations[0].travel}
          />
        )}

        {destinations && (
          <Component
            key={destinations[1].name}
            className={toggle === 2 ? "show-content" : "hide-content"}
            active={toggle}
            setToggle={setToggle}
            img={images.mars}
            title={destinations[1].name}
            body={destinations[1].description}
            distance={destinations[1].distance}
            travel={destinations[1].travel}
          />
        )}

        {destinations && (
          <Component
            key={destinations[2].name}
            className={toggle === 3 ? "show-content" : "hide-content"}
            active={toggle}
            setToggle={setToggle}
            img={images.europa}
            title={destinations[2].name}
            body={destinations[2].description}
            distance={destinations[2].distance}
            travel={destinations[2].travel}
          />
        )}

        {destinations && (
          <Component
            key={destinations[3].name}
            className={toggle === 4 ? "show-content" : "hide-content"}
            active={toggle}
            setToggle={setToggle}
            img={images.titan}
            title={destinations[3].name}
            body={destinations[3].description}
            distance={destinations[3].distance}
            travel={destinations[3].travel}
          />
        )}
      </div>
    </div>
  );
};

export default Destination;
