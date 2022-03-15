import React from "react";
import './Header.css'
import Navbar from '../Navbar/Navbar'


class Header extends React.Component {
  render() {
    return (
      <>
        <img src="/header.jpg" alt="" />
        <Navbar />
      </>


    )
  }
}

export default Header;