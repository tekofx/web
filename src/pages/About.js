import React from "react";
import "./theme.css"
import Avatar from '@mui/material/Avatar';
import avatar from '../img/avatar.png';
import ref from '../img/ref.png';
import Colors from '../components/Colors/Colors';
import Container from '@mui/material/Container';
import Appbar from '../components/Appbar/Appbar';


class About extends React.Component {
  render() {
    return (
      <Container>
        <Appbar />
        <br />
        <div className="contentItems">
          <h1>About</h1>
          <div className="about">
            <Avatar alt="Remy Sharp" src={avatar} sx={{ width: "20%", height: "20%" }} />
            <p className="paragraph">I'm Teko an arctic foxxo from Spain. I love drawing, taking photos and programming. I started this webpage to challenge myself into creating a webpage and for having all my projects and stuff in one site.</p>

          </div>

          <h2>Fursona</h2>


          <div className="table">
            <div className="table_row">
              <div className="fur">
                <p>Teko is an arctic fox who can control ice at his will.</p>
                <img align="left" src={ref} alt="" className="ref" />
              </div>
              <div className="colors">
                <h3>Colors</h3>
                <Colors background="red" />
              </div>

            </div>

          </div>


        </div>
      </Container>



    )
  }
}

export default About;