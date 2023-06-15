import * as React from "react";
import { Grid, Typography, Paper, Stack, Dialog, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Skeleton } from "@mui/material";
import getLang from "../Language/Lang";
import Theme from "../../src/theme";
import { useState } from "react";
import { motion } from "framer-motion"
import LaunchIcon from '@mui/icons-material/Launch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const images = [{
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
    const [loading, setLoading] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [expanded, setExpanded] = React.useState(true);
    const t = getLang().gallery;

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };




    const onImageClick = (image) => {
        console.log(image);
        setValue(image);
        setOpen(true);
    };



    return (
        <Accordion expanded={expanded} onClick={() => setExpanded(!expanded)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h1" textAlign="left">{t.title}</Typography>
            </AccordionSummary>
            <AccordionDetails
            >
                <Paper sx={{ p: 2 }}>

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
            </AccordionDetails>

            <Dialog open={open} onClose={toggleOpen} maxWidth="lg" PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            }}>
                <img src={value.src} alt={value.title} style={{ height: "100%", width: "auto" }} />
            </Dialog>
        </Accordion >

    );
}
