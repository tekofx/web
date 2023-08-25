import * as React from "react";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import GithubRepo from "./CardRepo";
import axios from "axios";
import CardRepoSkeleton from "./CardRepoSkeleton";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  img: string;
  topics: string[];
}

export default function RepositoryList() {
  const [repos, setRepos] = React.useState<Repo[]>([]);
  const [loading, setLoading] = React.useState(true);

  async function existsImage(url: string): Promise<boolean> {
    var output = false;
    await axios
      .get(url)
      .then(() => {
        output = true;
      })
      .catch(() => {
        output = false;
      });
    return output;
  }

  const getRepos = async () => {
    const url = "https://api.github.com/users/tekofx/repos";
    var response = await axios.get<Repo[]>(url);
    var repos = response.data;

    var resposTemp: Repo[] = [];

    for (const repo of repos) {
      const exists = await existsImage(
        "https://raw.githubusercontent.com/tekofx/" +
          repo.name +
          "/main/assets/banner.png"
      );
      if (exists) {
        repo.img =
          "https://raw.githubusercontent.com/tekofx/" +
          repo.name +
          "/main/assets/banner.png";
        resposTemp.push(repo);
      }
    }
    setRepos(resposTemp);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getRepos();
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, sm: 1, md: 2, lg: 2 }}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      >
        {loading
          ? Array.from(Array(10).keys()).map((_, i) => (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={2} key={i}>
                <CardRepoSkeleton />
              </Grid>
            ))
          : repos.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={2} key={index}>
                <GithubRepo repo={item} />
              </Grid>
            ))}
      </Grid>
    </>
  );
}
