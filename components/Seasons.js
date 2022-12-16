import * as React from "react";
import { Typography } from "@mui/material";
import getLang from "./Language/Lang";

/**
 * January:0
 * February:1
 * March:2
 * April:3
 * May:4
 * June:5
 * July:6
 * August:7
 * September:8
 * October:9
 * November:10
 * December:11
 */

export default function Seasons() {
  const t = getLang().home;

  const today = new Date();
  const year = today.getFullYear();

  const month = parseInt(today.getMonth());
  const day = parseInt(String(today.getDate()).padStart(2, "0"));

  var image = null;
  var text = "";

  if (new Date(year, 8, 21) < today && today < new Date(year, 11, 21)) {
    if (day === 31 && month === 9) {
      image = process.env.PUBLIC_URL + "img/juaguelin.png";
      text = t.halloweenText;
    } else {
      image = process.env.PUBLIC_URL + "img/Autumn.png";
      text = t.autumnText;
    }
  }

  if (month === 5) {
    // Pride
    image = process.env.PUBLIC_URL + "img/summer - lgtb.png";
    text = t.prideText;
  }

  if (new Date(year, 11, 23) < today && today < new Date(year, 11, 30)) {
    // Christmas
    image = process.env.PUBLIC_URL + "img/Merry Foxmas.png";
    text = t.christmasText;
  }

  if (image != null) {
    return (
      <div>
        <Typography>{text}</Typography>
        <img alt="" src={image} width="100%" />
      </div>
    );
  }
}
