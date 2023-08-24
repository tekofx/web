import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import Theme from "../src/theme";

interface ChipProps {
  text: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  onClick?: any;
}
export default function Chip({
  text,
  backgroundColor,
  width,
  height,
  onClick,
}: ChipProps) {
  return (
    <>
      {/*@ts-ignore */}
      <motion.div
        style={{
          backgroundColor: backgroundColor || Theme.palette.primary.main,
          width: width || "15rem",
          height: height || "3rem",
          borderRadius: "100rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        onClick={onClick}
      >
        <Typography variant="chip">{text}</Typography>
      </motion.div>
    </>
  );
}
