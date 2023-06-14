import React from "react";
import { Grid } from "@mui/material";
import getLang from "../components/Language/Lang";
import Head from "next/head";
import Arrow from "../components/Arrow";


function About() {
    const t = getLang().about;

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>About | Teko Tundra</title>

            </Head>


            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} style={{ position: 'relative' }}>
                    <img src={process.env.PUBLIC_URL + "img/avatar.jpg"} alt="Teko Tundra" style={{ width: "40%", height: "auto" }} />

                    <div style={{ position: 'absolute', top: "40%", left: "30%" }}>

                        <Arrow />
                    </div>
                </Grid>



            </Grid>
        </div>
    );
}

export default About;
