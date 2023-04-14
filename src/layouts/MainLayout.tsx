import React from "react";
import NavBar from "./NavBar";
import Menu from "./Menu/Menu";
import { Outlet } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const Layout = () => {
  return (
    <SnackbarProvider maxSnack={4}>
      <div className="flex flex-col w-full min-h-screen main-background">
        <Menu />
        <NavBar />
        <div className="flex min-h-[calc(100vh-4rem)] justify-center overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </SnackbarProvider>
  );
};


export default Layout;

