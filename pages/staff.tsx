import { Box, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{ px: 15, pb: 15, pt: 15, maxWidth: "100vw" }}>
        <Typography variant="h1" className="font-anton">
          Our <span style={{ color: "#F7A8AC" }}>Staff</span>
        </Typography>
        <Grid container sx={{ mt: 5 }}>
          {[
            {
              name: "Kashvi Khabrani (she/her)",
              role: "Founder + President",
              img: "/images/people/kashvi.png",
            },
            {
              name: "Hafsa Shaik (any pronouns)",
              role: "Vice President",
              img: "/images/people/hafsa.png",
            },
            {
              name: "Raha Yekta (she/they)",
              role: "Graphic Designer",
              img: "/images/people/raha.png",
            },
            {
              name: "Srividya Kollu (she/her)",
              role: "Graphic Designer",
              img: "/images/people/srividya.png",
            },
            {
              name: "Sydney Weitzman (she/her)",
              role: "Content Writer",
              img: "/images/people/sydney.png",
            },
            {
              name: "Harini Ramesh (she/her)",
              role: "Reels Creator + Graphic Designer",
              img: "/images/people/harini.png",
            },
            {
              name: "Angelina Rodriguez (she/her)",
              role: "Reels Creator",
              img: "/images/people/angelina.png",
            },
            {
              name: "Piyush Vaishnava (he/him)",
              role: "Reels Creator",
              img: "/images/people/piyush.png",
            },
          ].map((person) => (
            <Grid
              xs={12}
              sm={3}
              key={person.name}
              sx={{ textAlign: "center", p: 1.5 }}
            >
              <img src={person.img} width="100%" />
              <Typography variant="h6">{person.name}</Typography>
              <Typography>{person.role}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
