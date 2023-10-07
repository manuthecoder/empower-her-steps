import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

function Links() {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const d = (
    <>
      <Menu anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            router.push("/about");
          }}
        >
          About us
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            router.push("/staff");
          }}
        >
          Our staff
        </MenuItem>
      </Menu>
      <Button
        onClick={handleClick}
        color="inherit"
        className="font-anton"
        variant={isMobile ? "outlined" : "text"}
        fullWidth={isMobile}
        sx={{
          textTransform: "none",
          borderColor: "#ddd",
          borderWidth: { xs: "2px!important", sm: 0 },
          fontSize: "1rem",
          mb: { xs: 2, sm: 0 },
        }}
      >
        About
      </Button>
      {[
        { name: "Newsletters", path: "/newsletters" },
        { name: "Chapters", path: "/chapters" },
        { name: "Get involved", path: "/get-involved" },
      ].map((button) => (
        <Button
          key={button.name}
          onClick={() => router.push(button.path)}
          color="inherit"
          className="font-anton"
          variant={isMobile ? "outlined" : "text"}
          fullWidth={isMobile}
          sx={{
            textTransform: "none",
            borderColor: "#ddd",
            borderWidth: { xs: "2px!important", sm: 0 },
            fontSize: "1rem",
            mb: { xs: 2, sm: 0 },
          }}
        >
          {button.name}
        </Button>
      ))}
    </>
  );
  return isMobile ? (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <span className="material-symbols-outlined">menu</span>
      </IconButton>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        disableSwipeToOpen
        onOpen={() => setOpen(false)}
        BackdropProps={{
          sx: {
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(5px)",
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: "20px 20px 0 0",
            background: "#faf6ef",
            boxShadow: 0,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: 60,
              height: 3,
              bgcolor: "#aaa",
              my: 2,
              borderRadius: 5,
            }}
          />
        </Box>
        <Box sx={{ p: 2 }}>{d}</Box>
      </SwipeableDrawer>
    </>
  ) : (
    d
  );
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Empower Her Steps</title>
        <meta name="description" content="Empower Her Steps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar
        elevation={0}
        position="sticky"
        sx={{
          background: "#FAF6EF",
          zIndex: 99,
          color: "#000",
          borderBottom: "1px solid #aaa",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              cursor: "pointer",
              mr: "auto",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
            onClick={() => router.push("/")}
          >
            <img
              src="/images/logo.png?purge=true"
              style={{ height: "70px!important", width: "70px!important" }}
              width={70}
              height={70}
            />
            <Typography variant="h6" className="font-lexend-peta">
              Empower her steps
            </Typography>
          </Box>

          <Links />
        </Toolbar>
      </AppBar>
      <Component {...pageProps} />
    </>
  );
}
