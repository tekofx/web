import * as React from 'react';
import Box from '@mui/material/Box';
import ResponsiveGallery from "react-responsive-gallery";
import { useEffect } from 'react';
import { Grid } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Skeleton } from '@mui/material';
const axios = require("axios");
const { parse } = require('rss-to-json');

const allPostsGallery = "https://backend.deviantart.com/rss.xml?type=deviation&q=by%3Atekofx+sort%3Atime+meta%3Aall"
const drawingsGallery = "https://backend.deviantart.com/rss.xml?q=gallery%3Atekofx%2F76968067&type=deviation"
const photographyGallery = "https://backend.deviantart.com/rss.xml?q=gallery%3Atekofx%2F76968076&type=deviation"
export default function ImageList() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [value, setValue] = React.useState(0);

  const getImages = async (url) => {

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

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        getImages(allPostsGallery);
        break;
      case 1:
        getImages(drawingsGallery);
        break;
      case 2:
        getImages(photographyGallery);
        break;
      default:
        break;
    }
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getImages(allPostsGallery);
      //await get500pxPics();
      setLoading(false);
    }
    fetchData();
  }, []);

  return (

    <Box sx={{ flexGrow: 1 }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All" />
          <Tab label="Drawings" />
          <Tab label="Photography" />
        </Tabs>

      </Box>
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

