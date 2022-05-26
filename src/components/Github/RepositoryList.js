import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Repository from './Repository';
import { useEffect } from 'react';
import { Skeleton } from '@mui/material';
const axios = require("axios");


export default function BasicGrid(props) {
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
            });;

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
            .catch((error) => {
            });
        var reposWithImg = [];
        var reposWithoutImg = [];
        // Check if image exists
        for (let i = 0; i < repos.length; i++) {
            const exists = await existsImage("https://raw.githubusercontent.com/tekofx/" + repos[i].name + "/main/assets/banner.png");
            if (!exists) {
                repos[i].img = "https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png";
                reposWithoutImg.push(repos[i]);
            } else {
                repos[i].img = "https://raw.githubusercontent.com/tekofx/" + repos[i].name + "/main/assets/banner.png";
                reposWithImg.push(repos[i]);
            }
        }

        // Join arrays
        repos = [];
        repos = reposWithImg.concat(reposWithoutImg);
        setRepos(repos);
        setLoading(false);
    }

    useEffect(() => {
        const fetchData = async () => {
            await getRepos();
        }
        fetchData();
    }, []);


    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={{ xs: 1, sm: 1, md: 3, lg: 4 }} columns={{ xs: 12, sm: 12, md: 12, lg: 10, xl: 12 }}>
                {(loading ? Array.from(new Array(30)) : repos).map((item, index) => (

                    item ? (
                        <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={index} >

                            <Repository title={item.name} description={item.description} url={item.html_url} img={item.img} />
                        </Grid>
                    ) : (
                        <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={index} >

                            <Skeleton variant="rectangular"  >
                                <Repository />
                            </Skeleton>
                        </Grid>

                    )
                ))}

            </Grid>
        </Box>
    );
}
