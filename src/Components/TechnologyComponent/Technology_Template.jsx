import React, { useEffect, useState } from "react";
import "./Technology_Template.css";

const Technology_Template = ({ technology, toggle, className, setToggle }) => {
  const updateToggle = (id) => {
    setToggle(id);
  };

  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Get the appropriate image based on the device width
  const imageSource =
    deviceWidth <= 1150
      ? technology.images.landscape
      : technology.images.portrait;

  return (
    <div className={className}>
      <div className="column-reverse">
        <div className="app__technology-numbers">
          <span
            className={toggle === 1 ? "active" : ""}
            onClick={() => updateToggle(1)}
          >
            1
          </span>
          <span
            className={toggle === 2 ? "active" : ""}
            onClick={() => updateToggle(2)}
          >
            2
          </span>
          <span
            className={toggle === 3 ? "active" : ""}
            onClick={() => updateToggle(3)}
          >
            3
          </span>
        </div>

        <div className="app__technology-content">
          <h2>THE TERMINOLOGY…</h2>
          <h1>{technology.name}</h1>
          <p>{technology.description}</p>
        </div>
      </div>

      <div className="app__technology-img">
        <img src={require(`../../${imageSource}`)} alt="spaceport" />
      </div>
    </div>
  );
};

export default Technology_Template;
