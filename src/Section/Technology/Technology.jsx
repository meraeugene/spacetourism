import React, { useState } from "react";
import "./Technology.css";
import { TemplateHeader } from "../../Components";
import TechnologyTemplate from "../../Components/TechnologyComponent/Technology_Template";
import data from "../../Constants/data.json";

const Technology = () => {
  const [toggle, setToggle] = useState(1);

  const { technology } = data;

  return (
    <div className="app__technology">
      <TemplateHeader />

      <div className="app__technology-title">
        <span>03</span> SPACE LAUNCH 101
      </div>

      {technology && (
        <TechnologyTemplate
          technology={technology[0]}
          className={toggle === 1 ? "app__technology__wrapper" : "hide-content"}
          key={1}
          setToggle={setToggle}
          toggle={toggle}
        />
      )}

      {technology && (
        <TechnologyTemplate
          technology={technology[1]}
          className={toggle === 2 ? "app__technology__wrapper" : "hide-content"}
          key={2}
          setToggle={setToggle}
          toggle={toggle}
        />
      )}

      {technology && (
        <TechnologyTemplate
          technology={technology[2]}
          className={toggle === 3 ? "app__technology__wrapper" : "hide-content"}
          key={3}
          setToggle={setToggle}
          toggle={toggle}
        />
      )}
    </div>
  );
};

export default Technology;
