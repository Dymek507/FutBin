import React, { useState } from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";

const Layout = (props) => {
  return (
    <div className="flex flex-col w-full">
      <Menu />
      <NavBar />

      <div className="flex grow justify-center items-center">
        <div className="bg-black/75">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
