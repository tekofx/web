import * as React from 'react';
import Box from '@mui/material/Box';
import ResponsiveGallery from "react-responsive-gallery";
import { useEffect } from 'react';
import { Grid } from "@mui/material";

import { Skeleton } from '@mui/material';
const axios = require("axios");
const { parse } = require('rss-to-json');



export default function ImageList() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);


  // FIXME: 500px blocks the API call.
  const get500pxPics = async () => {
    const url = "https://500px.com/tekofx/rss";
    var rss = await parse(url);

    var posts = JSON.stringify(rss, null, 3);

    posts = JSON.parse(posts);
    console.log(posts);

    var output = [];

    // Recorrer posts
    for (var i = 0; i < posts.items.length; i++) {
      var item = posts.items[i];
      var image = item.link;
      var title = item.title;
      await axios
        .get(image)
        .then(function (response) {
          console.log(response)
        });


      output.push({ "img": image, "title": title });
    }
    console.log(output)

    setPosts(output);


  }

  const getImages = async () => {
    const url = "https://backend.deviantart.com/rss.xml?type=deviation&q=by%3Atekofx+sort%3Atime+meta%3Aall"

    var repos;
    await axios
      .get(url)
      .then((response) => {
        repos = response.data;
        // Check if image exists
      })
      .catch((error) => {
      });

    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(repos, "text/xml");
    var posts = xmlDoc.getElementsByTagName("item");
    const postsData = [];

    // Navigate each item properties
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i].childNodes;
      var title = null;
      var link = null;

      for (var j = 0; j < post.length; j++) {
        if (post[j].nodeName === "title") {
          title = post[j].childNodes[0].nodeValue;
          //console.log(title);
        }

        if (post[j].nodeName === "media:content") {
          link = post[j].getAttribute('url');
          //console.log(link);
        }
      }
      if (link !== null) {
        postsData.push({
          "lightboxTitle": title,
          "src": link,
        })
      }
    }
    setPosts(postsData);
  }

  useEffect(() => {
    const fetchData = async () => {
      await getImages();
      //await get500pxPics();
      setLoading(false);
    }
    fetchData();
  }, []);

  return (

    <Box sx={{ flexGrow: 1 }} >
      {loading ?
        <Grid container spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }} columns={{ xs: 12, sm: 12, md: 12, lg: 10, xl: 12 }}>
          {Array.from(Array(30).keys()).map((_, i) => (
            <Grid item lg={2}>
              <Skeleton variant="rectangular" sx={{ minHeight: 200 }} />
            </Grid>
          ))}
        </Grid>
        :
        <ResponsiveGallery useLightBox='true' images={posts} />
      }
    </Box>
  );
}

