import * as React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Grid, Typography, Paper, IconButton, Stack, Dialog } from "@mui/material";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Skeleton } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageListItem from "@mui/material/ImageListItem";
import getLang from "../Language/Lang";
import Theme from "../../src/theme";
import { useState } from "react";
import { motion } from "framer-motion"
import LaunchIcon from '@mui/icons-material/Launch';
const aux = [{
    src: process.env.PUBLIC_URL + "img/juaguelin.png",
    title: "By Teko",
    author: "Teko",
    description: "",
    lightBoxTitle: ""

}, {
    src: process.env.PUBLIC_URL + "img/among_us.png",
    title: "By Teko",
    author: "Teko",
    description: "",
    lightBoxTitle: ""
},
{
    src: process.env.PUBLIC_URL + "img/summer - lgtb.jpg",
    title: "By Teko",
    author: "Teko",
    description: "",
    lightBoxTitle: ""
},
{
    src: process.env.PUBLIC_URL + "img/Merry Foxmas.png",
    title: "By Teko",
    author: "Teko",
    description: "",
    lightBoxTitle: ""
},
{
    src: process.env.PUBLIC_URL + "img/Autumn.png", title: "By Teko",
    description: "",
    author: "Teko",
    lightBoxTitle: ""
},
{
    src: process.env.PUBLIC_URL + "img/ref-small.jpg", title: "By Teko",
    description: "",
    author: "Teko",
    lightBoxTitle: ""
}

]

export default function Gallery() {
    const [images, setImages] = React.useState(aux);
    const [loading, setLoading] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const t = getLang().gallery;

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };


    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: image,

            width: size * cols,
            height: size * rows,
        };
    }

    const onImageClick = (image) => {
        console.log(image);
        setValue(image);
        setOpen(true);
    };



    return (
        <>
            <Paper sx={{ p: 2 }}>
                <Typography variant="h1" textAlign="left">{t.title}</Typography>

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
                    <div className="gallery">

                        {images.map((image) => (
                            <motion.div className="pics"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                onClick={() => onImageClick(image)}
                            >
                                <img src={image.src} alt={image.title} className="pic" />
                                <Paper className="text"
                                    component={motion.div}
                                    whileHover={{ backgroundColor: Theme.palette.primary.main }}
                                    transition={{
                                        ease: "easeIn",
                                        duration: 0.2,
                                    }}
                                >
                                    <Stack direction="row" spacing={1}>
                                        <Typography>Art by {image.author}</Typography>
                                        <LaunchIcon />
                                    </Stack>
                                </Paper>
                            </motion.div>
                        ))}
                    </div>

                )}
            </Paper>

            <Dialog open={open} onClose={toggleOpen} maxWidth="lg" PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            }}>
                <img src={value.src} alt={value.title} style={{ height: "100%", width: "auto" }} />
            </Dialog>
        </>

    );
}
