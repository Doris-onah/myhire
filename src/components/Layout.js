import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./header/Header";

function Layout() {
  return (
    <div className="home w-[100%]  flex flex-col ">
      {/* <div className=""> <Header /> </div> */}
      <Outlet />
    </div>
  );
}
export default Layout;
