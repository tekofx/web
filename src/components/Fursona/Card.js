import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

export default function PresentationCard() {
  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "#fff",
        width: 480,
        height: 270,
        borderRadius: 3,
      }}
    >
      <Grid container>
        <Grid item lg={5}>
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
        <Grid item lg={7}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Grid container>
              <Grid item lg={12}>
                <Typography variant="card_name">Teko</Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography variant="card_headline">Species</Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography variant="card_value">Arctic Fox </Typography>
                <Typography variant="card_value" sx={{ color: "#969696" }}>
                  Vulpes Lagopus
                </Typography>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="card_headline">Pronouns</Typography>
                <br />
                <Typography variant="card_value">He/Him</Typography>
              </Grid>
              <Grid item lg={3}>
                <Typography variant="card_headline">Birthday</Typography>
                <br />
                <Typography variant="card_value">01/01/2001</Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography variant="card_headline">Website</Typography>
                <br />
                <Typography variant="card_value">
                  tekofx.github.com/web
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
