import { NavLink } from "react-router";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
