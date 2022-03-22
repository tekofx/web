import React from "react";
import Header from "../components/Header/Header";
import "./theme.css"
import ImageList from '../components/ImageList/ImageList';


class Gallery extends React.Component {
  render() {
    return (
      <div className="pageContent">
        <Header />
        <br />
        <div className="contentItems">
          <h1>Gallery</h1>
          <p>My art/photographies</p>
          <ImageList />
        </div>


      </div>
    )
  }
}

export default Gallery;