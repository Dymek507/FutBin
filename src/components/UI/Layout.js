import React, { useState } from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";

const Layout = (props) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-main-b-stadium bg-[50%_70%]">
      <Menu />
      <NavBar />

      <div className="flex grow justify-center items-center">
        <div className="bg-black/75 overflow-x-hidden">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
