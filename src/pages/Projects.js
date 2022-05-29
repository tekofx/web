import React from "react";
import RepositoryList from "../components/Github/RepositoryList";
import "./theme.css"
import { ThemeProvider } from "@emotion/react";
import Theme from '../Theme';
import { Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t, i18n } = useTranslation();

  return (
    <ThemeProvider theme={Theme}>
      <Typography variant="h1">{t('projectsTitle')}</Typography>
      <Typography variant='body1'>{t('projectsText')}</Typography>
      <RepositoryList />
    </ThemeProvider>
  )
}

export default Projects;