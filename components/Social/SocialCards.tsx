import {
  FaTwitter,
  FaDeviantart,
  FaMastodon,
  Fa500Px,
  FaInstagram,
  FaGithub,
  FaCloud,
} from "react-icons/fa";

import { Grid } from "@mui/material";
import { FurAffinity } from "../Icons/FurAffinity";
import { Itaku } from "../Icons/Itaku";

import AnimatedCard from "./SocialCard";

export default function SocialCards() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={3} lg={3}>
        <AnimatedCard
          icon={<FaTwitter />}
          content="Twitter"
          subcontent="@Teko_fx"
          url="https://twitter.com/teko_fx"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={3}>
        <AnimatedCard
          icon={<FaCloud />}
          content="Bluesky"
          subcontent="@tekofx.es"
          url="https://bsky.app/profile/tekofx.es"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={3}>
        <AnimatedCard
          icon={<FaMastodon />}
          content="Mastodon"
          subcontent="meow.social@teko"
          url="https://meow.social/@teko"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={3}>
        <AnimatedCard
          icon={<FaGithub />}
          content="Github"
          subcontent="tekofx"
          url="https://github.com/tekofx"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={3}>
        <AnimatedCard
          icon={<FaDeviantart />}
          content="DeviantArt"
          subcontent="tekofx"
          url="https://www.deviantart.com/tekofx"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={3}>
        <AnimatedCard
          icon={<Fa500Px />}
          content="500px"
          subcontent="tekofx"
          url="https://500px.com/p/tekofx"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={3}>
        <AnimatedCard
          icon={<FaInstagram />}
          content="Instagram"
          subcontent="teko_fx"
          url="https://www.instagram.com/teko_fx/"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={3}>
        <AnimatedCard
          icon={<FurAffinity />}
          content="FurAffinity"
          subcontent="teko."
          url="https://www.furaffinity.net/user/teko."
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={3}>
        <AnimatedCard
          icon={<Itaku />}
          content="Itaku"
          subcontent="@teko"
          url="https://www.itaku.ee/profile/teko"
        />
      </Grid>
    </Grid>
  );
}
