import React from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";

const Layout = (props) => {
  return (
    <div className="flex flex-col w-full max-w-[1200px]">
      <Menu />
      <NavBar />

      <div className="grow bg-black/75">{props.children}</div>
    </div>
  );
};

export default Layout;
