import { useEffect } from "react";
import { Grid, Typography, Paper, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Skeleton } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageListItem from "@mui/material/ImageListItem";
import getLang from "./Language/Lang";
import { useState, SyntheticEvent } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
interface Post {
  title: string;
  src: string;
  description: EmotionJSX.Element;
}
const allPostsGallery =
  "https://backend.deviantart.com/rss.xml?type=deviation&q=by%3Atekofx+sort%3Atime+meta%3Aall";
const drawingsGallery =
  "https://backend.deviantart.com/rss.xml?q=gallery%3Atekofx%2F76968067&type=deviation";
const photographyGallery =
  "https://backend.deviantart.com/rss.xml?q=gallery%3Atekofx%2F76968076&type=deviation";
export default function ImageGallery() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const t = getLang().gallery;

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  const getImages = async (url: string) => {
    var response = await axios.get(url);
    var repos = response.data;

    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(repos, "text/xml");
    var posts = xmlDoc.getElementsByTagName("item");
    const postsData = [];

    // Navigate each item properties
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i].childNodes;
      var title = null;
      var imageLink = null;
      var deviantartLink = undefined;

      for (var j = 0; j < post.length; j++) {
        if (post[j].nodeName === "title") {
          title = post[j].childNodes[0].nodeValue;
        }

        if (post[j].nodeName === "media:content") {
          imageLink = (post[j] as Element).getAttribute("url");
        }

        if (post[j].nodeName === "link") {
          deviantartLink = post[j].childNodes[0].nodeValue;
        }
      }
      if (imageLink !== null) {
        postsData.push({
          title: title || "",
          src: imageLink,
          description: (
            <Button target="_blank" href={deviantartLink || ""}>
              Deviantart
            </Button>
          ),
        });
      }
    }
    setPosts(postsData);
  };

  const handleChange = (event: SyntheticEvent, newValue: number) => {
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

  function srcset(image: string, size: number, rows = 1, cols = 1) {
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
    <Paper>
      <Stack direction="row" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={<Typography>{t.tabAll}</Typography>} />
          <Tab label={<Typography>{t.tabDrawings}</Typography>} />
          <Tab label={<Typography>{t.tabPhotography}</Typography>} />
        </Tabs>
      </Stack>
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
              // @ts-ignore
              component={motion.li}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              key={key}
              cols={1}
              rows={1}
            >
              <img
                {...srcset(item.src, 100)}
                loading="lazy"
                onClick={toggleOpen}
                key={key}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.description}
                position="bottom"
                key={key}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Paper>
  );
}
