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

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];