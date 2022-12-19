import { motion } from "framer-motion";
const colors = [
  "#2D2D2D",
  "#A0A0A0",
  "#F7F7F7",
  "#2C7DE6",
  "#00DBFF",
  "#F0A19C",
  "#11B55D",
  "#E2E565",
]
export default function ColorPalette(props) {
  const toggleColorChange = (color) => {
    console.log(props.selectedColor)
    if (props.selectedColor === "undefined") {
      props.setSelectedColor(color)
    } else {
      props.setSelectedColor("undefined")
    }
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} >
      {colors.map((color) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          style={{
            height: 0,
            width: "12.5%",
            backgroundColor: color,
            paddingBottom: "12.5%",
          }}
          onMouseOver={() => props.setSelectedColor(color)}
          onMouseLeave={() => props.setSelectedColor("")}
          onClick={() => toggleColorChange(color)}
        />
      ))}



    </div>
  );
}
