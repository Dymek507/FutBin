import React, { useState } from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";

const Layout = (props) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-main-b-stadium bg-no-repeat bg-main-bgc ">
      <Menu />
      <NavBar />

      <div className="flex grow justify-center items-center">
        <div className="overflow-x-hidden" style={props.styles}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
