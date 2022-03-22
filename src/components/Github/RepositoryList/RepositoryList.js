import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Repository from '../Repository/Repository';


function getJSON(url) {
    /**
     * Get the json from the url
     */

    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", url, false);
    xmlHttpReq.send(null);
    var response = xmlHttpReq.responseText;
    var json = JSON.parse(response);
    return json;
}


function getRepos() {
    /**
     * Get the repositories from the github api
     */
    const url = "https://api.github.com/users/tekofx/repos"
    const ouput = [];
    var json = getJSON(url);

    json.forEach(function (valor, indice, array) {
        var aux = {
            title: valor.name,
            description: valor.description,
            url: valor.html_url,
            img: "https://raw.githubusercontent.com/tekofx/" + valor.name + "/main/assets/logo.png",
        }

        // If logo doesn't exist, use the default one
        if (!doesFileExist(aux.img)) {
            aux.img = "https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png";
        }

        ouput.push(aux);
    });
    return ouput;
}


function doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();

    return xhr.status !== 404;
}


export default function BasicGrid() {
    const repos = getRepos();
    console.log(repos);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {repos.map((item) => (
                        <Grid item xs={4}>
                            <Repository title={item.title} description={item.description} url={item.html_url} img={item.img} />
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </>





    );
}
