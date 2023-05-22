import React from "react";
import "./Home.css";
import { TemplateHeader } from "../../Components";
import "animate.css/animate.min.css";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <div className="app__bg ">
      <TemplateHeader />

      <div className="section__padding app__wrapper">
        <div className="app__home-content ">
          <m.h2
            initial={{ y: "50%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            exit={{ opacity: 1 }}
          >
            SO, YOU WANT TO TRAVEL TO
          </m.h2>
          <m.h1
            initial={{ y: "50%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            exit={{ opacity: 1 }}
          >
            SPACE
          </m.h1>
          <m.p
            initial={{ y: "50%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            exit={{ opacity: 1 }}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </m.p>
        </div>

        <m.div
          className="app__home-img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          exit={{ opacity: 1 }}
        >
          <h1>EXPLORE</h1>
        </m.div>
      </div>
    </div>
  );
};

export default Home;
