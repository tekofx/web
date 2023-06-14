import * as React from "react";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const point1 = {
    x: "0%",
    y: "0%",

}

const point2 = {
    x: "30%",
    y: "100%",
}

const point3 = {
    x: "100%",
    y: "100%",
}


const draw1 = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
                repeat: Infinity,
                repeatType: "reverse",
            }
        };
    }
};

const draw2 = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 2 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
                repeat: Infinity,
                repeatType: "reverse",
            }
        };
    }
};



const Arrow = () => {


    return (
        <Grid container >
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ paddingTop: 0 }}>

                <motion.svg
                    width="100%"
                    height="100"
                    initial="hidden"
                    animate="visible"

                >
                    <motion.line
                        x1={point1.x}
                        y1={point1.y}
                        x2={point2.x}
                        y2={point2.y}
                        stroke="#ffffff"
                        strokeWidth={3}
                        variants={draw1}
                        custom={2}
                    />

                    <motion.line
                        x1={point2.x}
                        y1={point2.y}
                        x2={point3.x}
                        y2={point3.y}
                        stroke="#ffffff"
                        variants={draw2}
                        strokeWidth={3}
                        custom={2}
                    />


                </motion.svg>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ paddingLeft: point2.x }}>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 4 }}
                    color="#00cc88"

                >
                    <Typography variant="h4" color="#ffffff" sx={{ fontSize: "2vw" }} >
                        Este es un texto de ejemplo para probar el efecto de animación de la flecha
                    </Typography>
                </motion.div>

            </Grid>

        </Grid>
    );
};

export default Arrow;