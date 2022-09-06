import * as React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const pride = require("./summer - lgtb.jpg");
const halloween = require("./juaguelin.png");
const christmas = require("./Merry Foxmas.png");
const autumn = require("./Autumn.png");
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

export default function Footer() {
  const { t } = useTranslation();

  const today = new Date();
  const year = today.getFullYear();

  const month = parseInt(today.getMonth());
  const day = parseInt(String(today.getDate()).padStart(2, "0"));

  var image = null;
  var text = "";

  if (new Date(year, 8, 21) < today && today < new Date(year, 11, 21)) {
    if (day === 31 && month === 9) {
      image = halloween;
      text = t("halloweenText");
    } else {
      image = autumn;
      text = t("autumnText");
    }
  }

  if (month === 5) {
    // Pride
    image = pride;
    text = t("prideText");
  }

  if (new Date(year, 11, 23) < today && today < new Date(year, 11, 30)) {
    // Christmas
    image = christmas;
    text = t("christmasText");
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
