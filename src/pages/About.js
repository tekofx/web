import React from "react";
import "./theme.css"
import Avatar from '@mui/material/Avatar';
import avatar from '../img/avatar.png';
import ref from '../img/ref.png';
import Colors from '../components/Colors/Colors';
import Container from '@mui/material/Container';
import Appbar from '../components/Appbar/Appbar';
import { ThemeProvider } from "@emotion/react";
import Theme from '../Theme';
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

class About extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Appbar />
        <br />
        <Typography variant="h1">About</Typography>

        <Grid container spacing={2}>
          <Grid item xs={3} >
            <Avatar alt="Remy Sharp" src={avatar} sx={{ width: "20vw", height: "auto" }} />
          </Grid>
          <Grid item xs={9} >
            <Typography variant='body1' paragraph>I'm Teko an arctic foxxo from Spain. I love drawing, taking photos and programming. I started this webpage to challenge myself into creating a webpage and for having all my projects and stuff in one site.</Typography>
          </Grid>
        </Grid>
        <br />

        <Grid container spacing={2} >
          <Grid item xs={8} >
            <Typography variant='body1'>Teko is an arctic fox who can control ice at his will.</Typography>
            <img align="left" src={ref} alt="" className="ref" />
          </Grid>
          <Grid item xs={4} >
            <Colors background="red" />
          </Grid>
        </Grid>
      </ThemeProvider>
    )
  }
}

export default About;