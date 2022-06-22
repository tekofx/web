import * as React from 'react';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { Skeleton } from '@mui/material';
import { Grid } from '@mui/material';
import NewsCard from './NewsCard';

const axios = require("axios");


export default function NewsList() {
    const [releases, setReleases] = React.useState([{ title: 'a', date: 'b', url: 'c' }]);
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

        // Get first 4
        webReleases = webReleases.slice(0, 4);

        webReleases.forEach(element => {
            var release = {}
            release["version"] = element.tag_name;
            release["url"] = element.html_url;
            release["title"] = element.name;

            // Date
            var date = new Date(element.published_at);
            release["date"] = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();

            // Body
            var body = element.body;

            var changes = []
            release["changes"] = body.split("\n").forEach(line => {
                if (line.startsWith("###")) {
                    changes.push(<Typography variant='h6'>{line.replace("###", "")}</Typography>);
                } else {
                    changes.push(<Typography variant="body2">{line}</Typography>)
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
                (loading ? Array.from(new Array(4)) : releases).map((item, index) => (

                    <Grid item key={index} sx={{
                        paddingBottom: "5%", left: '50%'
                    }}>
                        {item ? (
                            <NewsCard title={item.title} date={item.date} url={item.url} changes={item.changes} index={index} />
                        ) : (
                            <Skeleton variant="rectangular"  >
                                <NewsCard title="Default new title" date="16/03/2020" url="url" changes="changes" index={index} />
                            </Skeleton>
                        )}
                    </Grid>
                ))
            }
        </ >
    );
}

