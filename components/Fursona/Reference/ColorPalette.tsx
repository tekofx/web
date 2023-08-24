import { motion } from "framer-motion";
import { useState, Dispatch, SetStateAction } from "react";
import {
  Grid,
  Typography,
  Tooltip,
  Snackbar,
  Alert,
  Slide,
  Grow,
} from "@mui/material";

const colors = [
  {
    name: "Fur",
    hex: "#2D2D2D",
  },
  {
    name: "Fur",
    hex: "#A0A0A0",
  },
  {
    name: "Fur",
    hex: "#F7F7F7",
  },
  {
    name: "Hair",
    hex: "#2C7DE6",
  },
  {
    name: "Hair",
    hex: "#00DBFF",
  },
  {
    name: "Paws/Ears",
    hex: "#F0A19C",
  },
  {
    name: "Eyes",
    hex: "#11B55D",
  },
  {
    name: "Eyes",
    hex: "#E2E565",
  },
  {
    name: "Ponytail",
    hex: "#E4302A",
  },
];

interface Props {
  selectedColor: Color;
  setSelectedColor: Dispatch<SetStateAction<Color>>;
}

interface Color {
  name: string;
  hex: string;
}
export default function ColorPalette(props: Props) {
  const [open, setOpen] = useState(false);

  const onClick = (color: Color) => {
    if (props.selectedColor !== color) {
      props.setSelectedColor(color);
      navigator.clipboard.writeText(color.hex);
    } else {
      props.setSelectedColor({ name: "", hex: "" });
    }
    if (!open) {
      setOpen(true);
    }
    //toggleColorChange(color);
  };

  const onMouseOver = (color: Color) => {
    if (props.selectedColor !== color) {
      props.setSelectedColor(color);
    }
  };

  const onMouseLeave = () => {
    if (props.selectedColor.name !== "") {
      props.setSelectedColor({
        name: "",
        hex: "",
      });
    }
  };

  return (
    <>
      <Grid container>
        {colors.map((color) => (
          <Grid item xs key={color.hex}>
            <Tooltip
              TransitionComponent={Grow}
              title={
                <Typography
                  variant="h4"
                  textAlign="center"
                  style={{ color: "white" }}
                >
                  {color.name}
                </Typography>
              }
              placement="top"
              arrow
              sx={{ width: "200%" }}
            >
              {/*@ts-ignore */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{
                  height: "50%",
                  width: "100%",
                  backgroundColor: color.hex,
                  paddingBottom: "50%",
                  cursor: "pointer",
                }}
                onMouseOver={() => onMouseOver(color)}
                onMouseLeave={() => onMouseLeave()}
                onClick={() => onClick(color)}
              />
            </Tooltip>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ height: { xs: "8rem", sm: "8rem", md: "2rem", lg: "2rem" } }}
      >
        <Alert onClose={() => setOpen(false)} severity="success">
          Color {props.selectedColor.hex} - {props.selectedColor.name} copied to
          clipboard
        </Alert>
      </Snackbar>
    </>
  );
}
