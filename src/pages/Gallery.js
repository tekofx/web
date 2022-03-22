import React from "react";
import Header from "../components/Header/Header";
import "./theme.css"
import ImageList from '../components/ImageList/ImageList';


class Gallery extends React.Component {
  render() {
    return (
      <>
        <Header />
        <br />

        <h1>Gallery</h1>
        <p>My art/photographies</p>
        <ImageList />
      </>
    )
  }
}

export default Gallery;