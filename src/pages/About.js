import React from "react";
import "./theme.css"
import Avatar from '@mui/material/Avatar';
import avatar from '../img/avatar.png';
import ref from '../img/ref.png';
import Appbar from '../components/Appbar';
import { ThemeProvider } from "@emotion/react";
import Theme from '../Theme';
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import ColorsTable from '../components/Colors/ColorsTable';
import ColorsThing from '../components/Colors/ColorsList';
import Footer from "../components/Footer";

class About extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Typography variant="h1">About</Typography>

        <Grid container spacing={2}>
          <Grid item xs={4} sm={3} md={2} lg={2} >
            <Avatar alt="Remy Sharp" src={avatar} sx={{ width: "90%", height: "auto" }} />
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={10}>
            <Typography variant='body1' paragraph>Welcome to my webpage!</Typography>
            <Typography variant='body1' paragraph>I'm Teko, a computer engineering student from Spain.</Typography>
            <Typography variant='body1' paragraph>I am a learning computer engineer and programmer, who likes to code simple projects like Discord bots or this webpage. </Typography>
            <Typography variant='body1' paragraph>Besides that I also enjoy photography and drawing furries and cute stuff.</Typography>
          </Grid>
        </Grid>

        <br />

        <Grid container spacing={2} >
          <Grid item xs={12} >
            <Typography variant="h2">Fursona Information</Typography>
            <Typography variant="body1">Teko is an arctic fox with blue hair and green&yellow eyes. He has ice powers and can use them to create objects made of ice.</Typography>
          </Grid>
          <Grid item xs={8} >
            <Typography variant="body1"><b>Name: </b>Teko</Typography>
            <Typography variant="body1"><b>Species: </b>Arctic Fox</Typography>
            <Typography variant="body1"><b>Gender: </b>Male</Typography>
            <Typography variant="body1"><b>Height: </b>1.80m</Typography>
            <Typography variant="body1"><b>Birth: </b>22/09</Typography>
            <Typography variant="body1"><b>Personality: </b>Positive, shy, cheerful</Typography>
            <Typography variant="body1"><b>Likes: </b>Music, computers, games, anime, nature, waffles and photography</Typography>
            <Typography variant="body1"><b>Dislikes: </b>Noisy people, crowds and hot places</Typography>
            <Typography variant="body1"><b>Abilities: </b>Ice powers</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h2">Reference Sheet</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
            <img align="left" src={ref} alt="" width={"100%"} />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
            <ColorsTable />
            <br />
            {/* <ColorsThing /> */}
          </Grid>
        </Grid>
      </ThemeProvider>
    )
  }
}

export default About;