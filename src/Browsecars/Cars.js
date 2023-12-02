import React from "react";

import CarsHome from "../homepage/CarsHome";
import Header from "../header/Header";
import Footer from "../components/Footer";
import ReviewHome from "../homepage/ReviewHome";

function Cars() {
  return (
    <div className=" flex-col justify-center items-center w-[100%] h-[100%]  bg-gradient-to-r from-purple-600 to-pink-600 font-plus-jakarta-sans  ">
      <Header />
      <CarsHome />
      <ReviewHome />
      <Footer />
    </div>
  );
}
export default Cars;
