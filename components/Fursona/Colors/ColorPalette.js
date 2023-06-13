import { motion } from "framer-motion";
import { useState } from "react";
import { Grid, Typography, Tooltip, Snackbar, Alert, Slide } from "@mui/material";

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
  const [open, setOpen] = useState(false);




  const toggleColorChange = (color) => {

    if (props.selectedColor === color) {
      props.setSelectedColor(color)
    }


    if (props.selectedColor === "undefined") {
      props.setSelectedColor(color)
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

  const onClick = (color) => {
    props.setSelectedColor(color);
    // Randomly show snackbar
    navigator.clipboard.writeText(props.label);
    if (!open) {
      setOpen(true);
    }
    toggleColorChange(color);
  };



  return (
    <>
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
                cursor: "pointer",
              }}
              onMouseOver={() => props.setSelectedColor(color)}
              onMouseLeave={() => props.setSelectedColor("")}
              onClick={() => onClick(color)}
            >
              <Typography variant="h4" textAlign="center" style={{ color: getContrastColor(color) }}>
                {color}
              </Typography>
            </motion.div>

          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={20000}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        sx={{ bottom: "50px" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Color {props.selectedColor} copied to clipboard
        </Alert>
      </Snackbar>
    </>


  );
}
