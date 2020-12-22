import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import './Nav.css';

class Nav extends Component {

  render() {
    return (
        <header className="header">
        <a href="" className="logo">Onedu</a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          <li><a href="#Home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="/course_video">Courses</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
    );
  }
}

export default Nav;