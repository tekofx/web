import * as React from "react";
import {
  Typography,
  Paper,
  Stack,
  Dialog,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Theme from "../../src/theme";
import { useState } from "react";
import { motion } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface Image {
  id: number;
  src: string;
  title?: string;
  author: string;
  url: string;
}

const images = [
  {
    id: 0,
    src: process.env.PUBLIC_URL + "img/tortugas.png",
    author: "Liss",
    url: "https://twitter.com/lissetvaras",
  },
  {
    id: 1,
    src: process.env.PUBLIC_URL + "img/juaguelin.png",
    author: "Teko",
    url: "https://twitter.com/teko_fx",
  },
  {
    id: 2,
    src: process.env.PUBLIC_URL + "img/halloween.png",
    author: "Teko",
    url: "https://twitter.com/teko_fx",
  },
  {
    id: 3,
    src: process.env.PUBLIC_URL + "img/eros.png",
    author: "Eros",
    url: "https://twitter.com/Eroskyi",
  },
  {
    id: 4,
    src: process.env.PUBLIC_URL + "img/Autumn.png",
    title: "By Teko",
    author: "Teko",
    url: "https://twitter.com/teko_fx",
  },
  {
    id: 5,
    src: process.env.PUBLIC_URL + "img/summer - lgtb.jpg",
    author: "Teko",
    url: "https://twitter.com/teko_fx",
  },
  {
    id: 6,
    src: process.env.PUBLIC_URL + "img/Merry Foxmas.png",
    author: "Teko",
    url: "https://twitter.com/teko_fx",
  },
  {
    id: 7,
    src: process.env.PUBLIC_URL + "img/liss.png",
    author: "Liss",
    url: "https://twitter.com/lissetvaras",
  },
];

export default function Gallery() {
  const [value, setValue] = React.useState<Image>(images[0]);
  const [expanded, setExpanded] = React.useState(true);

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const onImageClick = (image: Image) => {
    setValue(image);
    setOpen(true);
  };

  return (
    <Accordion expanded={expanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onClick={() => setExpanded(!expanded)}
        sx={{ margin: "10px", cursor: "pointer" }}
      >
        <Typography variant="h1" textAlign="left">
          Gallery
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="gallery">
          {images.map((image: Image) => (
            <div key={image.id}>
              {/*@ts-ignore */}
              <motion.div
                className="pics"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="pic"
                  onClick={() => onImageClick(image)}
                />
                <Paper
                  className="text"
                  // @ts-ignore
                  component={motion.div}
                  whileHover={{ backgroundColor: Theme.palette.primary.main }}
                  transition={{
                    ease: "easeIn",
                    duration: 0.2,
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    onClick={() => window.open(image.url, "_blank")}
                  >
                    <Typography>Art by {image.author}</Typography>
                    <LaunchIcon />
                  </Stack>
                </Paper>
              </motion.div>
            </div>
          ))}
        </div>
      </AccordionDetails>

      <Dialog
        open={open}
        onClose={toggleOpen}
        maxWidth="lg"
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            backgroundImage: "unset",
            boxShadow: "none",
          },
        }}
      >
        <img
          src={value.src}
          alt={value.title}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          onClick={toggleOpen}
        />
      </Dialog>
    </Accordion>
  );
}
