import { useEffect } from "react";
import HomeScreen from "./pages/HomeScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchPlayersData, sendPlayersData } from "./store/players-actions";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { uiActions } from "./store/ui-slice";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MyPacks from "./pages/MyPacks";
import MyPlayers from "./pages/MyPlayers";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Admin from "./pages/Admin";
import NewPacks from "./pages/NewPacks";
import Layout from "./components/UI/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import Squad from "./pages/Squad";

let firstRun = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "new-packs", element: <NewPacks /> },
      { path: "my-packs", element: <MyPacks /> },
      { path: "my-players", element: <MyPlayers /> },
      { path: "squad", element: <Squad /> },
      { path: "admin", element: <Admin /> },
      {
        path: "/account",
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    // if (firstRun) {
    const authentication = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        const userData = user.email;
        dispatch(uiActions.login({ logged: true, uId: uid, userData }));
        console.log("zalogowano");
      } else {
        dispatch(uiActions.login({ logged: false, uId: null, userData: "" }));
        console.log("wylogowano");
      }
    });
    firstRun = false;

    return authentication();
  }, [auth, dispatch]);

  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "rgba(12,52,86,0.85)",
        mainDarker: "rgba(12,52,86,0.95)",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
