import React from "react";
import { createHashRouter } from "react-router-dom";

import loadable from "@loadable/component";

import Login from "./pages/Login/LoginPage";
import Register from "./pages/Login/RegisterPage";
import Layout from "./layouts/MainLayout";
import Error from "./pages/Error/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";


const Landing = loadable(
  () => import("./pages/Landing/LandingPage")
);
const Home = loadable(() => import("./pages/Home/HomePage"));
const NewPacks = loadable(() => import("./pages/Packs/NewPacksPage"));
const MyPacks = loadable(() => import("./pages/Packs/MyPacksPage"));
const Squad = loadable(() => import("./pages/Squad/SquadPage"));
const MyPlayers = loadable(() => import("./pages/MyPlayers/MyPlayersPage"));
const Admin = loadable(() => import("./pages/Admin/AdminPage"));

export const router = createHashRouter([
  {
    path: "",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "home", element: <Home /> },
      {
        path: "new-packs", element: <PrivateRoute><NewPacks />
        </PrivateRoute>
      },
      { path: "my-packs", element: <PrivateRoute><MyPacks /></PrivateRoute> },
      { path: "my-players", element: <PrivateRoute><MyPlayers /></PrivateRoute> },
      { path: "squad", element: <PrivateRoute><Squad /></PrivateRoute> },
      { path: "admin", element: <PrivateRoute><Admin /></PrivateRoute> },
      {
        path: "/account",
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);
