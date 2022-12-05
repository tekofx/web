import { Typography } from "@mui/material"
import { motion } from "framer-motion";



export default function Chip(props) {
    return (
        <motion.div
            style={{ backgroundColor: "white", width: "15rem", height: "5rem", borderRadius: "100rem", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}
            whileHover={{ scale: 1.20, backgroundColor: "white", color: "black" }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            onClick={props.onClick}

        >
            <Typography color={"black"} variant="body2">{props.text}</Typography>
        </motion.div>
    )
}