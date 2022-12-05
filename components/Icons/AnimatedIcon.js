import { IconButton } from "@mui/material";
import { motion } from "framer-motion";

export default function AnimatedIcon(props) {
  return (
    <IconButton
      LinkComponent={motion.a}
      target="_blank"
      href={props.url}
      whileHover={{ scale: 1.080, backgroundColor: "white", color: "black" }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {props.icon}
    </IconButton>
  );
}
