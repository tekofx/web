import React from "react";
import RepositoryList from "../components/Github/RepositoryList";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <Container maxWidth='xl'>
      <Typography variant="h1">{t('projectsTitle')}</Typography>
      <Typography variant='body1'>{t('projectsText')}</Typography>
      <RepositoryList />
    </Container>
  )
}

export default Projects;