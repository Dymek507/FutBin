import React, { useState } from "react";
import { app, database } from "../../firebaseConfig";
import { collection, addDoc, getDoc, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link as MuiLink } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {/* <Link color="inherit" href="/">
        FutDraft
      </Link> */}
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default function SignUp() {
  const auth = getAuth(app);

  const [formValid, setFormValid] = useState(false);

  const collectionRef = collection(database, "users");

  const checkboxValidity = (e) => {
    setFormValid(e.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    createUserWithEmailAndPassword(
      auth,
      data.get("email"),
      data.get("password")
      // data.get("lastName")
    )
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });

    // addDoc(collectionRef, {
    //   email: data.get("email"),
    //   password: data.get("password"),
    //   playersData: [],
    // })
    //   .then(() => {
    //     alert("Data Added");
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
  };

  const getData = (e) => {
    e.preventDefault();
    console.log(auth);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Zarejestruj się !
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Imię"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Nazwisko"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Hasło"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={checkboxValidity}
                      value="newPassword"
                      color="primary"
                    />
                  }
                  label="Użyłem hasła nie używanego na innych witrynach. Połączenie niezabezpieczone."
                />
              </Grid>
            </Grid>
            <Button
              disabled={!formValid}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Zarejestruj !
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/account/login"}>
                  {/* <MuiLink variant="body2">Masz już konto? Zaloguj się</MuiLink> */}
                </Link>
                <button onClick={getData}>Pobierz dane</button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5, pb: 2 }} />
      </Container>
    </ThemeProvider>
  );
}
