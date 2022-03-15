import React from "react";
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "linkActive" : "link")} to="/home" >Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "linkActive" : "link")} to="/about">About Me</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "linkActive" : "link")} to="/gallery">Gallery</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "linkActive" : "link")} to="/contact">Contact</NavLink>

      </nav>

    )
  }
}

export default Navbar;