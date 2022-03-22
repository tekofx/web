import React from "react";
import Header from "../components/Header/Header";
import "./theme.css"
import Card from '../components/Card/Card';

class Home extends React.Component {
  render() {
    return (
      <div className="pageContent">
        <Header />
        <br />
        <div className="contentItems">
          <h1>Welcome</h1>
          <p>On this page I will collect all the information / projects that I am doing, most of them related to Furry Fandom</p>
          <hr />
          <Card title="owo" description="dasf" />
        </div>



      </div>

    )
  }
}

export default Home;