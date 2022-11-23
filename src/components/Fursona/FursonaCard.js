import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

export default function PresentationCard(props) {
  return (
    <Card
      id="fursonaCard"
      sx={{
        display: "flex",
        backgroundColor: "#fff",
        width: 480,
        height: 270,
        borderRadius: 4,
      }}
    >
      <Grid container sx={{ backgroundColor: "white", borderRadius: 4 }}>
        <Grid item xs={5} sm={5} md={5} lg={5}>
          <CardMedia
            component="img"
            image="card_picture.png"
            alt="green iguana"
            sx={{
              width: "80%",
              height: "auto",
              objectFit: "cover",
              marginTop: "15%",
              marginBottom: "15%",
              marginLeft: "10%",

              borderRadius: 3,
            }}
          />
          {/* <img
            src="/avatar.jpg"
            style={{
              width: "90%",
              height: "100%",
              objectFit: "cover",
              marginTop: "15%",
              marginLeft: "10%",

              borderRadius: 3,
            }}
          /> */}
        </Grid>
        <Grid item xs={7} sm={7} md={7} lg={7}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="card_name">{props.name}</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="card_headline">Species</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="card_value">{props.species}</Typography>
                <Typography variant="card_value" sx={{ color: "#969696" }}>
                  {props.speciesLatin}
                </Typography>
              </Grid>
              <Grid item xs={5} sm={5} md={5} lg={5}>
                <Typography variant="card_headline">Pronouns</Typography>
                <br />
                <Typography variant="card_value">{props.pronouns}</Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Typography variant="card_headline">Birthday</Typography>
                <br />
                <Typography variant="card_value">{props.birthday}</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="card_headline">Website</Typography>
                <br />
                <Typography variant="card_value">{props.web}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
