import React from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-main-b-stadium [background-position-x:60%] bg-no-repeat">
      <Menu />
      <NavBar />
      <div className="flex min-h-[calc(100vh-4rem)] justify-center overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
