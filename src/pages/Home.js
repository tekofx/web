import React from "react";
import "./theme.css"
import Container from '@mui/material/Container';
import Appbar from '../components/Appbar/Appbar';
import { ThemeProvider } from '@emotion/react';
import Theme from '../Theme';
import { Typography } from "@mui/material";
class Home extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Container maxWidth="xl">
          <Appbar />
          <br />
          <Container >
            <Typography variant="h1">Welcome</Typography>
            <Typography>On this page I will collect all the information / projects that I am doing, most of them related to Furry Fandom</Typography>

            <Typography variant="h2">News</Typography>
            <Typography>- This webpage is still under construction, I will add more content as soon as possible.</Typography>


          </Container>

        </Container>
      </ThemeProvider>

    );
  }

}
export default Home;