import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Grid } from "@mui/material";
import { motion } from "framer-motion";
import getLang from "../Language/Lang";

interface Props {
  title: string;
  description: string;
  url: string;
  img: string;
  topics: string[];
}

export default function CardRepo(props: Props) {
  const t = getLang().projects;

  return (
    <Card
      className="card"
      component={motion.div}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <CardMedia component="img" width="auto" image={props.img} />
      <CardContent className="cardContent" sx={{ minHeight: 100 }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {props.topics.map((element) => (
              <Chip
                key={element}
                color="secondary"
                label={element}
                sx={{ marginRight: 1 }}
              />
            ))}
          </Grid>
          <br />
          <br />

          <Grid
            item
            sx={{ paddingBottom: "2%", height: 80 }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <Typography gutterBottom variant="h4" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2">{props.description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className="cardContent">
        <Button
          className="button"
          variant="contained"
          target="_blank"
          href={props.url}
          size="small"
        >
          {t.button}
        </Button>
      </CardActions>
    </Card>
  );
}
