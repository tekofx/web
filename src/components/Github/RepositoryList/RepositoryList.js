import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Repository from '../Repository/Repository';
import { useEffect } from 'react';
const axios = require("axios");



export default function BasicGrid() {
    const [repos, setRepos] = React.useState([]);

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


    const getGroupUsers = async () => {
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


        // Check if image exists
        for (let i = 0; i < repos.length; i++) {
            const exists = await existsImage("https://raw.githubusercontent.com/tekofx/" + repos[i].name + "/main/assets/banner.png");
            if (!exists) {
                repos[i].img = "https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png";
            } else {
                repos[i].img = "https://raw.githubusercontent.com/tekofx/" + repos[i].name + "/main/assets/banner.png";
            }
        }
        setRepos(repos);

    }

    useEffect(() => {
        const fetchData = async () => {
            await getGroupUsers();
        }
        fetchData();
    }, []);


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {repos.map((item) => (
                        <Grid item xs={4}>
                            <Repository title={item.name} description={item.description} url={item.html_url} img={item.img} />
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </>
    );
}
