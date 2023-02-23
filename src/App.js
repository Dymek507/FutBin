import { useEffect } from "react";
import HomeScreen from "./pages/HomeScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchPlayersData, sendPlayersData } from "./store/players-actions";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { uiActions } from "./store/ui-slice";
import { doc, getDoc, updateDoc } from "@firebase/firestore";

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
import { db } from "./firebaseConfig";

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
  console.log(auth.currentUser?.uid);

  const fetchUserData = async (uId) => {
    if (uId !== null) {
      const userDocRef = doc(db, `users/${uId}`);
      try {
        const userDoc = await getDoc(userDocRef);

        const userData = userDoc.data();

        dispatch(
          uiActions.login({
            logged: true,
            userData: {
              login: userData.login,
              uId: uId,
              money: userData.money,
              results: userData.results,
              goals: userData.goals,
            },
          })
        );
      } catch (error) {
        console.log("Błąd" + error);
      }
    }
  };

  useEffect(() => {
    const authentication = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const test = async () => {
          await fetchUserData(uid);
        };
        test();
      } else {
        dispatch(uiActions.login({ logged: false, uId: null, userData: null }));
      }
    });

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
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
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
