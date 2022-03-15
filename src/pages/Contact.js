import React from "react";
import Header from "../components/Header/Header";
import "./theme.css"


class Contact extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h1>Social Networks</h1>
        <div class="block_social_networks">
          <div class="social_network">
            <a target="_blank" href="https://github.com/Tekofx"><img class="social_logo" src="img/github.svg" alt="" /></a>
            <h2 class="social_text">Github</h2>
            <p class="social_text">Here I have all my tech related projects like the repo of this website</p>
          </div>
          <div class="social_network">
            <a target="_blank" href="https://twitter.com/Teko_fx"><img class="social_logo" src="img/twitter.svg" alt="" /></a>
            <h2 class="social_text">Twitter</h2>
            <p class="social_text">The social network that I use the most and where I RT to art and furry things</p>
          </div>
          <div class="social_network">
            <a target="_blank" href="https://www.instagram.com/teko_fx/"><img class="social_logo" src="img/instagram.svg" alt="" /></a>
            <h2 class="social_text">Instagram</h2>
            <p class="social_text">I'm not very active but I post my drawings once in a while</p>
          </div>
          <div class="social_network">
            <a target="_blank" href="https://www.furaffinity.net/user/teko./"><img class="social_logo" src="img/furaffinity.svg" alt="" /></a>
            <h2 class="social_text">Furaffinity</h2>
            <p class="social_text">The biggest furry social network, but I'm not too much active in there</p>
          </div>
          <div class="social_network">
            <a target="_blank" href="https://www.deviantart.com/tekofx"><img class="social_logo" src="img/deviantart.svg" alt="" /></a>
            <h2 class="social_text">DeviantArt</h2>
            <p class="social_text">The best place to see my photographies and drawings</p>
          </div>
        </div>


      </>

    )
  }
}

export default Contact;