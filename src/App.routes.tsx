import React from "react";
import loadable from "@loadable/component";
import { createHashRouter } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Login/RegisterPage";
import Layout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


const HomeScreen = loadable(
  () => import("./pages/Home/HomeScreen/RootHomePage")
);
const NewPacks = loadable(() => import("./pages/Packs/NewPacksPage"));
const MyPacks = loadable(() => import("./pages/Packs/MyPacksPage"));
const SquadPage = loadable(() => import("./pages/Squad/SquadPage"));
const MyPlayers = loadable(() => import("./pages/MyPlayers/MyPlayers"));
const Admin = loadable(() => import("./pages/Admin/Admin"));

export const router = createHashRouter([
  {
    path: "",
    element: <HomeScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
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
