import React from "react";
import './Navbar.css';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/home" >Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/projects">Projects</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/gallery">Gallery</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/about">About Me</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/contact">Contact</NavLink>

      </nav>

    )
  }
}

export default Navbar;