import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Seasons from "../components/Seasons";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Grid, Typography } from "@mui/material";
import Head from "next/head";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
export default function Index() {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />

        <meta name="og:title" content="Home" />
        <meta name="og:description" content="Home page" />
        <meta name="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tekofx.github.io" />
        <meta name="twitter:title" content="Teko's Tundra" />
        <meta name="twitter:description" content="Home" />
      </Head>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">titutlo</Typography>
          <Typography variant="body1">texto</Typography>
          <Grid container>
            <Grid item xs={12} sm={10} md={6} lg={6}>
              <Seasons />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
