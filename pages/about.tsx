import { Box, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{ px: 15, pb: 15, maxWidth: "100vw" }}>
        <Grid container sx={{ mt: 10 }}>
          <Grid xs={12} sm={6}>
            <Typography variant="h1" className="font-anton">
              About <span style={{ color: "#F7A8AC" }}>Us</span>
            </Typography>
            <Typography
              variant="h4"
              sx={{
                "& span": {
                  color: "#F7A8AC",
                },
              }}
            >
              We are a women led student based organization that fights{" "}
              <span>for women's rights</span> and{" "}
              <span>equality for all genders</span>
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 15 }}>
          <Grid xs={12} sm={6}></Grid>
          <Grid xs={12} sm={6} sx={{ textAlign: { sm: "right" } }}>
            <Typography variant="h2" className="font-anton">
              Our story
            </Typography>
            <Typography variant="h6">
              The idea of Empower Her Steps started in September of 2022, when a
              high school sophomore named Kashvi Khabrani promised herself to
              make the world better for women after the Supreme Court overturned
              Roe v. Wade and restricted abortion rights for American women.
              <br />
              <br /> Empower Her Steps was officially founded in May of 2023,
              and since then, has expanded to multiple schools.
            </Typography>
          </Grid>
        </Grid>

        {/* staff */}

        <Grid container sx={{ mt: 10 }}>
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
