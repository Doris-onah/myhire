import React from "react";

import CarsHome from "../homepage/CarsHome";
import Header from "../header/Header";
import Search from "../search/Search";
import Footer from "../components/Footer";
import ReviewHome from "../homepage/ReviewHome";

function Cars() {
  return (
    <div
      id="cars"
      className=" flex-col justify-center items-center w-[100%] h-[100%]  bg-gradient-to-r from-purple-800 to-pink-600 font-plus-jakarta-sans  "
    >
      <Header />
      <Search />
      <CarsHome />
      <ReviewHome />
      <Footer />
    </div>
  );
}
export default Cars;
