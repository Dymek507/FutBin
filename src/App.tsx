import { useEffect } from "react";
import HomeScreen from "./pages/Home/HomeScreen";
import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { uiActions } from "./store/ui-slice";
import { doc, getDoc } from "@firebase/firestore";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MyPacks from "./pages/Packs/MyPacks";
import MyPlayers from "./pages/MyPlayers/MyPlayers";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Login/RegisterPage";
import Admin from "./pages/Admin/Admin";
import NewPacks from "./pages/Packs/NewPacks";
import Layout from "./layouts/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import SquadPage from "./pages/Squad/SquadPage";
import { db } from "./firebaseConfig";
import React from "react";
import { useAppDispatch } from "./store/app/hooks";
import { logOut } from "./store/ui-actions";

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }



}

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "new-packs", element: <NewPacks /> },
      { path: "my-packs", element: <MyPacks /> },
      { path: "my-players", element: <MyPlayers /> },
      { path: "squad", element: <SquadPage /> },
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
  const dispatch = useAppDispatch();
  const auth = getAuth();


  const fetchUserData = async (uId: string) => {
    if (uId !== null) {
      const userDocRef = doc(db, `users/${uId}`);
      try {
        const userDoc = await getDoc(userDocRef);

        const userData = userDoc.data();

        dispatch(
          uiActions.login({
            logged: true,
            userData: {
              login: userData?.login,
              uId: uId,
              money: userData?.money,
              result: userData?.results,
              goals: userData?.goals,
            },
          })
        );
      } catch (error) {
        console.log("Błąd" + error);
      }
    }
  };

  useEffect(() => {
    const authentication = onAuthStateChanged(auth, async (user) => {
      if (user !== null) {
        const uid = user?.uid;
        if (uid) {
          await fetchUserData(uid);
        }
      } else {
        dispatch(logOut);
      }
    });

    return authentication();
  }, [auth, dispatch]);



  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "rgba(12,52,86,0.85)",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f50057",
        dark: "#ad0340",
        contrastText: "#fff",
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
    breakpoints: {
      values: {
        xs: 420,
        sm: 640,
        md: 900,
        lg: 1200,
        xl: 1536,
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
