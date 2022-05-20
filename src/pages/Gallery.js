import React from "react";
import "./theme.css"
import ImageList from '../components/ImageList/ImageList';
import Container from '@mui/material/Container';
import Appbar from '../components/Appbar/Appbar';
import { ThemeProvider } from "@emotion/react";
import Theme from '../Theme';
class Gallery extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Container>
          <Appbar />
          <br />
          <div className="contentItems">
            <h1>Gallery</h1>
            <p>My art/photographies</p>
            <ImageList />
          </div>


        </Container>
      </ThemeProvider>
    )
  }
}

export default Gallery;