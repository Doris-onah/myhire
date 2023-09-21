import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="home w-[100%]  flex flex-col ">
      <Outlet />
    </div>
  );
}
export default Layout;
