import React from "react";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
