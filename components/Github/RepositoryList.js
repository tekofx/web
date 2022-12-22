import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { Card, CardMedia, Skeleton, CardContent } from "@mui/material";
import GithubRepo from "./CardRepo";
import axios, * as others from "axios";
import CardRepoSkeleton from "./CardRepoSkeleton";

export default function RepositoryList(props) {
  const [repos, setRepos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function existsImage(url) {
    let output;
    await axios
      .get(url)
      .then((response) => {
        output = true;
      })
      .catch((error) => {
        output = false;
      });

    return output;
  }

  const getRepos = async () => {
    const url = "https://api.github.com/users/tekofx/repos";
    var repos;
    await axios
      .get(url)
      .then((response) => {
        repos = response.data;
        // Check if image exists
      })
      .catch((error) => { });
    var reposWithImg = [];
    var reposWithoutImg = [];
    // Check if image exists
    for (let i = 0; i < repos.length; i++) {
      const exists = await existsImage(
        "https://raw.githubusercontent.com/tekofx/" +
        repos[i].name +
        "/main/assets/banner.png"
      );
      if (!exists) {
        continue;
      }
      repos[i].img =
        "https://raw.githubusercontent.com/tekofx/" +
        repos[i].name +
        "/main/assets/banner.png";
      reposWithImg.push(repos[i]);

    }

    // Join arrays
    repos = [];
    repos = reposWithImg.concat(reposWithoutImg);
    setRepos(repos);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getRepos();
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 1, sm: 1, md: 2, lg: 2 }}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      >
        {(loading ? Array.from(new Array(10)) : repos).map((item, index) =>
          item ? (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2} key={index}>
              <GithubRepo
                title={item.name}
                description={item.description}
                url={item.html_url}
                img={item.img}
                topics={item.topics}
              />
            </Grid>
          ) : (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2} key={index}>
              <CardRepoSkeleton />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}
