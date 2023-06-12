import * as React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Skeleton } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageListItem from "@mui/material/ImageListItem";
import getLang from "../Language/Lang";
import { useState } from "react";
import { motion } from "framer-motion"

const axios = require("axios");
const aux = [{
    src: process.env.PUBLIC_URL + "img/juaguelin.png",
    title: "By Teko",
    description: "",
    lightBoxTitle: ""

}, {
    src: process.env.PUBLIC_URL + "img/among_us.png",
    title: "By Teko",
    description: "",
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



    return (
        <Paper sx={{ p: 2 }}>
            <Typography variant="h1" textAlign="left">{t.title}</Typography>

            <Box sx={{ flexGrow: 1 }}>
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
                            gridTemplateColumns:
                                "repeat(auto-fill,minmax(280px,1fr))!important",
                        }}
                    >
                        {images.map((item, key) => (
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
        </Paper>
    );
}
