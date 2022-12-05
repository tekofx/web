import React from "react";
import RepositoryList from "../components/Github/RepositoryList";
import { Typography } from "@mui/material";
import Head from "next/head";

import getLang from "../components/Language/Lang";


function Projects() {
  const t = getLang().projects;

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Projects</title>
      </Head>
      <Typography variant="h1">{t.title}</Typography>
      <Typography variant="body1">{t.text}</Typography>
      <RepositoryList />
    </div>
  );
}

export default Projects;
