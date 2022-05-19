import React from "react";
import RepositoryList from "../components/Github/RepositoryList/RepositoryList";
import "./theme.css"
import Appbar from '../components/Appbar/Appbar';
import Container from '@mui/material/Container';


class Projects extends React.Component {
  render() {
    return (
      <Container>
        <Appbar />
        <br />
        <Container className="contentItems">
          <h1>Projects</h1>
          <h2>Github</h2>
          <p>My coding projects like Discord Bots and terminal programs</p>
          <RepositoryList />

        </Container>


      </Container>

    )
  }
}

export default Projects;