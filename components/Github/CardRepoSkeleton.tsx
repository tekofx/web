import { Skeleton, Paper, Grid, Box } from "@mui/material";
export default function CardRepoSkeleton() {
  return (
    <div>
      <Skeleton
        component={Box}
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height="auto"
      />
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Skeleton
              variant="rectangular"
              animation="wave"
              height={30}
              sx={{ borderRadius: 1000 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Skeleton animation="wave" height={30} width="40%" />
            <Skeleton animation="wave" height={25} width="100%" />
            <Skeleton animation="wave" height={25} width="80%" />
          </Grid>

          <Grid item xs={3} sm={3} md={3} lg={4}>
            <Skeleton
              variant="rounded"
              animation="wave"
              height={30}
              width="75%"
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
