import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  );
}
