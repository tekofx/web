import * as React from "react";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";

const point1 = {
    x: "0%",
    y: "0%",

}

const point2 = {
    x: "20%",
    y: "30%",
}

const point3 = {
    x: "100%",
    y: "30%",
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

const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i) => ({
        opacity: 1,
        transition: { delay: 3 + i * 0.5 }
    })
};

const Arrow = () => {
    const text = "Texto largo que se ajusta al ancho del SVG";
    const maxWidth = 100;
    const lineHeight = 20;
    const svgHeight = 200;

    const words = text.split(" ");
    const lines = [];
    let currentLine = "";

    words.forEach((word) => {
        if (currentLine.length + word.length > maxWidth) {
            lines.push(currentLine);
            currentLine = "";
        }
        currentLine += word + " ";
    });
    lines.push(currentLine);

    return (
        <Grid container >
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ paddingTop: 0 }}>

                <motion.svg
                    width="100%"
                    height="500"
                    viewBox="0 0 100% 500"
                    initial="hidden"
                    animate="visible"

                >
                    <motion.line
                        x1={point1.x}
                        y1={point1.y}
                        x2={point2.x}
                        y2={point2.y}
                        stroke="#00cc88"
                        variants={draw1}
                        custom={2}
                    />
                    <motion.line
                        x1={point2.x}
                        y1={point2.y}
                        x2={point3.x}
                        y2={point3.y}
                        stroke="#00cc88"
                        variants={draw2}
                        custom={2}
                    />

                    <motion.text
                        x="20%"
                        y="40%"
                        font-size="50"
                        variants={fadeIn}
                        custom={2}
                        fill="#ffffff"

                    >
                        Este es un texto de prueba en el que intento comprobar como quedaria el texto este
                    </motion.text>


                </motion.svg>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={12} lg={12} sx={{ paddingTop: 0 }}>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    color="#00cc88"
                >
                    ¡Hola!
                </motion.h1>
            </Grid> */}

        </Grid>
    );
};

export default Arrow;