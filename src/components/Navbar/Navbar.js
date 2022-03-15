import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/home">Home</Link> </li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>

    )
  }
}

export default Navbar;