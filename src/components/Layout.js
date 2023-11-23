import React from "react";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="w-[100%] flex justify-center items-center bg-red-400">
      <Outlet />
    </div>
  );
}
export default Layout;
