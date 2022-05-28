import React from "react";
import RepositoryList from "../components/Github/RepositoryList";
import "./theme.css"
import { ThemeProvider } from "@emotion/react";
import Theme from '../Theme';
import { Typography } from "@material-ui/core";
import Footer from "../components/Footer";
class Projects extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Typography variant="h1">Projects</Typography>
        <Typography variant='body1'>My coding projects like Discord Bots and terminal programs</Typography>
        <RepositoryList />
        <Footer />
      </ThemeProvider>

    )
  }
}

export default Projects;