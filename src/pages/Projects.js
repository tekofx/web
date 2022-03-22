import React from "react";
import Header from "../components/Header/Header";
import RepositoryList from "../components/Github/RepositoryList/RepositoryList";
import "./theme.css"

class Projects extends React.Component {
  render() {
    return (
      <div className="pageContent">
        <Header />
        <br />
        <div className="contentItems">
          <h1>Projects</h1>
          <RepositoryList />




        </div>


      </div>

    )
  }
}

export default Projects;