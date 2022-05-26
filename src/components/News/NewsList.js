import * as React from 'react';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { Skeleton } from '@mui/material';
import { Grid } from '@mui/material';
import NewsCard from './NewsCard';
const axios = require("axios");


export default function NewsList() {
    const [releases, setReleases] = React.useState([]);
    const [loading, setLoading] = React.useState(true);


    const getReleases = async () => {
        const url = "https://api.github.com/repos/tekofx/web/releases";
        var webReleases;

        await axios
            .get(url)
            .then((response) => {
                webReleases = response.data;
            })
            .catch((error) => {
            });

        var releasesTemp = [];

        // Sort webreleases by date
        webReleases.sort(function (a, b) {
            return new Date(b.published_at) - new Date(a.published_at);
        });

        webReleases.forEach(element => {
            var release = {}
            release["version"] = element.tag_name;
            release["url"] = element.upload_url;
            release["name"] = element.name;
            release["title"] = element.name;

            // Date
            var date = new Date(element.published_at);
            release["date"] = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();

            // Body
            var body = element.body;
            body = body.replace("\n", "");

            var changes = []
            release["changes"] = body.split("\n").forEach(line => {
                if (line.startsWith("###")) {
                    changes.push(<Typography variant='h6'>{line.replace("###", "")}</Typography>);
                } else if (line.startsWith("-")) {
                    changes.push(<Typography variant="body2">{line}</Typography>)
                } else {
                    changes.push(line)
                }
            });
            release["changes"] = changes;
            releasesTemp.push(release);
        });
        setReleases(releasesTemp);
        setLoading(false);
    }


    useEffect(() => {
        const fetchData = async () => {
            await getReleases();
        }
        fetchData();
    }, []);

    return (
        <>
            {
                (loading ? Array.from(new Array(30)) : releases).map((item, index) => (

                    <Grid item key={index} sx={{
                        paddingBottom: "5%", left: '50%'
                    }}>
                        {item ? (
                            <NewsCard title={item.title} date={item.date} text={item.text} changes={item.changes} index={index} />
                        ) : (
                            <Skeleton variant="rectangular" width={300} height={250} />
                        )}
                    </Grid>
                ))
            }
        </ >
    );
}

