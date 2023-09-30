import { Box, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{ px: 15, pb: 15, maxWidth: "100vw" }}>
        <Grid container sx={{ mt: 10 }}>
          <Grid xs={12} sm={8}>
            <Typography variant="h1" className="font-anton">
              Sign&nbsp;up&nbsp;for&nbsp;our{" "}
              <span style={{ color: "#F7A8AC" }}>Newsletter</span>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
