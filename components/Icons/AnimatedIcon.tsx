import { IconButton } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
  url: string;
  icon: any;
}
export default function AnimatedIcon(props: Props) {
  return (
    //@ts-ignore
    <IconButton
      LinkComponent={motion.a}
      target="_blank"
      href={props.url}
      whileHover={{ scale: 1.08, backgroundColor: "white", color: "black" }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {props.icon}
    </IconButton>
  );
}
