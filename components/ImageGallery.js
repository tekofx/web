import * as React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Skeleton } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageListItem from "@mui/material/ImageListItem";
import getLang from "./Lang";
import { useState } from "react";
import { motion } from "framer-motion"

const axios = require("axios");

const allPostsGallery =
  "https://backend.deviantart.com/rss.xml?type=deviation&q=by%3Atekofx+sort%3Atime+meta%3Aall";
const drawingsGallery =
  "https://backend.deviantart.com/rss.xml?q=gallery%3Atekofx%2F76968067&type=deviation";
const photographyGallery =
  "https://backend.deviantart.com/rss.xml?q=gallery%3Atekofx%2F76968076&type=deviation";
export default function ImageGallery() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [value, setValue] = React.useState(0);
  const t = getLang().gallery;

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  const getImages = async (url) => {
    var repos;
    await axios
      .get(url)
      .then((response) => {
        repos = response.data;
        // Check if image exists
      })
      .catch((error) => { });

    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(repos, "text/xml");
    var posts = xmlDoc.getElementsByTagName("item");
    const postsData = [];

    // Navigate each item properties
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i].childNodes;
      var title = null;
      var imageLink = null;
      var deviantartLink = null;

      for (var j = 0; j < post.length; j++) {
        if (post[j].nodeName === "title") {
          title = post[j].childNodes[0].nodeValue;
        }

        if (post[j].nodeName === "media:content") {
          imageLink = post[j].getAttribute("url");
        }

        if (post[j].nodeName === "link") {
          deviantartLink = post[j].childNodes[0].nodeValue;
        }
      }
      if (imageLink !== null) {
        postsData.push({
          title: title,
          src: imageLink,
          description: (
            <Button target="_blank" href={deviantartLink}>
              Deviantart
            </Button>
          ),
        });
      }
    }
    setPosts(postsData);
  };

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

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: image,

      width: size * cols,
      height: size * rows,
    };
  }

  useEffect(() => {
    const fetchData = async () => {
      await getImages(allPostsGallery);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={<Typography>{t.tabAll}</Typography>} />
          <Tab label={<Typography>{t.tabDrawings}</Typography>} />
          <Tab label={<Typography>{t.tabPhotography}</Typography>} />
        </Tabs>
      </Box>
      {loading ? (
        <Grid
          container
          spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
        >
          {Array.from(Array(30).keys()).map((_, i) => (
            <Grid item lg={2} key={i}>
              <Skeleton variant="rectangular" sx={{ minHeight: 200 }} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <ImageList
          variant="quilted"
          sx={{
            mb: 8,
            gridTemplateColumns:
              "repeat(auto-fill,minmax(280px,1fr))!important",
          }}
        >
          {posts.map((item, key) => (
            <ImageListItem
              component={motion.li}
              whileHover={{ scale: 1.080 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              key={key}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.src, 100, item.rows, item.cols)}
                alt={item.lightboxTitle}
                loading="lazy"
                onClick={toggleOpen}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.description}
                position="bottom"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
}
