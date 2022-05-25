import React from "react";
import Appbar from '../components/Appbar';
import { ThemeProvider } from '@emotion/react';
import Theme from '../Theme';
import { Typography } from "@mui/material";
import NewsList from "../components/News/NewsList";
import { Grid } from "@mui/material";
import SocialNetworks from "../components/SocialNetworks";
import Footer from "../components/Footer";

class Home extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Appbar />
        <br />
        <Grid container spacing={4}>

          <Grid item xs={12} sm={8} md={9} lg={10}>
            <Typography variant="h1">Welcome</Typography>

            <Typography variant='body1'>On this page I will collect all the information / projects that I am doing, most of them related to Furry Fandom</Typography>
            <SocialNetworks />
          </Grid>

          <Grid item xs={10} sm={4} md={3} lg={2}>
            <Typography variant="h3">News</Typography>
            <NewsList />
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>

    );
  }

}
export default Home;