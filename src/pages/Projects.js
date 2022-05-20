import React from "react";
import RepositoryList from "../components/Github/RepositoryList/RepositoryList";
import "./theme.css"
import Appbar from '../components/Appbar/Appbar';
import { ThemeProvider } from "@emotion/react";
import Theme from '../Theme';
import { Typography } from "@material-ui/core";

class Projects extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Appbar />
        <br />
        <Typography variant="h1">Projects</Typography>
        <Typography variant="p">My coding projects like Discord Bots and terminal programs</Typography>
        <RepositoryList />
      </ThemeProvider>

    )
  }
}

export default Projects;