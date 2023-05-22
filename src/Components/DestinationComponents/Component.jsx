import React from "react";
import "../../Section/Destinations/Destination.css";

const Component = ({
  className,
  img,
  body,
  title,
  distance,
  travel,
  setToggle,
  active,
}) => {
  const updateToggle = (id) => {
    setToggle(id);
  };

  return (
    <div className={className}>
      <div className="app__moon-img">
        <img src={img} alt="moon" />
      </div>
      <div className="app__moon-content ">
        <nav>
          <ul>
            <li
              className={active === 1 ? "active" : ""}
              onClick={() => updateToggle(1)}
            >
              Moon
            </li>
            <li
              className={active === 2 ? "active" : ""}
              onClick={() => updateToggle(2)}
            >
              Mars
            </li>
            <li
              className={active === 3 ? "active" : ""}
              onClick={() => updateToggle(3)}
            >
              Europa
            </li>
            <li
              className={active === 4 ? "active" : ""}
              onClick={() => updateToggle(4)}
            >
              Titan
            </li>
          </ul>
        </nav>

        <h1 className="app__moon-content-title">{title}</h1>
        <p className="app__moon-content-body">{body}</p>
        <div className="app__moon-dash" />
        <div className="app__moon-content-info">
          <div className="app__moon-content-distance">
            <h3>AVG. DISTANCE</h3>
            <h2>{distance}</h2>
          </div>

          <div className="app__moon-content-travel">
            <h3>EST. TRAVEL TIME</h3>
            <h2>{travel} </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
