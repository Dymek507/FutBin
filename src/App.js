import { useEffect } from "react";
import HomeScreen from "./pages/HomeScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchPlayersData } from "./store/players-actions";
import { useDispatch } from "react-redux";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NewPacks from "./pages/NewPacks";
import MyPlayers from "./pages/MyPlayers";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

let firstRun = true;

const router = createBrowserRouter([
  { path: "/", element: <HomeScreen /> },
  { path: "/new-packs", element: <NewPacks /> },
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

  useEffect(() => {
    if (firstRun) {
      dispatch(fetchPlayersData());
      firstRun = false;
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
