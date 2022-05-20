import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useEffect } from 'react';
const axios = require("axios");



export default function TitlebarImageList() {
  const [posts, setPosts] = React.useState([]);

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
          "title": title,
          "img": link,
        })
      }
    }
    setPosts(postsData);
  }

  useEffect(() => {
    const fetchData = async () => {
      await getImages();
    }
    fetchData();
  }, []);



  return (
    <ImageList cols={3}>
      <ImageListItem>
      </ImageListItem>
      {
        posts.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))
      }
    </ImageList >
  );
}

