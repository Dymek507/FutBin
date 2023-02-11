import React, { useState } from "react";
import { app, db } from "../../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";
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
import { doc, setDoc } from "@firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        FutDraft
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(12,52,86,0.85)",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default function SignUp() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const uId = useSelector((state) => state.ui.uId);
  console.log(uId);

  const [formValid, setFormValid] = useState(false);

  const checkboxValidity = (e) => {
    setFormValid(e.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Logout from account
    // signOut(auth)
    //   .then(() => {
    //     console.log("Sign-out successful.");
    //   })
    //   .catch((error) => {
    //     console.log("An error happened.");
    //   });

    const data = new FormData(event.currentTarget);
    //Create new user with email and password
    createUserWithEmailAndPassword(
      auth,
      data.get("email"),
      data.get("password")
    )
      .then((user) => {
        //Make document for new user
        const newUser = doc(db, `users/${user.user.uid}`);
        console.log(user);

        setDoc(newUser, {
          login: data.get("login"),
          email: user.user.email,
          playersData: [],
          currentPackPlayers: [],
          money: 0,
          result: { wins: 0, draws: 0, loses: 0 },
          goals: { goalsFor: 0, goalsAgainst: 0 },
        });
        dispatch(
          uiActions.login({
            logged: true,
            uId: user.user.uid,
            userData: user.user.email,
          })
        );
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
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
            margin: 1,
            paddingTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: "primary.main",
              width: "60px",
              height: "60px",
            }}
          >
            <LockOutlinedIcon fontSize="large" />
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
              <Grid item xs={12}>
                <TextField
                  autoComplete="login"
                  name="login"
                  required
                  fullWidth
                  id="login"
                  label="Login"
                  autoFocus
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
                <Link to={"/account/login"}>Masz już konto? Zaloguj się</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5, pb: 2 }} />
      </Container>
    </ThemeProvider>
  );
}
