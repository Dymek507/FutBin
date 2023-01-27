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
import NewPacks from "./pages/NewPacks";

let firstRun = true;

const router = createBrowserRouter([
  { path: "/", element: <HomeScreen /> },
  { path: "/new-packs", element: <NewPacks /> },
  { path: "/my-packs", element: <MyPacks /> },
  { path: "/my-players", element: <MyPlayers /> },
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
]);

function App() {
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    if (firstRun) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          // console.log(uid);
          dispatch(uiActions.login({ logged: true, uId: uid }));
          // console.log("zalogowano");
        } else {
          dispatch(uiActions.login({ logged: false, uId: null }));
          // console.log("wylogowano");
        }
      });
      firstRun = false;
    }
  }, [auth, dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
