import React, { useEffect, lazy, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { uiActions } from "./store/ui-slice";
import { doc, getDoc } from "@firebase/firestore";
import { createTheme, LinearProgress, ThemeProvider } from "@mui/material";
import { db } from "./firebaseConfig";
import { useAppDispatch } from "./store/app/hooks";
import { logOut } from "./store/ui-actions";
import { router } from './App.routes'

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { themeMain } from "./AppMuiTheme";




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

  //After app starts, this code check if user is logged in. If yes, fetch user data from firebase and save it in redux store.
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

  return (
    <>
      <ThemeProvider theme={themeMain}>
        <Suspense fallback={<div className="w-screen h-screen ">
          <LinearProgress />
        </div>}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
