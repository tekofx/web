import React from "react";
import "./theme.css"
import ImageList from '../components/ImageList';
import { ThemeProvider } from "@emotion/react";
import Theme from '../Theme';
import { Typography } from "@material-ui/core";
class Gallery extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Typography variant="h1">Gallery</Typography>
        <Typography variant='body1'>My art/photographies</Typography>
        <ImageList />
      </ThemeProvider>
    )
  }
}

export default Gallery;