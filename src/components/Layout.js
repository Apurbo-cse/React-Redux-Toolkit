import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./include/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container-lg">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
