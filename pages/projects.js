import React from "react";
import RepositoryList from "../components/Github/RepositoryList";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function Projects() {
  const { t } = useTranslation("projects");

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects</title>
      </Helmet>
      <Typography variant="h1">{t("title")}</Typography>
      <Typography variant="body1">{t("text")}</Typography>
      <RepositoryList />
    </div>
  );
}

export default Projects;
