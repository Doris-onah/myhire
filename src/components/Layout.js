import React from "react";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="w-[100%] flex justify-center items-center ">
      <Outlet />
    </div>
  );
}
export default Layout;
