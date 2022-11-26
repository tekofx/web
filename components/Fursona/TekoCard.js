import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import FursonaCard from "./FursonaCard";
export default function PresentationCard() {
  return (
    <FursonaCard
      name="Teko"
      species="Arctic Fox"
      speciesLatin="Vulpes Lagopus"
      pronouns="He/Him"
      web="tekofx.github.com/web"
      birthday="1/1/2001"
      img="img/card_picture.png"
    />
  );
}
