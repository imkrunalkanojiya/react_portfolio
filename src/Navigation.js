import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div id="app-nav">
      <div className="container">
        <div className="menu">
          <NavLink exact to="/">
            Krunal Kanojiya
          </NavLink>
          <NavLink exact to="/projects">
            Projects
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
