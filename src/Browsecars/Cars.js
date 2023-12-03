import React from "react";

import CarsHome from "../homepage/CarsHome";
import Header from "../header/Header";
import Footer from "../components/Footer";

function Cars() {
  return (
    <div className=" w-[100%] h-[100%]   ">
      <Header />
      <CarsHome />
      <Footer />
    </div>
  );
}
export default Cars;
