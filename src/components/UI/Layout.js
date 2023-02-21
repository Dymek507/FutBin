import React from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = (props) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-main-b-stadium [background-position-x:60%] bg-no-repeat bg-main-bgc ">
      <Menu />
      <NavBar />
      <div className="flex h-[calc(100vh-4rem)] justify-center items-center overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
