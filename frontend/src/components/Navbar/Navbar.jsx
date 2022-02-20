import React from "react";
import "./Navbar.scss";
import { images } from "../../constants";
const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="" srcset="" />
      </div>
      <ul className="app__navbar-links">
        {["header", "about", "skills", "testimonial", "work", "contact"].map(
          (item) => (
            <li key={`link-${item}`} className="app__flex p-text">
              <div></div>
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
