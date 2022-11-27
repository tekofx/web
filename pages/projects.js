import React from "react";
import RepositoryList from "../components/Github/RepositoryList";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import getLang from "../components/Lang";


function Projects() {
  const t = getLang().projects;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects</title>
      </Helmet>
      <Typography variant="h1">{t.title}</Typography>
      <Typography variant="body1">{t.text}</Typography>
      <RepositoryList />
    </div>
  );
}

export default Projects;
