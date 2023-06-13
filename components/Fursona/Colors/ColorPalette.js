import { motion } from "framer-motion";
import { Grid, Typography } from "@mui/material";
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
  function getContrastColor(hexcolor) {
    // If a leading # is provided, remove it
    if (hexcolor.slice(0, 1) === '#') {
      hexcolor = hexcolor.slice(1);
    }

    // Convert to RGB value
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);

    // Get YIQ ratio
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    // Check contrast
    return (yiq >= 128) ? '#000000' : '#FFFFFF';
  }


  return (
    <Grid container
    >
      {colors.map((color) => (
        <Grid item xs>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{
              height: "50%",
              width: "100%",
              backgroundColor: color,
              paddingBottom: "50%",
            }}
            onMouseOver={() => props.setSelectedColor(color)}
            onMouseLeave={() => props.setSelectedColor("")}
            onClick={() => toggleColorChange(color)}
          >
            <Typography variant="h4" textAlign="center" style={{ color: getContrastColor(color) }}>
              {color}
            </Typography>
          </motion.div>

        </Grid>
      ))}
    </Grid>



  );
}
