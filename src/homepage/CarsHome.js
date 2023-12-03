import React from "react";
import Search from "../search/Search";
import PopularCars from "../Browsecars/PopularCars";

function CarsHome() {
  return (
    <div className="w-[100%] h-[100%]  bg-gradient-to-r from-purple-600 to-pink-700 font-plus-jakarta-sans  flex items-center justify-center">
      <div className="flex w-[90%] mt-2 h-[100%] flex-col items-center justify-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        <div>
          <h1 className="text-4xl font-semibold text-white hidden md:block">
            Check Out Trending Car Rental Details
          </h1>
          <h1 className="text-[20px] font-bold text-white md:hidden block">
            Most popular car rental deals
          </h1>
          <p className="text-center text-[16px] text-[#FFF] hidden md:block">
            See the Car Rental Deals Everyone is Talking About, from New <br />{" "}
            Deals to Recurring Deals
          </p>
        </div>
        <Search />
        <PopularCars />
      </div>
    </div>
  );
}
export default CarsHome;
