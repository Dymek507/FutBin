import React, { useState } from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";

const Layout = (props) => {
  return (
    <div className="flex flex-col w-full">
      <Menu />
      <NavBar />

      <div className="flex grow bg-black/75 justify-center items-center">
        <div className="">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
