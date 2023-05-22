import React from "react";
import "./Header.css";
import images from "../../Constants/images";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="app__header ">
      <div className="app__header-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <nav className="app__header-links">
        <li>
          <NavLink to="/">
            <span className="app__header-num ">00</span> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/destination">
            <span className="app__header-num">01</span> Destination
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew">
            <span className="app__header-num">02</span> Crew
          </NavLink>
        </li>
        <li>
          <NavLink to="/technology">
            <span className="app__header-num">03</span> Technology
          </NavLink>
        </li>

        <div className="app__header-dash" />
      </nav>

      <div className="app__header-smallscreen ">
        <img
          src={images.hamburger}
          alt="hamburger-menu"
          className="openBtn"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__header-smallscreen_overlay slide-in-right">
            <img
              src={images.close}
              alt="close"
              className="closeBtn"
              onClick={() => setToggleMenu(false)}
            />

            <div className="app__header-smallscreen-links">
              <li>
                <NavLink to="/" onClick={() => setToggleMenu(false)}>
                  <span className="app__header-num ">00</span> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/destination" onClick={() => setToggleMenu(false)}>
                  <span className="app__header-num">01</span> Destination
                </NavLink>
              </li>
              <li>
                <NavLink to="/crew" onClick={() => setToggleMenu(false)}>
                  <span className="app__header-num">02</span> Crew
                </NavLink>
              </li>
              <li>
                <NavLink to="/technology" onClick={() => setToggleMenu(false)}>
                  <span className="app__header-num">03</span> Technology
                </NavLink>
              </li>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
