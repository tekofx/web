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
        <Container>
          <Appbar />
          <br />
          <Typography variant="h1">About</Typography>

          <Grid container spacing={2}>
            <Grid item xs={4} >
              <Avatar alt="Remy Sharp" src={avatar} sx={{ width: "200px", height: "200px" }} />
            </Grid>
            <Grid item xs={8} >
              <Typography >I'm Teko an arctic foxxo from Spain. I love drawing, taking photos and programming. I started this webpage to challenge myself into creating a webpage and for having all my projects and stuff in one site.</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} >
            <Grid item xs={8} >
              <Typography>Teko is an arctic fox who can control ice at his will.</Typography>
              <img align="left" src={ref} alt="" className="ref" />
            </Grid>
            <Grid item xs={4} >
              <h3>Colors</h3>
              <Colors background="red" />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    )
  }
}

export default About;