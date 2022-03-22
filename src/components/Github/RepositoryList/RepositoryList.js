import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Repository from '../Repository/Repository';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function getRepos() {
    const url = "https://api.github.com/users/tekofx/repos"
    const ouput = [];
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", url, false);
    xmlHttpReq.send(null);
    var response = xmlHttpReq.responseText;
    var json = JSON.parse(response);
    json.forEach(function (valor, indice, array) {
        console.log("En el índice " + indice + " hay este valor: " + valor.name);
        var aux = {
            title: valor.name,
            description: valor.description,
            url: valor.html_url,
            img: "https://raw.githubusercontent.com/tekofx/" + valor.name + "/main/assets/logo.png",
        }
        ouput.push(aux);
        console.log(aux.img)
    });
    return ouput;

}

export default function BasicGrid() {
    const repos = getRepos();
    console.log(repos);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {repos.map((item) => (
                        <Grid item xs={8}>
                            <Item>xs=8</Item>
                            <Repository title={item.name} description={item.description} url={item.html_url} img={item.img} />
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </>





    );
}
