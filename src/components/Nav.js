import { Component } from "react";

import "../style/NavBar.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="emblem">
        <h4 className="myPort">My Portfolio</h4>
      </div>
      <ul className="links">
        <li>
          <a href="#Name">Home</a>
        </li>

        <li>
          <a href="#About">About</a>
        </li>

        <li>
          <a href="#Projects">Projects</a>
        </li>

        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
