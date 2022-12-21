import { Typography } from "@mui/material"
import { motion } from "framer-motion";
import Theme from "../src/theme";


export default function Chip(props) {
    var backgroundColor = Theme.palette.primary.main;
    var width = "15rem";
    var height = "3rem";

    if (props.backgroundColor) {
        backgroundColor = props.backgroundColor;
    }
    if (props.width) {
        width = props.width;
    }
    if (props.height) {
        height = props.height;
    }



    return (
        <motion.div
            style={{ backgroundColor: backgroundColor, width: width, height: height, borderRadius: "100rem", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}
            whileHover={{ scale: 1.10 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            onClick={props.onClick}

        >
            <Typography variant="chip">{props.text}</Typography>
        </motion.div>
    )
}