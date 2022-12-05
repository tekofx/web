import { Typography } from "@mui/material"
import { motion } from "framer-motion";



export default function Chip() {
    return (
        <motion.div
            style={{ backgroundColor: "white", width: "15rem", height: "5rem", borderRadius: "100rem", display: "flex", justifyContent: "center", alignItems: "center" }}
            whileHover={{ scale: 1.20, backgroundColor: "white", color: "black" }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
            <Typography color={"black"} variant="body2">Chip</Typography>
        </motion.div>
    )
}