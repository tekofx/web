import React from "react";
import "./theme.css"
import ImageList from '../components/ImageList/ImageList';
import Container from '@mui/material/Container';
import Appbar from '../components/Appbar/Appbar';

class Gallery extends React.Component {
  render() {
    return (
      <Container>
        <Appbar />
        <br />
        <div className="contentItems">
          <h1>Gallery</h1>
          <p>My art/photographies</p>
          <ImageList />
        </div>


      </Container>
    )
  }
}

export default Gallery;