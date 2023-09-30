import { Box, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          background: "url(/images/hero.png)",
          backgroundSize: "cover",
          height: "300px",
          width: "100dvw",
        }}
      />
      <Box sx={{ px: 5, maxWidth: "100vw" }}>
        <Box
          sx={{
            display: "flex",
            py: 15,
            my: 4,
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            "& .img": {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              height: "100%",
              width: "auto",
            },
          }}
        >
          <img src="/images/blur.png" style={{ maxWidth: "100dvw" }} className="img" />
          <Box sx={{ zIndex: 1 }}>
            <Typography variant="h3" className="font-anton">
              your one stop page for
            </Typography>
            <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
              Women&apos;s rights
            </Typography>
          </Box>
        </Box>
        <Grid container sx={{ textAlign: "center", mb: 8 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mb: { xs: 2 },
            }}
          >
            <Typography variant="h4">
              Follow&nbsp;us&nbsp;on
              <br />
              Instagram!
            </Typography>
            <Box
              sx={{
                display: "inline-flex",
                justifyContent: "center",
                background: "#F7A8AC",
                p: 2,
                mt: 2,
                color: "#fff",
                borderRadius: 5,
              }}
            >
              @empowerhersteps
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              gap: 2,
              width: "10px",
              "& img": { width: "100%", height: "auto" },
            }}
          >
            <Grid container columnSpacing={2}>
              <Grid item xs={6}>
                <img src="/images/post-1.png" width="10px" />
              </Grid>
              <Grid item xs={6}>
                <img src="/images/post-2.png" width="10px" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
