import React from "react";
import "./theme.css"
import ImageList from '../components/ImageList/ImageList';
import Container from '@mui/material/Container';
import Appbar from '../components/Appbar/Appbar';
import { ThemeProvider } from "@emotion/react";
import Theme from '../Theme';
import { Typography } from "@material-ui/core";
class Gallery extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Appbar />
        <br />
        <Typography variant="h1">Gallery</Typography>
        <Typography>My art/photographies</Typography>
        <ImageList />


      </ThemeProvider>
    )
  }
}

export default Gallery;