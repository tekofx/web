import React from "react";
import "./theme.css"
import Container from '@mui/material/Container';
import Appbar from '../components/Appbar/Appbar';

class Home extends React.Component {
  render() {
    return (
      <Container maxWidth="xl">
        <Appbar />
        <br />
        <Container >
          <h1>Welcome</h1>
          <p>On this page I will collect all the information / projects that I am doing, most of them related to Furry Fandom</p>

          <h2>News</h2>
          - This webpage is still under construction, I will add more content as soon as possible.

        </Container>

      </Container>

    );
  }

}
export default Home;